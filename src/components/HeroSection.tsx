import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Clock, MessageCircle, Zap, Shield, Users, Award } from "lucide-react";
import logo from "@/assets/logo.png";

const PAYMENT_LINK = "https://go.sharkpayments.com.br/xvgu0";

const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-16 px-4 text-center overflow-hidden">
      <motion.img
        src={logo}
        alt="INGLÊS À PROVA DE PREGUIÇA™"
        className="mx-auto h-16 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="inline-block bg-primary/10 border border-primary/30 text-primary text-sm px-4 py-1.5 rounded-full mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Trava na hora de falar inglês em reuniões?
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        INGLÊS À PROVA DE
        <br />
        <span className="text-primary italic">PREGUIÇA™</span>
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-foreground mt-4 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Fale com Confiança em <span className="text-primary font-bold">21 Dias!</span>
      </motion.p>

      <motion.p
        className="text-muted-foreground max-w-xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        A rota direta para falar inglês de verdade — sem travar, sem decorar mil regras e sem métodos lentos.
      </motion.p>

      {/* KEYS Box */}
      <motion.div
        className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-primary font-bold mb-4 flex items-center justify-center gap-2">
          🔑 O Mecanismo KEYS™
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: CheckCircle, text: "Elimina memorização" },
            { icon: Clock, text: "20 min/dia" },
            { icon: MessageCircle, text: "Conversação real" },
            { icon: Zap, text: "Fluência em 21 dias" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-secondary rounded-lg px-4 py-3 text-sm text-foreground">
              <Icon className="h-4 w-4 text-primary flex-shrink-0" />
              {text}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pricing CTA */}
      <motion.div
        className="max-w-md mx-auto bg-secondary border border-border rounded-2xl p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        <p className="text-primary text-sm font-medium mb-4">
          100% online • Acesso vitalício • Garantia 30 dias
        </p>
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
          <Play className="h-5 w-5" />
          QUERO FALAR INGLÊS EM 21 DIAS
          <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {[
          { icon: Shield, text: "Garantia 30 dias" },
          { icon: Users, text: "+5.000 alunos" },
          { icon: Award, text: "Acesso vitalício" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-muted-foreground text-sm">
            <Icon className="h-4 w-4" />
            {text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
