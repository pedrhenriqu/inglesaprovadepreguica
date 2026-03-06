import { BookOpen, Key, Users, Gift, Clock, Shield } from "lucide-react";

const items = [
  { icon: BookOpen, title: "7 Módulos Completos", desc: "Conteúdo estruturado para fluência prática" },
  { icon: Key, title: "Mecanismo KEYS™", desc: "Viradas de chave que aceleram seu aprendizado" },
  { icon: Users, title: "Grupo VIP de Suporte", desc: "Comunidade exclusiva para prática e dúvidas" },
  { icon: Gift, title: "Bônus Exclusivos", desc: "Guia rápido, planilha e desafios práticos" },
  { icon: Clock, title: "Acesso Vitalício", desc: "Estude no seu ritmo, quando quiser" },
  { icon: Shield, title: "Garantia 30 Dias", desc: "Risco zero - satisfação ou reembolso total" },
];

const PAYMENT_LINK = "https://go.sharkpayments.com.br/xvgu0";

const WhatYouGet = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-foreground mb-10">O Que Você Recebe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-2xl p-6 text-left">
            <Icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-foreground font-bold mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>

      <a
        href={PAYMENT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-bold text-primary-foreground py-4 px-10 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-[var(--hero-glow)]"
        style={{ background: "var(--cta-gradient)" }}
      >
        GARANTIR MEU ACESSO AGORA
      </a>
    </div>
  </section>
);

export default WhatYouGet;
