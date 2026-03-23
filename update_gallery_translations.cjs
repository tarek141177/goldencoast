const fs = require('fs');
const translationsPath = './src/data/translations.ts';

const data = {
  galleryPage: {
    en: { title: "Photo Gallery", subtitle: "Explore the beauty of our tours and destinations. Click any photo to view it in full size." },
    de: { title: "Fotogalerie", subtitle: "Entdecken Sie die Schönheit unserer Touren und Reiseziele. Klicken Sie auf ein Foto, um es in voller Größe anzuzeigen." },
    nl: { title: "Fotogalerij", subtitle: "Ontdek de schoonheid van onze tours en bestemmingen. Klik op een foto om deze op ware grootte te bekijken." },
    pl: { title: "Galeria Zdjęć", subtitle: "Odkryj piękno naszych wycieczek i miejsc docelowych. Kliknij dowolne zdjęcie, aby zobaczyć je w pełnym rozmiarze." },
    fr: { title: "Galerie de Photos", subtitle: "Explorez la beauté de nos excursions et destinations. Cliquez sur n'importe quelle photo pour la voir en taille réelle." }
  }
};

let fileContent = fs.readFileSync(translationsPath, 'utf8');

const langs = ['en', 'de', 'nl', 'pl', 'fr'];
langs.forEach(lang => {
  const insertIndex = fileContent.indexOf(`\n  ${lang}: {`) + `\n  ${lang}: {`.length;
  const newProps = `\n    galleryPage: ${JSON.stringify(data.galleryPage[lang])},`;
  fileContent = fileContent.slice(0, insertIndex) + newProps + fileContent.slice(insertIndex);
});

fs.writeFileSync(translationsPath, fileContent);
console.log('Gallery translations updated.');
