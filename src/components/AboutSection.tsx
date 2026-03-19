import { motion } from "framer-motion";
import { Globe, Heart, Shield, Leaf } from "lucide-react";

const features = [
  { icon: Globe, title: "Expert Guides", desc: "English-speaking guides with deep knowledge of Egypt." },
  { icon: Heart, title: "Personalized Service", desc: "Every tour tailored to your preferences." },
  { icon: Shield, title: "Safety First", desc: "Certified equipment and trained professionals." },
  { icon: Leaf, title: "Eco Tourism", desc: "Protecting the Red Sea ecosystem." },
];

const AboutSection = () => (
  <section id="about" className="py-16 px-4 md:px-6 bg-card">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">About Golden Coast Excursions</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Creating Unforgettable Memories Since 2010</h2>
        <p className="mt-6 text-[15px] leading-[1.6] text-muted-foreground prose-travel">
          At Golden Coast Excursions, we believe travel should be an extraordinary experience. For over a decade, we've guided guests through the wonders of Hurghada — from the spectacular underwater world of the Red Sea to the mystical beauty of the Eastern Desert.
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

export default AboutSection;
