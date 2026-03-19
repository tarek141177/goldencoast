const fs = require('fs');
const content = fs.readFileSync('src/data/tours.ts', 'utf8');
const matches = content.match(/title:\s*"([^"]+)"/g);
if (matches) {
  matches.forEach(m => console.log(m));
} else {
  console.log("No titles found");
}
