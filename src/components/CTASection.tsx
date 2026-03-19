import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-12 px-4 md:px-6">
    <div className="container mx-auto text-center max-w-2xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Ready for an Adventure?</h2>
        <p className="mt-4 text-sm text-muted-foreground">Get in touch today and plan your dream trip in Hurghada</p>
        <a href="#contact" className="mt-8 inline-block bg-gradient-primary text-primary-foreground font-medium px-10 py-3 rounded-sm text-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95">
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
