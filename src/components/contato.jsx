import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const contactInfo = {
  whatsapp: "https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%9C",
  instagram: "https://www.instagram.com/rebecanails_designer/",
  email: "contato@rebecanails.com",
  location: "Itapecerica da Serra, SP",
};

// Variantes de animação
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function Contato() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section id="contato" className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950">
        <div className="animate-pulse w-full max-w-5xl px-6">
          <div className="h-6 w-32 bg-white/10 rounded-full mx-auto mb-6" />
          <div className="h-10 w-80 bg-white/10 rounded-lg mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-48 w-full" />
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden text-white selection:bg-pink-500/30">
      {/* Background Iluminação */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-pink-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-5">
            <i className="fa-solid fa-headset text-pink-400 text-xs" />
            <span className="text-xs text-zinc-300 font-semibold tracking-wider uppercase">Contato</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Vamos <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Transformar</span> juntas?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Gostou do meu trabalho? Agende um horário e venha transformar a sua autoestima.
          </p>
        </motion.div>

        {/* Cards de Contato Principais */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* WhatsApp Card */}
          <motion.a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/[0.01] hover:bg-emerald-500/[0.02] border border-white/5 hover:border-emerald-500/20 rounded-3xl p-6 sm:p-8 transition-all"
            variants={cardVariants}
          >
            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full" />
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400 group-hover:scale-105 transition-transform">
                <i className="fa-brands fa-whatsapp text-2xl sm:text-3xl" />
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-0.5">WhatsApp</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">Clique para conversar e agendar</p>
                <p className="text-emerald-400 text-sm sm:text-base font-semibold mt-1.5">(11) 99498-8231</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-semibold">
              <span>Iniciar Atendimento</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/[0.01] hover:bg-pink-500/[0.02] border border-white/5 hover:border-pink-500/20 rounded-3xl p-6 sm:p-8 transition-all"
            variants={cardVariants}
          >
            <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full" />
            
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0 text-pink-400 group-hover:scale-105 transition-transform">
                <i className="fa-brands fa-instagram text-2xl sm:text-3xl" />
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg sm:text-xl mb-0.5">Instagram</h3>
                <p className="text-zinc-400 text-xs sm:text-sm">Siga para novidades e inspirações</p>
                <p className="text-pink-400 text-sm sm:text-base font-semibold mt-1.5">@rebecanails_designer</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-pink-400 text-xs sm:text-sm font-semibold">
              <span>Acessar Perfil</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </motion.div>

        {/* Cards Informativos Menores */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Localização */}
          <motion.div 
            className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-5"
            variants={cardVariants}
          >
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
              <i className="fa-solid fa-location-dot text-sm" />
            </div>
            <div>
              <h4 className="text-zinc-200 font-semibold text-sm">Localização</h4>
              <p className="text-zinc-400 text-xs sm:text-sm">{contactInfo.location}</p>
            </div>
          </motion.div>

          {/* Horário */}
          <motion.div 
            className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-5"
            variants={cardVariants}
          >
            <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0">
              <i className="fa-solid fa-clock text-sm" />
            </div>
            <div>
              <h4 className="text-zinc-200 font-semibold text-sm">Horário de Atendimento</h4>
              <p className="text-zinc-400 text-xs sm:text-sm">Seg a Sáb: 9h às 18h</p>
            </div>
          </motion.div>

          {/* Atendimento */}
          <motion.div 
            className="flex items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:col-span-2 lg:col-span-1"
            variants={cardVariants}
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <i className="fa-solid fa-gem text-sm" />
            </div>
            <div>
              <h4 className="text-zinc-200 font-semibold text-sm">Estilo de Atendimento</h4>
              <p className="text-zinc-400 text-xs sm:text-sm">Único, seguro e personalizado</p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Flutuante de Fechamento */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 px-6 py-5 sm:py-4 bg-white/[0.02] border border-white/[0.06] rounded-3xl max-w-md mx-auto w-full backdrop-blur-md">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-sparkles text-pink-400 text-xl animate-pulse" />
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Pronta para o seu design?</p>
                <p className="text-zinc-500 text-xs">Reserve seu momento exclusivo</p>
              </div>
            </div>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 hover:opacity-95 active:scale-[0.98] transition-all"
            >
              <i className="fa-brands fa-whatsapp text-sm" />
              <span>Agendar Agora</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contato;