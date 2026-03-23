import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { motion } from "framer-motion";
import { Trophy, Users, Camera, Map } from "lucide-react";
import heroImg from "@/assets/hero-hurghada.jpg"; // Using an existing image for the header
import { useLanguage } from "@/contexts/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Users, value: "15,000+", label: t.aboutPage.stats.guests },
    { icon: Map, value: "50+", label: t.aboutPage.stats.tours },
    { icon: Trophy, value: "15", label: t.aboutPage.stats.experience },
    { icon: Camera, value: "100k+", label: t.aboutPage.stats.photos },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="About Golden Coast Excursions" className="h-full w-full object-cover opacity-30 blur-sm" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 md:px-6 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
          >
            {t.aboutPage.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] leading-[1.6] text-muted-foreground prose-travel"
          >
            {t.aboutPage.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground"
          >
            <p className="lead text-xl text-foreground font-medium mb-8">
              {t.aboutPage.welcome}
            </p>
            
            <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">{t.aboutPage.missionTitle}</h3>
            <p>
              {t.aboutPage.missionDesc}
            </p>

            <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">{t.aboutPage.whyUsTitle}</h3>
            <ul className="space-y-4 my-6">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span> 
                <span><strong>{t.aboutPage.whyUs.expertiseLabel}</strong> {t.aboutPage.whyUs.expertiseDesc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span> 
                <span><strong>{t.aboutPage.whyUs.safetyLabel}</strong> {t.aboutPage.whyUs.safetyDesc}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span> 
                <span><strong>{t.aboutPage.whyUs.valueLabel}</strong> {t.aboutPage.whyUs.valueDesc}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4 text-primary">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-serif text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
