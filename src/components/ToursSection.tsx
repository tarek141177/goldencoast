import { motion } from "framer-motion";
import TourCard from "./TourCard";
import { safariTours, seaTours, cairoTours, Tour } from "@/data/tours";

interface TourGroupProps {
  label: string;
  title: string;
  description: string;
  tours: Tour[];
}

const TourGroup = ({ label, title, description, tours }: TourGroupProps) => (
  <div className="mb-10">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">{label}</p>
      <h2 className="font-serif text-3xl md:text-4xl text-foreground">{title}</h2>
      <p className="mt-3 text-sm text-muted-foreground prose-travel max-w-2xl mx-auto">{description}</p>
    </motion.div>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tours.map((tour) => (
        <motion.div key={tour.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <TourCard {...tour} />
        </motion.div>
      ))}
    </div>
  </div>
);

const ToursSection = () => (
  <section id="tours" className="py-12 px-4 md:px-6">
    <div className="container mx-auto">
      <TourGroup label="Quad, Buggy & Adventure" title="Desert Safari from Hurghada" description="Experience an unforgettable desert adventure! Quad biking, buggy rides, and a visit to a Bedouin village." tours={safariTours} />
      <TourGroup label="Snorkeling & Islands" title="Sea Trips from Hurghada" description="Discover the Red Sea paradise! Orange Bay, Giftun Island, dolphin snorkeling and coral reefs. ✓ Equipment included ✓ Lunch and drinks ✓ Hotel pickup. Book today!" tours={seaTours} />
      <TourGroup label="Pyramids, Museum & Sphinx" title="Cairo Trip from Hurghada" description="Discover the wonders of ancient Egypt! Pyramids of Giza, Sphinx, Grand Egyptian Museum. ✓ By plane ✓ Professional guide ✓ Lunch. Book the day trip!" tours={cairoTours} />
    </div>
  </section>
);

export default ToursSection;
