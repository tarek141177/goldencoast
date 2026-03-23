import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

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
                Explore the beauty of our tours and destinations. Click any photo to view it in full size.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 8) * 0.06 }}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => openLightbox(index)}
                  id={`gallery-img-${index + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                  {/* Image counter badge */}
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {index + 1} / {galleryImages.length}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              id="lightbox-close"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium bg-white/10 px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>

            {/* Prev button */}
            <button
              id="lightbox-prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 md:left-6 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[88vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Next button */}
            <button
              id="lightbox-next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 md:right-6 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-4 max-w-[95vw] overflow-x-auto pb-1">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden border-2 transition-all duration-200 ${
                    i === lightboxIndex ? "border-white scale-110" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
