import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = {
  whatsapp: "https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%9C",
  instagram: "https://www.instagram.com/rebecanails_designer/",
  email: "contato@rebecanails.com",
  location: "Itapecerica da Serra, SP",
};

const faq = [
  {
    question: "Quanto tempo dura o procedimento?",
    answer: "O tempo varia de acordo com o serviço. Alongamento leva em média 2h30, enquanto banho de gel leva cerca de 1h30.",
  },
  {
    question: "Preciso agendar antecedência?",
    answer: "Sim! Recomendamos agendar com pelo menos 3 dias de antecedência para garantir o horário desejado.",
  },
  {
    question: "O atendimento é a domicílio?",
    answer: "Sim, atualmente atendo a domicílio na região de Itapecerica da Serra. O deslocamento é cobrado separadamente.",
  },
];

// Variants de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
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

const faqItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

function Contato() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  if (!isLoaded) {
    return (
      <section id="contato" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0c29]">
        <div className="animate-pulse w-full max-w-4xl px-4">
          <div className="h-6 w-32 bg-white/10 rounded-full mx-auto mb-12" />
          <div className="h-64 bg-white/5 rounded-2xl" />
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="relative py-24 bg-[#0f0c29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header com Motion */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <i className="fa-solid fa-headset text-pink-400 text-sm" />
            <span className="text-sm text-gray-200 font-medium tracking-wide">Contato</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transformar</span> juntas?
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Gostou do meu trabalho? Agende um horários e venha transformar sua autoestima.
          </p>
        </motion.div>

        {/* Main Contact Cards com Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* WhatsApp Card */}
          <motion.a
            href={contactInfo.whatsapp}
            className="group relative bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-3xl p-8"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            
            <motion.div 
              className="flex items-center gap-6"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-brands fa-whatsapp text-3xl text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-white font-bold text-xl mb-1">WhatsApp</h3>
                <p className="text-gray-400 text-sm">Clique para agendar seu horário</p>
                <p className="text-green-400 font-medium mt-2">(11) 99498-8231</p>
              </div>
            </motion.div>

            <motion.div 
              className="mt-6 flex items-center gap-2 text-green-400 font-medium"
              whileHover={{ x: 5 }}
            >
              <span>Agendar Atendimento</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/30 rounded-3xl p-8"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute top-4 right-4 w-3 h-3 bg-pink-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            
            <motion.div 
              className="flex items-center gap-6"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <i className="fa-brands fa-instagram text-3xl text-white" />
              </motion.div>
              
              <div>
                <h3 className="text-white font-bold text-xl mb-1">Instagram</h3>
                <p className="text-gray-400 text-sm">Siga para ver mais trabalhos</p>
                <p className="text-pink-400 font-medium mt-2">@rebecanails_designer</p>
              </div>
            </motion.div>

            <motion.div 
              className="mt-6 flex items-center gap-2 text-pink-400 font-medium"
              whileHover={{ x: 5 }}
            >
              <span>Ver perfil</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Info Cards com Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="fa-solid fa-location-dot text-purple-400" />
            </motion.div>
            <div>
              <h4 className="text-white font-semibold">Localização</h4>
              <p className="text-gray-400 text-sm">{contactInfo.location}</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="fa-solid fa-clock text-pink-400" />
            </motion.div>
            <div>
              <h4 className="text-white font-semibold">Horário</h4>
              <p className="text-gray-400 text-sm">Seg a Sáb: 9h às 18h</p>
            </div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <i className="fa-solid fa-check text-green-400" />
            </motion.div>
            <div>
              <h4 className="text-white font-semibold">Atendimento</h4>
              <p className="text-gray-400 text-sm">Presencial & Domicílio</p>
            </div>
          </motion.div>
        </motion.div>

        {/* FAQ Section com Motion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h3 
            className="text-2xl font-bold text-white text-center mb-8"
            variants={headerVariants}
          >
            <i className="fa-solid fa-circle-question text-purple-400 mr-2" />
            Perguntas Frequentes
          </motion.h3>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                variants={faqItemVariants}
              >
                <motion.button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-white font-medium pr-4">{item.question}</span>
                  <motion.i 
                    className={`fa-solid fa-chevron-down text-purple-400 ${activeFaq === index ? "rotate-180" : ""}`}
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-gray-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA com Motion */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl"
            whileHover={{ scale: 1.02 }}
          >
            <motion.i 
              className="fa-solid fa-heart text-pink-400 text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <div className="text-left">
              <p className="text-white font-semibold">Pronta para transformar?</p>
              <p className="text-gray-400 text-sm">Agende agora mesmo!</p>
            </div>
            <motion.a
              href={contactInfo.whatsapp}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fa-brands fa-whatsapp mr-2" />
              Agendar
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contato;