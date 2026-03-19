const fs = require('fs');
const currentPath = 'src/data/tours.ts';
const sourcePath = 'd:\\Downloads\\magic-tour-hurghada-main\\magic-tour-hurghada-main\\src\\data\\tours-en.ts';

const currentContent = fs.readFileSync(currentPath, 'utf8');
const sourceContent = fs.readFileSync(sourcePath, 'utf8');

// VERY rough parsing to extract tours out of source. Due to TS and markdown, it's tricky.
// Instead of writing a complex regex, let's extract block by block.

let output = 'const sourceTours = ' + sourceContent.split('export const toursData: Tour[] = ')[1].split(';')[0];
// This needs to be evaluated. To evaluate, we need to remove type annotations and imports.
