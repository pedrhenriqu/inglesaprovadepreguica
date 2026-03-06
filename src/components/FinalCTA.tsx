import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PAYMENT_LINK = "https://go.sharkpayments.com.br/xvgu0";

const FinalCTA = () => (
  <section className="py-16 px-4">
    <motion.div
      className="max-w-lg mx-auto bg-secondary border border-border rounded-2xl p-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-primary text-sm font-medium mb-2">Oferta por Tempo Limitado</p>
      <h2 className="text-2xl font-bold text-foreground mb-6">INGLÊS À PROVA DE PREGUIÇA™</h2>

      <div className="flex items-baseline justify-center gap-3 mb-2">
        <span className="text-muted-foreground line-through text-lg">R$997</span>
        <span className="text-5xl font-black text-primary">R$37</span>
      </div>
      <p className="text-muted-foreground text-sm mb-6">ou 3× de R$12,33 sem juros</p>

      <a
        href={PAYMENT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 w-full justify-center font-bold text-primary-foreground py-4 px-8 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[var(--hero-glow)]"
        style={{ background: "var(--cta-gradient)" }}
      >
        SIM! QUERO FALAR INGLÊS POR R$37
        <ArrowRight className="h-5 w-5" />
      </a>

      <p className="text-muted-foreground text-xs mt-4">Acesso imediato 100% online</p>
    </motion.div>

    {/* Guarantee */}
    <div className="max-w-md mx-auto mt-10 text-center">
      <h3 className="text-foreground font-bold text-lg mb-2">Garantia de 30 Dias</h3>
      <p className="text-muted-foreground text-sm">
        Se aplicar o método e não sentir transformação, devolvemos 100% do valor. Sem perguntas.
      </p>
    </div>
  </section>
);

export default FinalCTA;
