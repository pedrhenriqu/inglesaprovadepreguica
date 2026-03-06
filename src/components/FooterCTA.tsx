import { ArrowRight } from "lucide-react";

const PAYMENT_LINK = "https://go.sharkpayments.com.br/xvgu0";

const FooterCTA = () => (
  <section className="py-20 px-4 text-center">
    <h2 className="text-3xl font-bold text-foreground mb-4">Sua Fluência Começa Agora</h2>
    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
      Junte-se a mais de 12.000 alunos que já transformaram suas vidas com o método KEYS™
    </p>

    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 font-bold text-primary-foreground py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[var(--hero-glow)]"
      style={{ background: "var(--cta-gradient)" }}
    >
      QUERO FALAR INGLÊS EM 21 DIAS
      <ArrowRight className="h-5 w-5" />
    </a>

    <p className="text-muted-foreground text-sm mt-4">
      Acesso imediato • Garantia 30 dias • Risco zero
    </p>
  </section>
);

export default FooterCTA;
