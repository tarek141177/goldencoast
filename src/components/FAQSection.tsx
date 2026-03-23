import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">{t.faqs.subtitle}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">{t.faqs.title}</h2>
          <div className="mt-4 flex gap-4 text-xs text-muted-foreground justify-center">
            <span>{t.faqs.tags[0]}</span><span>•</span><span>{t.faqs.tags[1]}</span><span>•</span><span>{t.faqs.tags[2]}</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.items.map((faq: any, i: number) => (
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
};

export default FAQSection;
