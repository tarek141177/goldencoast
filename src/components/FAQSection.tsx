import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is booking with Golden Coast Excursions safe?", a: "Yes. We are a licensed Egyptian tour operator with 15 years of experience. All tours are led by certified guides." },
  { q: "How do I book a tour?", a: "Online through our website or via WhatsApp. Pay your guide at the start of the tour — no prepayment required." },
  { q: "Do I need to pay upfront?", a: "No. You pay cash to the guide who picks you up from your hotel at the start of the tour." },
  { q: "Are tours available in my language?", a: "Yes, we offer tours in English, Polish, and other languages." },
  { q: "What if I need to cancel?", a: "Free cancellation up to 24 hours before departure. No hidden fees." },
  { q: "Are your prices competitive?", a: "As a local operator, we offer prices 30-50% lower than hotel tour desks." },
];

const FAQSection = () => (
  <section id="faq" className="py-12 px-4 md:px-6">
    <div className="container mx-auto max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">FAQ</p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground">Frequently Asked Questions</h2>
        <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
          <span>Licensed operator</span><span>•</span><span>15 years experience</span><span>•</span><span>24/7 support</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-sm font-medium text-foreground text-left hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="text-xs text-primary font-semibold">{i + 1}</span>
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
