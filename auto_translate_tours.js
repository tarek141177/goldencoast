import fs from 'fs';
import path from 'path';
import translate from 'google-translate-api-x';

// We need to extract the tours array directly. We'll string-manipulate `tours.ts`
const toursPath = path.resolve('./src/data/tours.ts');
let toursContent = fs.readFileSync(toursPath, 'utf8');

// Match the array starting with `export const tours: Tour[] = [` and ending before `export const getTourBySlug`
const tourArrayMatch = toursContent.match(/export const tours\s*:\s*Tour\[\]\s*=\s*(\[[\s\S]*?\]);\n\nexport const getTourBySlug/);

if (!tourArrayMatch) {
  console.error("Could not find tours array");
  process.exit(1);
}

// Evaluate to get the array of objects, stripping imports and image references
let tourArrayString = tourArrayMatch[1];
// Replace image variables (like image8) with ''
tourArrayString = tourArrayString.replace(/image\d+/g, "''");

const tours = eval(`(${tourArrayString})`);

const langs = ['de', 'nl', 'pl', 'fr'];
const delay = (ms) => new Promise(res => setTimeout(res, ms));

async function run() {
  const resultData = { en: {} };

  // First, map English
  tours.forEach(tour => {
    resultData.en[tour.slug] = {
      title: tour.title,
      description: tour.description,
      price: tour.price.replace('From ', ''), // just the price
      duration: tour.duration,
      groupSize: tour.groupSize,
      availability: tour.availability,
      category: tour.category,
      longDescription: tour.longDescription,
      program: tour.program,
      included: tour.included,
      notIncluded: tour.notIncluded
    };
  });

  for (const lang of langs) {
    resultData[lang] = {};
    console.log(`Translating to ${lang}...`);

    for (let i = 0; i < tours.length; i++) {
      const t = tours[i];
      console.log(`  Translating tour ${i+1}/${tours.length}: ${t.slug} to ${lang}...`);
      
      try {
        // Collect strings to translate
        const stringsToTranslate = [
          t.title,
          t.description,
          t.duration, // full day, 8 hours, etc
          t.groupSize, // up to 25 people, etc
          t.availability, // daily
          t.category, // sea & snorkeling, etc
          t.longDescription,
          ...t.program,
          ...t.included,
          ...t.notIncluded
        ];

        // Translate in one call per tour
        const res = await translate(stringsToTranslate, { to: lang });
        const translatedArray = Array.isArray(res) ? res.map(r => r.text) : [res.text];

        let index = 0;
        resultData[lang][t.slug] = {
          title: translatedArray[index++],
          description: translatedArray[index++],
          price: t.price.replace('From ', ''), // Keep the price as is (e.g. $38)
          duration: translatedArray[index++],
          groupSize: translatedArray[index++],
          availability: translatedArray[index++],
          category: translatedArray[index++],
          longDescription: translatedArray[index++],
          program: [],
          included: [],
          notIncluded: []
        };

        for (let j = 0; j < t.program.length; j++) {
          resultData[lang][t.slug].program.push(translatedArray[index++]);
        }
        for (let j = 0; j < t.included.length; j++) {
          resultData[lang][t.slug].included.push(translatedArray[index++]);
        }
        for (let j = 0; j < t.notIncluded.length; j++) {
          resultData[lang][t.slug].notIncluded.push(translatedArray[index++]);
        }

        await delay(1500); // 1.5 second delay to prevent rate limit
      } catch (err) {
        console.error(`Error translating ${t.slug} to ${lang}:`, err);
      }
    }
  }

  // Write the output to a temporary JSON file
  fs.writeFileSync('./tours_translations.json', JSON.stringify(resultData, null, 2));
  console.log("Translations successfully written to tours_translations.json");
}

run();
