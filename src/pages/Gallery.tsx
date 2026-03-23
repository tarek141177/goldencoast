import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import image1 from "@/assets/image1.jpg";
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

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
  image21, image22
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
                Explore the beauty of our tours and destinations through our photo gallery. Get inspired for your next adventure with Golden Coast Excursions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                  className="relative aspect-square overflow-hidden rounded-lg group"
                >
                  <img
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
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
