import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 md:px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.jpg" alt="Golden Coast Excursions Logo" className="h-12 w-auto rounded-full object-cover p-1 bg-white" />
            <h3 className="font-serif text-2xl">Golden Coast Excursions</h3>
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Your trusted travel partner in Hurghada. We provide unforgettable tours and excursions across Egypt's most beautiful destinations.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 flex items-center justify-center transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 flex items-center justify-center transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/15 hover:bg-primary-foreground/25 flex items-center justify-center transition-colors">
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/tours" className="hover:text-primary-foreground transition-colors">Our Tours</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Popular Tours */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Popular Tours</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/tour/orange-bay-hurghada" className="hover:text-primary-foreground transition-colors">Orange Bay Island VIP</Link></li>
            <li><Link to="/tour/dolphin-house-vip-hurghada" className="hover:text-primary-foreground transition-colors">Dolphin House VIP</Link></li>
            <li><Link to="/tour/cairo-trip-from-hurghada" className="hover:text-primary-foreground transition-colors">Cairo Day Trip</Link></li>
            <li><Link to="/tour/luxor-valley-of-kings-hurghada" className="hover:text-primary-foreground transition-colors">Luxor & Valley of Kings</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Sheraton Street, Hurghada, Red Sea, Egypt</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0" />
              <span>+20 111 423 6997</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0" />
              <a href="mailto:GoldenCoastexcursions1@gmail.com" className="hover:text-primary-foreground transition-colors">GoldenCoastexcursions1@gmail.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock size={16} className="shrink-0" />
              <span>Daily: 8:00 AM – 10:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
        <p>© 2026 Golden Coast Excursions. Tour Agency in Hurghada. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
