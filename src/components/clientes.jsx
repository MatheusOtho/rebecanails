import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Debóra Rodrigues",
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
    name: "Ana Meireless",
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

const featuredVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Clientes() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (!isLoaded) {
    return (
      <section id="depoimentos" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0c29]">
        <div className="animate-pulse w-full max-w-6xl px-4">
          <div className="h-6 w-56 bg-white/10 rounded-full mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-48 bg-white/5 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="depoimentos" className="relative py-24 bg-[#0f0c29] overflow-hidden">
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
            <i className="fa-solid fa-heart text-pink-400 text-sm" />
            <span className="text-sm text-gray-200 font-medium tracking-wide">Depoimentos</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            O que dizem nossas <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Clientes</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A satisfação das minhas clientes é o meu maior orgulho.
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel com Motion */}
        <motion.div
          className="relative mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          initial="hidden"
          animate="visible"
          variants={featuredVariants}
        >
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
                      {/* Quotes Icon */}
                      <motion.div 
                        className="absolute top-6 left-8 text-6xl text-purple-500/20 font-serif"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        "
                      </motion.div>
                      
                      {/* Content */}
                      <div className="relative z-10 max-w-3xl mx-auto text-center">
                        {/* Stars */}
                        <motion.div 
                          className="flex justify-center gap-1 mb-6"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.i 
                              key={i} 
                              className="fa-solid fa-star text-yellow-400 text-lg"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * i + 0.4 }}
                            />
                          ))}
                        </motion.div>
                        
                        {/* Text */}
                        <motion.p 
                          className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          "{testimonial.text}"
                        </motion.p>
                        
                        {/* Client Info */}
                        <motion.div 
                          className="flex items-center justify-center gap-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <motion.div 
                            className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                          >
                            <span className="text-white text-xl font-bold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </motion.div>
                          <div className="text-left">
                            <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-gray-400 text-sm">Cliente Satisfeita</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-solid fa-chevron-left" />
            </motion.button>
            
            <motion.button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hidden md:flex"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-solid fa-chevron-right" />
            </motion.button>
          </div>

          {/* Dots com Motion */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500" 
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* All Testimonials Grid com Motion */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/30 hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Client Avatar */}
              <motion.div 
                className="flex items-center gap-4 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Decorative Quote */}
              <motion.i 
                className="fa-solid fa-quote-right absolute bottom-4 right-4 text-purple-500/20 text-2xl group-hover:text-purple-500/40 transition-colors"
                whileHover={{ scale: 1.2 }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* CTA com Motion */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4">Quer ser a próxima cliente satisfeita?</p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20adorei%20os%20depoimentos!%20Quero%20agendar%20meu%20horário%20%F0%9F%92%9C"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-whatsapp" />
            Quero agendar!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Clientes;