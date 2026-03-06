import { motion } from "framer-motion";
import testimonialsImg from "@/assets/testimonials-grid.png";

const companies = ["Google", "Amazon", "Microsoft", "Nubank", "iFood"];

const TestimonialsSection = () => (
  <section className="py-16 px-4 text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-foreground mb-2">
        De Travado para Confiante em 21 Dias
      </h2>
      <p className="text-muted-foreground mb-8">Veja quem já transformou sua vida com KEYS™</p>

      <motion.img
        src={testimonialsImg}
        alt="Depoimentos de alunos"
        className="rounded-2xl mb-8 w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      />

      <p className="text-muted-foreground text-sm mb-4">Alunos que trabalham em empresas como:</p>
      <div className="flex flex-wrap justify-center gap-6">
        {companies.map((c) => (
          <span key={c} className="text-foreground font-bold text-lg opacity-60">{c}</span>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
