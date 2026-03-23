const fs = require('fs');
const path = require('path');

const translationsPath = path.resolve('./src/data/translations.ts');
let fileContent = fs.readFileSync(translationsPath, 'utf8');

const toursContentObj = JSON.parse(fs.readFileSync('./tours_translations.json', 'utf8'));

const langs = ['en', 'de', 'nl', 'pl', 'fr'];
langs.forEach(lang => {
  const insertIndex = fileContent.indexOf(`\n  ${lang}: {`) + `\n  ${lang}: {`.length;
  // Convert our tours translations piece into a string
  const toursData = toursContentObj[lang] || {};
  const newProps = `\n    toursContent: ${JSON.stringify(toursData)},`;
  fileContent = fileContent.slice(0, insertIndex) + newProps + fileContent.slice(insertIndex);
});

fs.writeFileSync(translationsPath, fileContent);
console.log('Tours content translations fully injected.');
