import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { safariTours, seaTours, cairoTours, cityTours, Tour } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

const ToursPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderTourGroup = (title: string, description: string, tours: Tour[]) => (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour, idx) => (
          <motion.div 
            key={tour.slug} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <TourCard {...tour} />
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{t.toursPage.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.toursPage.subtitle}
          </p>
        </motion.div>

        {renderTourGroup(t.toursPage.groups.sea.title, t.toursPage.groups.sea.desc, seaTours)}
        {renderTourGroup(t.toursPage.groups.safari.title, t.toursPage.groups.safari.desc, safariTours)}
        {renderTourGroup(t.toursPage.groups.history.title, t.toursPage.groups.history.desc, cairoTours)}
        {renderTourGroup(t.toursPage.groups.city.title, t.toursPage.groups.city.desc, cityTours)}
      </div>
      <Footer />
    </div>
  );
};

export default ToursPage;
