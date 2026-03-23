import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 md:px-6 bg-card">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">{t.testimonials.subtitle}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t.testimonials.title}</h2>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.testimonials.reviews.map((rev: any, i: number) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 border border-border rounded-lg bg-background">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-accent fill-accent" />)}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{rev.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">{rev.name[0]}</div>
                <div>
                  <p className="text-sm font-medium text-foreground">{rev.name}</p>
                  <p className="text-xs text-muted-foreground">{t.testimonials.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
