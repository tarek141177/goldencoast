import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { safariTours, seaTours, cairoTours, cityTours, Tour } from "@/data/tours";

const ToursPage = () => {
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
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">All Our Tours</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover all the amazing experiences we offer in and around Hurghada. From desert safaris to historical trips.
          </p>
        </motion.div>

        {renderTourGroup("Sea & Snorkeling", "Discover the Red Sea paradise! Orange Bay, Giftun Island, dolphin snorkeling and coral reefs.", seaTours)}
        {renderTourGroup("Safari & Adventure", "Experience an unforgettable desert adventure! Quad biking, buggy rides, and a visit to a Bedouin village.", safariTours)}
        {renderTourGroup("Historical Trips", "Discover the wonders of ancient Egypt! Pyramids of Giza, Sphinx, Grand Egyptian Museum, and Luxor.", cairoTours)}
        {renderTourGroup("City & Attractions", "Explore the beauty of Hurghada, El Gouna, and top local attractions like the Grand Aquarium.", cityTours)}
      </div>
      <Footer />
    </div>
  );
};

export default ToursPage;
