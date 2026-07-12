import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Débora Rodrigues",
    text: "Minhas unhas ficaram simplesmente perfeitas! Trabalho impecável.",
    rating: 5,
  },
  {
    id: 2,
    name: "Cintia Armando",
    text: "Unhas lindas e atendimento maravilhoso, experiência perfeita.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Meireles",
    text: "Atendimento maravilhoso, super atenciosa e profissional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Helena Silva",
    text: "Capricho em cada detalhe, fiquei apaixonada pelas minhas unhas.",
    rating: 5,
  },
  {
    id: 5,
    name: "Gabriela Ribeiro",
    text: "Ambiente agradável e atendimento excelente.",
    rating: 5,
  },
  {
    id: 6,
    name: "Yasmin Pereira",
    text: "As unhas duraram muito e ficaram lindas, super recomendo.",
    rating: 5,
  },
];

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

function Clientes() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section id="depoimentos" className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950">
        <div className="animate-pulse w-full max-w-5xl px-6">
          <div className="h-6 w-36 bg-white/10 rounded-full mx-auto mb-6" />
          <div className="h-10 w-80 bg-white/10 rounded-lg mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" />
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" className="relative py-20 md:py-32 bg-zinc-950 overflow-hidden text-white selection:bg-pink-500/30">
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
            <i className="fa-solid fa-heart text-pink-400 text-xs" />
            <span className="text-xs text-zinc-300 font-semibold tracking-wider uppercase">Depoimentos</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            O que dizem nossas <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Clientes</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A satisfação e o bem-estar de cada cliente são o reflexo de um trabalho feito com amor e dedicação total.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* GRID PRINCIPAL RESPONSIVO (Substitui completamente o carrossel antigo) */}
        {/* ========================================================================= */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-6 shadow-xl transition-all hover:border-pink-500/20 md:hover:-translate-y-1"
              variants={cardVariants}
            >
              {/* Cabeçalho do Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* Avatar com a Inicial */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center text-pink-400 font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-zinc-200 font-semibold text-sm">{testimonial.name}</h4>
                    {/* Estrelas */}
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star text-amber-400 text-[10px]" />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Ícone de aspas discreto */}
                <i className="fa-solid fa-quote-right text-purple-500/10 text-lg" />
              </div>

              {/* Texto do Depoimento */}
              <p className="text-zinc-400 text-sm leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA (Chamada para Ação) */}
        <motion.div
          className="text-center mt-16 md:mt-24"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-zinc-500 mb-4">Quer viver essa experiência de cuidados exclusiva?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20adorei%20os%20depoimentos!%20Quero%20agendar%20meu%20hor%C3%A1rio%20%F0%9F%92%9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-pink-500/10 hover:opacity-95 active:scale-[0.98] transition-all"
          >
            <i className="fa-brands fa-whatsapp text-base" />
            <span>Quero Agendar Meu Horário!</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Clientes;