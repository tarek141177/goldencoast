import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.tours, href: "/tours" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.gallery, href: "/gallery" },
    { label: t.nav.contact, href: "/contact" },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  // Close language dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6 relative">
        <Link to="/" className="flex items-center z-10">
          <img src="/logo.png" alt="Golden Coast Excursions Logo" className="h-[60px] w-auto object-contain py-1 drop-shadow-sm" />
        </Link>


        <div className="flex items-center gap-4 lg:gap-8 z-10">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-1"
              aria-label="Change language"
            >
              <span className="text-lg leading-none">{currentLang.flag}</span>
              <span className="uppercase text-xs font-bold">{currentLang.code}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-1 bg-card border border-border rounded-md shadow-lg overflow-hidden min-w-[140px]"
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors ${
                          language === lang.code ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        <span className="text-lg leading-none">{lang.flag}</span>
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://wa.me/201008734649"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2 rounded-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95 shrink-0"
          >
            {t.nav.whatsapp}
          </a>
          <button
            className="md:hidden text-foreground ml-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border shadow-md"
          >
            <div className="flex flex-col gap-4 px-4 md:px-6 py-6 font-serif">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl text-foreground hover:text-primary transition-colors border-b border-border/50 pb-3"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/201008734649"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-primary text-primary-foreground text-sm font-sans font-medium px-5 py-3 rounded-sm text-center mt-2"
              >
                {t.nav.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
