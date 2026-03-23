import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ======================================================
// أضف صورك هنا — Add your gallery images below
// ======================================================
// 1. ضع الصور داخل المجلد: src/assets/gallery/
// 2. استورد كل صورة هكذا:
//    import img1 from "@/assets/gallery/photo1.jpg";
// 3. أضف كل صورة داخل المصفوفة galleryImages مع وصف (alt)
// ======================================================

const galleryImages: { src: string; alt: string }[] = [
  // Example (uncomment and replace with your images):
  // { src: img1, alt: "Paradise Island Hurghada" },
  // { src: img2, alt: "Orange Bay Beach" },
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

            {galleryImages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-24 text-muted-foreground gap-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-40"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <p className="text-lg font-medium">Photos coming soon</p>
                <p className="text-sm opacity-70">We're preparing beautiful photos for you.</p>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                    className="relative aspect-square overflow-hidden rounded-lg group"
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
