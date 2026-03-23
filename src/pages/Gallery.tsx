import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import gallery01 from "@/assets/gallery/gallery_01.jpeg";
import gallery02 from "@/assets/gallery/gallery_02.jpeg";
import gallery03 from "@/assets/gallery/gallery_03.jpeg";
import gallery04 from "@/assets/gallery/gallery_04.jpeg";
import gallery05 from "@/assets/gallery/gallery_05.jpeg";
import gallery06 from "@/assets/gallery/gallery_06.jpeg";
import gallery07 from "@/assets/gallery/gallery_07.jpeg";
import gallery08 from "@/assets/gallery/gallery_08.jpeg";
import gallery09 from "@/assets/gallery/gallery_09.jpeg";
import gallery10 from "@/assets/gallery/gallery_10.jpeg";
import gallery11 from "@/assets/gallery/gallery_11.jpeg";
import gallery12 from "@/assets/gallery/gallery_12.jpeg";
import gallery13 from "@/assets/gallery/gallery_13.jpeg";
import gallery14 from "@/assets/gallery/gallery_14.jpeg";
import gallery15 from "@/assets/gallery/gallery_15.jpeg";
import gallery16 from "@/assets/gallery/gallery_16.jpeg";
import gallery17 from "@/assets/gallery/gallery_17.jpeg";
import gallery18 from "@/assets/gallery/gallery_18.jpeg";
import gallery19 from "@/assets/gallery/gallery_19.jpeg";
import gallery20 from "@/assets/gallery/gallery_20.jpeg";
import gallery21 from "@/assets/gallery/gallery_21.jpeg";

const galleryImages = [
  { src: gallery01, alt: "Golden Coast Excursions - Tour 1" },
  { src: gallery02, alt: "Golden Coast Excursions - Tour 2" },
  { src: gallery03, alt: "Golden Coast Excursions - Tour 3" },
  { src: gallery04, alt: "Golden Coast Excursions - Tour 4" },
  { src: gallery05, alt: "Golden Coast Excursions - Tour 5" },
  { src: gallery06, alt: "Golden Coast Excursions - Tour 6" },
  { src: gallery07, alt: "Golden Coast Excursions - Tour 7" },
  { src: gallery08, alt: "Golden Coast Excursions - Tour 8" },
  { src: gallery09, alt: "Golden Coast Excursions - Tour 9" },
  { src: gallery10, alt: "Golden Coast Excursions - Tour 10" },
  { src: gallery11, alt: "Golden Coast Excursions - Tour 11" },
  { src: gallery12, alt: "Golden Coast Excursions - Tour 12" },
  { src: gallery13, alt: "Golden Coast Excursions - Tour 13" },
  { src: gallery14, alt: "Golden Coast Excursions - Tour 14" },
  { src: gallery15, alt: "Golden Coast Excursions - Tour 15" },
  { src: gallery16, alt: "Golden Coast Excursions - Tour 16" },
  { src: gallery17, alt: "Golden Coast Excursions - Tour 17" },
  { src: gallery18, alt: "Golden Coast Excursions - Tour 18" },
  { src: gallery19, alt: "Golden Coast Excursions - Tour 19" },
  { src: gallery20, alt: "Golden Coast Excursions - Tour 20" },
  { src: gallery21, alt: "Golden Coast Excursions - Tour 21" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Photo Gallery
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore the beauty of our tours and destinations through our photo gallery.
                Get inspired for your next adventure with Golden Coast Excursions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
