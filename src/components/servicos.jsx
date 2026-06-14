import { useState, useEffect } from "react";
import { motion,  } from "framer-motion";

const servicesData = [
  {
    id: 1,
    title: "Alongamento",
    subtitle: "Molde F1",
    description: "Unhas mais longas, resistentes e com acabamento natural impecável. Técnica japonesa que proporciona brilho e formato perfeitos.",
    price: "Entre em contato para orçamento",
    icon: "fa-gem",
    gradient: "from-purple-500 to-pink-500",
    features: ["Duração: 3+ semanas", "Ponta francesa", "Manutenção inclusa"],
    popular: false,
  },
  {
    id: 2,
    title: "Banho de Gel",
    subtitle: "Estrutura & Proteção",
    description: "Proteção e fortalecimento para deixar suas unhas mais firmes e duradouras. Ideal para quem já tem unha natural saudável.",
    price: "Entre em contato para orçamento",
    icon: "fa-shield-halved",
    gradient: "from-pink-500 to-rose-500",
    features: ["Duração: 2+ semanas", "Camada gloss", "Hidratação inclusa"],
    popular: true,
  },
  {
    id: 3,
    title: "Nail Art",
    subtitle: "Design Personalizado",
    description: "Designs exclusivos que transformam suas unhas em verdadeiras obras de arte. Do minimalista ao maxi.",
    price: "Entre em contato para orçamento",
    icon: "fa-paintbrush",
    gradient: "from-violet-500 to-purple-500",
    features: ["Adesivos premium", "Acrílicos decorados", "French perfeito"],
    popular: false,
  },
];

// Variants de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Servicos() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section id="services" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0c29]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-6 w-24 bg-white/10 rounded-full mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-white/5 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="relative py-24 bg-[#0f0c29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header com Motion */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <i className="fa-solid fa-brush text-rose-400 text-sm" />
            <span className="text-sm text-gray-200 font-medium tracking-wide">Serviços</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nossos <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Serviços</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Tratamentos premium para transformar suas unhas em verdadeiras joias.
            <br className="hidden md:block" />
            Cada serviço é único como você.
          </p>
        </motion.div>

        {/* Cards Grid com Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {servicesData.map((service) => (
            <motion.article
              key={service.id}
              className={`relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/30 hover:-translate-y-2 ${
                service.popular ? "md:-mt-4" : ""
              }`}
              variants={cardVariants}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === service.id ? 0.1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute -top-3 right-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                >
                  <i className="fa-solid fa-star text-[10px] text-[#0f0c29]" />
                  <span className="text-[10px] font-bold text-[#0f0c29]">Mais Pedido</span>
                </motion.div>
              )}

              {/* Icon com Motion */}
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <i className={`fa-solid ${service.icon} text-xl text-white`} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{service.subtitle}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <i className="fa-solid fa-check w-4 h-4 bg-purple-500/20 rounded-full flex items-center justify-center text-[10px] text-purple-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex justify-between py-4 border-t border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-tag text-pink-400 text-sm" />
                    <span className="text-white font-semibold text-sm">{service.price}</span>
                  </div>
                </div>

                {/* Button com Motion */}
                <motion.a
                  href={`https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20gostaria%20de%20agendar%20o%20serviço%20de%20${encodeURIComponent(service.title)}%20%F0%9F%92%9C`}
                  className={`block w-full py-3 px-4 bg-gradient-to-r ${service.gradient} rounded-xl text-white font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Agendar</span>
                  <i className="fa-solid fa-arrow-right text-sm" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">Não sabe qual serviço escolher?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20tirar%20uma%20dúvida%20sobre%20os%20serviços%20de%20unhas%20%F0%9F%92%9C"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
          >
            <i className="fa-brands fa-whatsapp text-green-500" />
            <span className="text-white font-medium">Falar no WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Servicos;