import { motion } from "framer-motion";
import expertImg from "@/assets/expert-hero.png";

const ExpertSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
      <motion.img
        src={expertImg}
        alt="Expert em Inglês"
        className="w-64 md:w-80 rounded-2xl"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      />
      <div className="text-center md:text-left">
        <p className="text-primary text-sm font-medium mb-2">Criador do Método KEYS™</p>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Aprenda com Quem Já Transformou Milhares de Vidas
        </h2>
        <p className="text-muted-foreground mb-8">
          Com o Método KEYS™, você terá acesso a um sistema comprovado que já ajudou mais de 10.000 alunos.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "+10.000", label: "Alunos" },
            { value: "97%", label: "Satisfação" },
            { value: "21 Dias", label: "Fluência" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-2xl font-black text-primary">{value}</p>
              <p className="text-muted-foreground text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExpertSection;
