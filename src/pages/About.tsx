import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { motion } from "framer-motion";
import { Trophy, Users, Camera, Map } from "lucide-react";
import heroImg from "@/assets/hero-hurghada.jpg"; // Using an existing image for the header

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Guests" },
  { icon: Map, value: "50+", label: "Unique Tours" },
  { icon: Trophy, value: "15", label: "Years Experience" },
  { icon: Camera, value: "100k+", label: "Photos Taken" },
];

const AboutPage = () => {
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
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[15px] leading-[1.6] text-muted-foreground prose-travel"
          >
            Who we are, what we do, and why we are your best choice for discovering the beauty of Hurghada.
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
              Welcome to Golden Coast Excursions. We are a passionate team of local experts dedicated to showcasing the absolute best that Hurghada and the Red Sea have to offer.
            </p>
            
            <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">Our Mission</h3>
            <p>
              Our mission is simple: to provide unforgettable, safe, and high-quality tours that allow our guests to experience the true magic of Egypt. Whether you're plunging into the crystal-clear waters of the Red Sea to explore vibrant coral reefs, speeding across the desert dunes on a quad bike, or walking through the ancient temples of Luxor, we are here to make your dream vacation a reality.
            </p>

            <h3 className="text-2xl font-serif text-foreground mt-12 mb-4">Why Choose Us?</h3>
            <ul className="space-y-4 my-6">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span> 
                <span><strong>Local Expertise:</strong> Our guides aren't just knowledgeable; they are locals who are passionate about their home and eager to share its secrets with you.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span> 
                <span><strong>Uncompromising Safety:</strong> Your safety is our top priority. All our equipment is maintained to the highest standards, and our staff undergo rigorous safety training.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span> 
                <span><strong>Value for Money:</strong> We believe exceptional experiences shouldn't break the bank. We offer competitive pricing with no hidden fees.</span>
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
