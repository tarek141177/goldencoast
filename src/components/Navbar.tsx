import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6 relative">
        <Link to="/" className="flex items-center z-10">
          <img src="/logo.png" alt="Golden Coast Excursions Logo" className="h-[60px] w-auto object-contain py-1 drop-shadow-sm" />
        </Link>

        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <span className="font-serif text-xl sm:text-2xl tracking-tight text-foreground whitespace-nowrap">
            Golden Coast Excursions
          </span>
        </Link>

        <div className="flex items-center gap-6 lg:gap-8 z-10">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
          <a
            href="https://wa.me/201114236997"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95 shrink-0"
          >
            WhatsApp
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-4 md:px-6 py-6">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a
                href="https://wa.me/201114236997"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-sm text-center"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
