const fs = require('fs');
const html = fs.readFileSync('d:/Downloads/nowayphotos/nowayphotos.html', 'utf8');

const titlesMatch = Array.from(html.matchAll(/<span class="c3">([^<]+)<\/span>/g)).map(m=>m[1]);
const imagesMatch = Array.from(html.matchAll(/src="images\/([^"]+)"/g)).map(m=>m[1]);

for (let i = 0; i < titlesMatch.length; i++) {
  console.log(titlesMatch[i] + ' = ' + imagesMatch[i]);
}
