import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const AgencyIntroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 md:px-6 bg-card border-y border-border">
      <div className="container mx-auto text-center max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">
          {t.agencyIntro.subtitle}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          {t.agencyIntro.title}
        </h2>
        <p className="mt-6 text-[15px] leading-[1.8] text-muted-foreground prose-travel max-w-2xl mx-auto">
          {t.agencyIntro.desc}
        </p>
        <Link to="/tours" className="mt-8 inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-md text-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95 shadow-md hover:bg-primary/90">
          {t.agencyIntro.btn}
        </Link>
      </motion.div>
    </div>
  </section>
  );
};

export default AgencyIntroSection;
