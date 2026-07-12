import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Alongamento",
    subtitle: "Molde F1",
    description: "Unhas mais longas, resistentes e com acabamento natural impecável. Técnica que proporciona brilho, simetria e formato perfeitos.",
    price: "Consulte orçamento",
    icon: "fa-gem",
    gradient: "from-purple-500 to-pink-500",
    features: ["Duração: 3+ semanas", "Ponta francesa", "Manutenção inclusa"],
    popular: false,
  },
  {
    id: 2,
    title: "Banho de Gel",
    subtitle: "Estrutura & Proteção",
    description: "Proteção e fortalecimento para deixar suas unhas naturais mais firmes, blindadas e duradouras. Ideal para crescimento saudável.",
    price: "Consulte orçamento",
    icon: "fa-shield-halved",
    gradient: "from-pink-500 to-rose-500",
    features: ["Duração: 2+ semanas", "Camada gloss blindada", "Hidratação inclusa"],
    popular: true,
  },
  {
    id: 3,
    title: "Nail Art",
    subtitle: "Design Personalizado",
    description: "Designs exclusivos que transformam suas unhas em telas de arte. Técnicas modernas que vão do minimalista ao luxo.",
    price: "Consulte orçamento",
    icon: "fa-paintbrush",
    gradient: "from-violet-500 to-purple-500",
    features: ["Pedrarias premium", "Efeitos encapsulados", "Traço fino perfeito"],
    popular: false,
  },
];

// Variantes de Animação do Grid (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variantes do Card de Serviço
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

// Variantes para os itens internos (efeito fade-in sequencial)
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

function Servicos() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section id="services" className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950">
        <div className="animate-pulse flex flex-col items-center w-full max-w-5xl px-6">
          <div className="h-6 w-28 bg-white/10 rounded-full mb-6" />
          <div className="h-10 w-64 bg-white/10 rounded-lg mb-4" />
          <div className="h-4 w-96 bg-white/10 rounded-lg mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-white/[0.03] border border-white/5 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative py-32 bg-zinc-950 overflow-hidden text-white selection:bg-pink-500/30">
      {/* Background Iluminação */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Header da Seção */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-5">
            <i className="fa-solid fa-sparkles text-pink-400 text-xs" />
            <span className="text-xs text-zinc-300 font-semibold tracking-wider uppercase">Menu de Menu</span>
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Nossos <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Serviços</span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Procedimentos de alto padrão para transformar suas unhas em verdadeiros acessórios de luxo.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.article
              key={service.id}
              className={`relative flex flex-col justify-between bg-white/[0.02] backdrop-blur-md border rounded-2xl p-6 transition-colors duration-300 ${
                service.popular 
                  ? "border-pink-500/30 bg-white/[0.04] shadow-[0_0_30px_rgba(236,72,153,0.05)]" 
                  : "border-white/[0.06] hover:border-zinc-700"
              }`}
              variants={cardVariants}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              {/* Glow Dinâmico de Fundo */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl transition-opacity duration-500 pointer-events-none -z-10`}
                style={{ opacity: activeCard === service.id ? 0.04 : 0 }}
              />

              {/* Tag Popular */}
              {service.popular && (
                <div className="absolute -top-3 right-5 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg shadow-pink-500/20">
                  <i className="fa-solid fa-crown text-[9px] text-white" />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">Mais Desejado</span>
                </div>
              )}

              {/* Bloco Superior */}
              <div>
                {/* Ícone */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-md`}>
                  <i className={`fa-solid ${service.icon} text-lg text-white`} />
                </div>

                {/* Textos */}
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-1">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Lista de Recursos (Features) */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2.5 text-sm text-zinc-300"
                      variants={itemVariants}
                    >
                      <i className="fa-solid fa-check w-4 h-4 bg-white/[0.05] border border-white/10 rounded-full flex items-center justify-center text-[9px] text-pink-400 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Bloco Inferior (Preço + Botão) */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 py-3 border-t border-white/[0.06] mb-5">
                  <i className="fa-solid fa-tag text-zinc-500 text-xs" />
                  <span className="text-zinc-300 text-sm font-medium">{service.price}</span>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20gostaria%20de%20agendar%20o%20serviço%20de%20${encodeURIComponent(service.title)}%20%F0%9F%92%9C`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
                    service.popular
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md hover:opacity-95"
                      : "bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08]"
                  }`}
                >
                  <span>Agendar Serviço</span>
                  <i className="fa-solid fa-arrow-right text-xs opacity-70 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Dúvidas / Rodapé da Seção */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-zinc-500 mb-4">Ficou com alguma dúvida sobre as técnicas?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20tirar%20uma%20dúvida%20sobre%20os%20serviços%20de%20unhas%20%F0%9F%92%9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/[0.06] rounded-full transition-all text-sm font-medium"
          >
            <i className="fa-brands fa-whatsapp text-green-400" />
            <span>Consultar Preços</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Servicos;