const fs = require('fs');

const currentContent = fs.readFileSync('src/data/tours.ts', 'utf8');
const sourceContent = fs.readFileSync('d:\\Downloads\\magic-tour-hurghada-main\\magic-tour-hurghada-main\\src\\data\\tours-en.ts', 'utf8');

// We use eval to parse the array
const toursDataStr = sourceContent.substring(sourceContent.indexOf('export const toursData: Tour[] = [') + 33, sourceContent.lastIndexOf('];') + 1);

let toursData;
eval(`
  const generateSlug = (title) => {
      const map = {
          'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
          'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
      };
      let slug = title.split('').map(c => map[c] || c).join('').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      if (slug.endsWith('hurghada')) return slug;
      return slug + '-hurghada';
  };
  toursData = ` + toursDataStr + `;
`);

// Filter out quad bike masters
const newTours = toursData.filter(t => t.slug !== 'quad-bike-masters');

// Mapping images manually based on the previous tours.ts file
const imageMap = {
  "sahara-park-mega-safari": "image6",
  "quad-safari-po-poludniu": "image7", // Afternoon
  "wyspa-orange-top-vip-hurghada": "image17", // Orange
  "dom-delfinow-vip-hurghada": "image10", // Dolphin
  "nurkowanie-intro-hurghada": "image9", // Intro Diving
  "wycieczka-do-kairu-z-hurghady": "image19", // Cairo Bus
  "luksoru-z-dolina-krolow-z-hurghady": "image18", // Luxor
  "wyspa-paradise-top-vip-hurghada": "image8", // Paradise
  "sharm-el-naga-hurghada": "image1",
  "parasailing-hurghada": "image4",
  "prywatna-wycieczka-lodzia-motorowa-vip-hurghada": "image5", // Private Speedboat
  "nurkowanie-hurghada": "image3", // Diving Hurghada
  "salem-express-hurghada": "image11",
  "glass-boat-hurghada": "image13",
  "grand-aquarium-hurghada": "image21",
  "zwiedzanie-el-gouna-city-tour-hurghada": "image22",
  "quad-safari-rano-z-hurghady": "image2", // Morning 
  "zwiedzanie-hurghady-city-tour": "image14",
  "sindbad-okret-podwodny": "image20",
  "jazda-konna-w-hurghadzie-private": "image12", // Horse
  "prywatna-wycieczka-do-kairu-i-starozytnego-egiptu-samolotem": "image16", // Plane
  "prywatna-wycieczka-do-kairu-i-starozytny-egipt-z-hurghady": "image15" // Private Cairo
};

const categoryMap = {
    "hurghada": "Sea & Snorkeling",
    "from_hurghada": "Historical"
};

function parseMarkdownToFields(longDesc) {
  let mainDesc = longDesc;
  let programStr = "";
  let includedStr = "";
  let notIncludedStr = "";

  // The regex logic needs to be tolerant of different headings.
  // Sometimes it's "**Tour Program:**" sometimes "**Tour Program**" sometimes "Program:" etc
  const matchProg = longDesc.match(/(?:\*\*Tour Program.*?\*\*|\*\*Detailed Itinerary:?\*\*|\*\*Detailed Program:?\*\*)\n?([\s\S]*?)(?=\*\*What is|\*\*Inclusions|\*\*Included|\*\*Important|\n\n\*\*|$)/i);
  if (matchProg) {
    programStr = matchProg[1];
    mainDesc = mainDesc.replace(matchProg[0], '');
  }

  const matchInc = longDesc.match(/(?:\*\*What is included(?:.*?)?\:\*\*|\*\*Inclusions:?\*\*|\*\*Included:?\*\*)\n?([\s\S]*?)(?=\*\*What is not|\*\*Exclusions|\*\*Not Included|\*\*Important|\n\n\*\*|$)/i);
  if (matchInc) {
    includedStr = matchInc[1];
    mainDesc = mainDesc.replace(matchInc[0], '');
  }

  const matchNotInc = longDesc.match(/(?:\*\*What is not included.*?\:\*\*|\*\*Exclusions:?\*\*|\*\*Not Included:?\*\*)\n?([\s\S]*?)(?=\*\*Important|\n\n\*\*|$)/i);
  if (matchNotInc) {
    notIncludedStr = matchNotInc[1];
    mainDesc = mainDesc.replace(matchNotInc[0], '');
  }

  const toArray = (str) => {
    return str.split('\n').map(s => s.replace(/^\*\s*/, '').replace(/^[0-9]+\.\s*/, '').trim()).filter(s => s.length > 0);
  };
  const toArrayComma = (str) => {
    if (str.includes('*') || str.includes('\n')) return toArray(str);
    return str.split(',').map(s => s.trim()).filter(s => s.length > 0);
  };

  return {
    cleanDesc: mainDesc.trim(),
    program: toArray(programStr),
    included: toArrayComma(includedStr),
    notIncluded: toArrayComma(notIncludedStr)
  };
}

let newExportStr = `import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.jpg";
import image8 from "@/assets/image8.jpg";
import image9 from "@/assets/image9.jpg";
import image10 from "@/assets/image10.jpg";
import image11 from "@/assets/image11.jpg";
import image12 from "@/assets/image12.jpg";
import image13 from "@/assets/image13.jpg";
import image14 from "@/assets/image14.jpg";
import image15 from "@/assets/image15.jpg";
import image16 from "@/assets/image16.jpg";
import image17 from "@/assets/image17.jpg";
import image18 from "@/assets/image18.jpg";
import image19 from "@/assets/image19.jpg";
import image20 from "@/assets/image20.jpg";
import image21 from "@/assets/image21.jpg";
import image22 from "@/assets/image22.jpg";

export interface Tour {
  slug: string;
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  rating: number;
  badge?: string;
  availability: string;
  category: string;
  longDescription: string;
  program: string[];
  included: string[];
  notIncluded: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const tours: Tour[] = [
`;

newTours.forEach(t => {
   const fields = parseMarkdownToFields(t.longDescription);
   // fallback image if not mapped
   const img = imageMap[t.slug] || "image1"; 
   
   let cat = t.category === "from_hurghada" ? "Historical" : "Sea & Snorkeling";
   if (t.title.toLowerCase().includes("safari") || t.title.toLowerCase().includes("quad") || t.title.toLowerCase().includes("buggy")) {
      cat = "Safari & Adventure";
   }
   if (t.title.toLowerCase().includes("city") || t.title.toLowerCase().includes("aquarium") || t.title.toLowerCase().includes("submarine")) {
      cat = "City & Attractions";
   }

   newExportStr += `  {
    slug: ${JSON.stringify(t.slug)},
    image: ${img},
    title: ${JSON.stringify(t.title)},
    description: ${JSON.stringify(t.description)},
    seoTitle: ${JSON.stringify(t.seoTitle || t.title)},
    seoDescription: ${JSON.stringify(t.seoDescription || t.description)},
    price: "From $${t.price}",
    duration: ${JSON.stringify(t.duration)},
    groupSize: ${JSON.stringify(t.groupSize)},
    rating: ${t.rating},
    availability: "Daily",
    category: "${cat}",
    longDescription: ${JSON.stringify(fields.cleanDesc)},
    program: ${JSON.stringify(fields.program.length ? fields.program : ["Free time on the tour.", "Guided activities."])},
    included: ${JSON.stringify(fields.included.length ? fields.included : ["Transfer", "Guide"])},
    notIncluded: ${JSON.stringify(fields.notIncluded.length ? fields.notIncluded : ["Personal expenses", "Tips"])}
  },
`;
});

newExportStr += `];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((t) => t.slug === slug);
};

export const safariTours = tours.filter((t) => t.category === "Safari & Adventure");
export const seaTours = tours.filter((t) => t.category === "Sea & Snorkeling");
export const cairoTours = tours.filter((t) => t.category === "Historical");
export const cityTours = tours.filter((t) => t.category === "City & Attractions");
`;

fs.writeFileSync('src/data/tours.ts', newExportStr);
console.log("Successfully merged tours into src/data/tours.ts!");
