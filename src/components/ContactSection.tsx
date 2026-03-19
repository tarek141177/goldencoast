import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", interest: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nInterested in: ${formData.interest}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/201114236997?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 px-4 md:px-6 bg-card">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">Start Your Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">Ready for Magical Moments?</h2>
          <p className="mt-3 text-sm text-muted-foreground prose-travel max-w-2xl">Let us create your perfect adventure in Hurghada.</p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
            {[
              { icon: MapPin, label: "Location", value: "Hurghada Marina, Red Sea, Egypt" },
              { icon: Phone, label: "Phone", value: "+20 111 423 6997", href: "https://wa.me/201114236997" },
              { icon: Mail, label: "Email", value: "GoldenCoastexcursions1@gmail.com", href: "mailto:GoldenCoastexcursions1@gmail.com" },
              { icon: Clock, label: "Working Hours", value: "Daily: 7:00 AM - 10:00 PM" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <item.icon size={20} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            <select value={formData.interest} onChange={(e) => setFormData({ ...formData, interest: e.target.value })} className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="">Select a tour...</option>
              <option>Red Sea Snorkeling</option>
              <option>Desert Safari</option>
              <option>Private Yacht</option>
              <option>Custom Package</option>
            </select>
            <textarea placeholder="Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
            <button type="submit" className="w-full bg-gradient-primary text-primary-foreground font-medium py-3 rounded-sm text-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
