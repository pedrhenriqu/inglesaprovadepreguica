import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Quanto tempo por dia preciso dedicar?", a: "Apenas 20 minutos por dia são suficientes para seguir o método KEYS™ e alcançar resultados reais em 21 dias." },
  { q: "21 dias são suficientes para fluência?", a: "Sim! O método KEYS™ é desenhado para destravar sua comunicação em inglês em 21 dias, focando no que realmente importa para conversação." },
  { q: "E se o método não funcionar para mim?", a: "Você tem garantia de 30 dias. Se não sentir transformação, devolvemos 100% do valor sem perguntas." },
  { q: "Preciso de experiência em inglês?", a: "Não. O método funciona para iniciantes e também para quem já estudou mas ainda trava na hora de falar." },
  { q: "Como funciona o acesso?", a: "Após a compra, você recebe acesso imediato à plataforma 100% online. Estude de qualquer lugar, no seu ritmo." },
];

const FAQSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-2xl mx-auto text-center">
      <p className="text-primary text-sm font-medium mb-2">Dúvidas Frequentes</p>
      <h2 className="text-3xl font-bold text-foreground mb-8">Perguntas Frequentes</h2>

      <Accordion type="single" collapsible className="text-left">
        {faqs.map(({ q, a }, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-foreground font-medium hover:text-primary">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
