import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", text: "I went on 3 tours with Golden Coast Excursions and the Luxor trip was absolutely incredible. The guides are amazing people — organization was top notch!" },
  { name: "James Cooper", text: "Exploring Egypt with Golden Coast Excursions was one of the best experiences of my life. The guides were incredibly professional and helpful." },
  { name: "Emma Richardson", text: "We came back from our holiday absolutely delighted! Communication before the trip was lightning fast, and the care on-site was world-class. 100% recommend." },
  { name: "Michael Zhang", text: "Wonderful experiences and unforgettable memories! From Marsa Alam to Cairo — we're impressed by the organization. Already planning our next trip!" },
];

const TestimonialsSection = () => (
  <section className="py-16 px-4 md:px-6 bg-card">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">Reviews</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">What Our Clients Say</h2>
      </motion.div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="p-8 border border-border rounded-lg bg-background">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-accent fill-accent" />)}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">{t.name[0]}</div>
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">Tours from Hurghada</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
