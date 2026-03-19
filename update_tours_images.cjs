const fs = require('fs');

const mappings = {
  "Sahara Park - Mega Safari": "image6.jpg",
  "Afternoon Quad Safari": "image7.jpg",
  "Paradise Island Top VIP": "image8.jpg",
  "Orange Bay Island Top VIP": "image17.jpg",
  "Dolphin House VIP": "image10.jpg",
  "Intro Diving": "image9.jpg",
  "Sharm El Naga Hurghada": "image1.jpg",
  "Parasailing Hurghada": "image4.jpg",
  "Private VIP Speedboat Trip": "image5.jpg",
  "Diving Hurghada": "image3.jpg",
  "Salem Express": "image11.jpg",
  "Glass Boat": "image13.jpg",
  "Grand Aquarium": "image21.jpg",
  "El Gouna City Tour": "image22.jpg",
  "Morning Quad Safari": "image2.jpg",
  "Hurghada City Tour": "image14.jpg",
  "Sindbad Submarine": "image20.jpg",
  "Horse Riding Private": "image12.jpg",
  "Cairo Trip from Hurghada": "image19.jpg",
  "Private Trip to Cairo & Ancient Egypt": "image15.jpg",
  "Private Cairo Trip by Plane": "image16.jpg",
  "Luxor with Valley of the Kings": "image18.jpg"
};

let content = fs.readFileSync('src/data/tours.ts', 'utf8');

// Replace old imports block with new image imports
let importsBlock = '';
for (let i = 1; i <= 22; i++) {
  importsBlock += `import image${i} from "@/assets/image${i}.jpg";\n`;
}

// Find the position after the old imports to insert
// Old imports: 
// import tourSafari from "@/assets/tour-safari.jpg";
// import tourSnorkeling from "@/assets/tour-snorkeling.jpg";
// import tourCairo from "@/assets/tour-cairo.jpg";
// import tourIsland from "@/assets/tour-island.jpg";
// import tourDolphins from "@/assets/tour-dolphins.jpg";
// import tourLuxor from "@/assets/tour-luxor.jpg";

content = content.replace(/import \w+ from "@\/assets\/[^"]+";\n/g, '');
content = importsBlock + '\n' + content;

// Replace images for each tour
for (const title in mappings) {
  const imageName = mappings[title].replace('.jpg', '');
  // Match the title block, and update the associated image
  // It's safer to just iterate and replace via regex:
  // title: "Sahara Park - Mega Safari", \n image: tourSafari 
  
  // We'll replace the image value directly above or below title. Wait, we can construct a robust string replace.
  // We'll find the title: "TITLE" line, then find the image field in that object.
  // A simpler way is to find the object containing `title: "TITLE"` and replace its `image: ...` line.
  
  const regex = new RegExp(`(image:\\s*)[\\w]+(,\\s*\\n\\s*title:\\s*"${title}")|` + 
                           `(title:\\s*"${title}",\\s*(?:[^}]*?\\n)?\\s*image:\\s*)[\\w]+`, "ms");
                           
  content = content.replace(regex, (match, p1, p2, p3) => {
    if (p1 && p2) {
      return `${p1}${imageName}${p2}`;
    }
    if (p3) {
      return `${p3}${imageName}`;
    }
    return match;
  });
}

// Fix &amp; which came from Google Docs HTML if matched wrong
content = content.replace('Private Trip to Cairo &amp; Ancient Egypt', 'Private Trip to Cairo & Ancient Egypt');

fs.writeFileSync('src/data/tours.ts', content, 'utf8');
console.log('Done mapping.');
