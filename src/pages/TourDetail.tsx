import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Star, Calendar, ArrowLeft, Check, X } from "lucide-react";
import { getTourBySlug } from "@/data/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";

// Fix malformed markdown like "** Text:**" or "* Text" with extra spaces
const preprocessMarkdown = (text: string): string => {
  return text
    // Fix "** Text**" → "**Text**" (space after opening **)
    .replace(/\*\* ([^*\n]+)\*\*/g, '**$1**')
    // Fix "** Text:**" → "**Text:**"
    .replace(/\*\* ([^*\n]+):\*\*/g, '**$1:**')
    // Normalize "*   item" list pattern (extra spaces after *)  
    .replace(/^\*[ \t]{2,}/gm, '* ')
    // Trim leading spaces from lines that start content (indented blocks)  
    .replace(/^[ \t]{2,}(?!\*)/gm, '')
};

const TourDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const tour = getTourBySlug(slug || "");

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Tour Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    const msg = `Hi! I'd like to book the "${tour.title}" tour (${tour.price} per person). Please send me more details.`;
    window.open(`https://wa.me/201114236997?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={tour.image} alt={tour.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="relative z-10 text-center px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex items-center gap-2 bg-foreground/20 backdrop-blur-sm text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full mb-6">
              Golden Coast Excursions
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground leading-tight">{tour.title}</h1>
            <p className="mt-4 text-primary-foreground/80 text-lg">
              From <span className="text-gradient font-semibold text-2xl">{tour.price}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto -mt-12 relative z-20 px-4 md:px-6"
      >
        <div className="bg-background border border-border rounded-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-[var(--shadow-card)]">
          {[
            { icon: Clock, label: "Duration", value: tour.duration },
            { icon: Users, label: "Group", value: tour.groupSize },
            { icon: Star, label: "Rating", value: `${tour.rating}/5` },
            { icon: Calendar, label: "Availability", value: tour.availability },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon size={24} className="text-primary" />
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Content + Booking Sidebar */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <Link to="/#tours" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={16} /> Back to all tours
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">Tour Details</p>
              <h2 className="font-serif text-3xl text-foreground">About This Tour</h2>
              <div className="mt-6 space-y-1 text-[15px] leading-[1.8]">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="font-serif text-xl text-foreground mt-8 mb-3 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary shrink-0">
                          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                        </span>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-serif text-lg text-foreground mt-6 mb-2 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary shrink-0">
                          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                        </span>
                        {children}
                      </h3>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-foreground">{children}</strong>
                    ),
                    p: ({ children }) => (
                      <p className="text-muted-foreground mb-3">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="mt-2 mb-4 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="mt-2 mb-4 space-y-2">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="flex items-start gap-3 bg-amber-50/60 border border-amber-100 rounded-lg px-4 py-2.5 text-[14px] text-muted-foreground list-none">
                        <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary/60 text-primary shrink-0">
                          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                        </span>
                        <span>{children}</span>
                      </li>
                    ),
                  }}
                >
                  {preprocessMarkdown(tour.longDescription)}
                </ReactMarkdown>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">Tour Program</h3>
              <div className="space-y-4">
                {tour.program.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
                      {i + 1}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {tour.included.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Not Included</h3>
                <ul className="space-y-3">
                  {tour.notIncluded.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <X size={16} className="text-destructive flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sticky top-24 border border-border rounded-lg p-6 bg-card shadow-[var(--shadow-card)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2 text-center">Booking</p>
              <h3 className="font-serif text-xl text-foreground text-center mb-6">{tour.title}</h3>
              <div className="flex justify-between items-center py-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Price per person</span>
                <span className="text-2xl font-semibold text-foreground">{tour.price}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Duration</span>
                <span className="text-sm font-medium text-foreground">{tour.duration}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Group size</span>
                <span className="text-sm font-medium text-foreground">{tour.groupSize}</span>
              </div>
              <button
                onClick={handleBooking}
                className="mt-6 w-full bg-gradient-primary text-primary-foreground font-medium py-3 rounded-sm text-sm transition-transform duration-300 hover:scale-[0.98] active:scale-95"
              >
                Book via WhatsApp
              </button>
              <p className="mt-4 text-xs text-muted-foreground text-center">No prepayment required. Pay your guide on the day.</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetail;
