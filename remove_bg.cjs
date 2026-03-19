const Jimp = require('jimp');

Jimp.read('public/logo.jpg', (err, image) => {
  if (err) {
    console.error("Error reading logo.jpg:", err);
    process.exit(1);
  }
  
  // Create a new image to ensure it has an alpha channel
  new Jimp(image.bitmap.width, image.bitmap.height, 0x00000000, (err, transparentImage) => {
    if (err) throw err;
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If pixel is pure white or very close to it (e.g., JPEG artifacts)
      if (red > 235 && green > 235 && blue > 235) {
        // Leave it transparent in the new image
      } else {
        // Copy the colored pixel to the new transparent image
        const hex = Jimp.rgbaToInt(red, green, blue, 255);
        transparentImage.setPixelColor(hex, x, y);
      }
    });

    transparentImage.write('public/logo.png', () => {
      console.log('Successfully saved transparent logo to public/logo.png!');
    });
  });
});
