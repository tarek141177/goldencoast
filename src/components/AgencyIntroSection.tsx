import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AgencyIntroSection = () => (
  <section className="py-16 px-4 md:px-6 bg-card border-y border-border">
    <div className="container mx-auto text-center max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">
          Golden Coast Excursions Hurghada
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">
          Your Local Travel Agency in Hurghada
        </h2>
        <p className="mt-6 text-[15px] leading-[1.8] text-muted-foreground prose-travel max-w-2xl mx-auto">
          Our tours stand out for their highest quality and attention to detail. We offer a wide range of attractions tailored to every taste – from relaxing cruises to exciting safaris. We guarantee professional service and unforgettable experiences.
        </p>
        <Link to="/tours" className="mt-8 inline-block bg-primary text-primary-foreground font-medium px-8 py-3 rounded-md text-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95 shadow-md hover:bg-primary/90">
          See all tours
        </Link>
      </motion.div>
    </div>
  </section>
);

export default AgencyIntroSection;
