import { motion } from "framer-motion";
import { Globe, Heart, Shield, Leaf } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Globe, title: t.aboutSection.features.guides, desc: t.aboutSection.features.guidesDesc },
    { icon: Heart, title: t.aboutSection.features.service, desc: t.aboutSection.features.serviceDesc },
    { icon: Shield, title: t.aboutSection.features.safety, desc: t.aboutSection.features.safetyDesc },
    { icon: Leaf, title: t.aboutSection.features.eco, desc: t.aboutSection.features.ecoDesc },
  ];

  return (
  <section id="about" className="py-16 px-4 md:px-6 bg-card">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">{t.aboutSection.subtitle}</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t.aboutSection.title}</h2>
        <p className="mt-6 text-[15px] leading-[1.6] text-muted-foreground prose-travel">
          {t.aboutSection.description}
        </p>
      </motion.div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((f, i) => (
          <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-6 border-2 border-[#C9A84C] rounded-lg bg-background hover:shadow-[var(--shadow-card)] transition-shadow duration-400 flex flex-col items-center">
            <f.icon size={28} className="text-primary mb-4" />
            <h3 className="font-semibold text-sm text-foreground">{f.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default AboutSection;
