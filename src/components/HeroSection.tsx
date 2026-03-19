import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-hurghada.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Hurghada Red Sea coast at sunset" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      </div>
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto pt-16">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70 mb-6">
          Travel Agency — Discover the Red Sea
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="font-serif text-primary-foreground leading-[1.1] tracking-wide"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}>
          Unforgettable Tours from Hurghada
          <span className="text-gradient block mt-3 md:mt-5 tracking-wider brightness-125 drop-shadow-[0_0_15px_rgba(255,120,0,0.7)] hover:drop-shadow-[0_0_25px_rgba(255,140,0,0.9)] transition-all duration-500">
            Golden Coast Excursions 2026
          </span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-[15px] leading-[1.6] text-primary-foreground/80 prose-travel mx-auto">
          Luxury tours with expert guides crafted for unforgettable moments. From pristine coral reefs to golden desert dunes.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/tours" className="bg-gradient-primary text-primary-foreground font-medium px-8 py-3 rounded-sm text-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95">
            View Tours
          </Link>
          <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground font-medium px-8 py-3 rounded-sm text-sm transition-all duration-300 hover:bg-primary-foreground/10">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
