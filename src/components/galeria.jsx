import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importar imagens diretamente
import Unha1 from "../assets/carrossel/Unha1.jpeg";
import Unha2 from "../assets/carrossel/Unha2.jpeg";
import Unha3 from "../assets/carrossel/Unha3.jpeg";
import Unha4 from "../assets/carrossel/Unha4.jpeg";
import Unha5 from "../assets/carrossel/Unha5.jpeg";
import Unha6 from "../assets/carrossel/Unha6.jpeg";
import Unha7 from "../assets/carrossel/Unha7.jpeg";
import Unha8 from "../assets/carrossel/Unha8.jpeg";
import Unha9 from "../assets/carrossel/Unha9.jpeg";
import Unha10 from "../assets/carrossel/Unha10.jpeg";
import Unha11 from "../assets/carrossel/Unha11.jpeg";
import Unha13 from "../assets/carrossel/Unha13.jpeg";

const galleryImages = [
  { id: 1, src: Unha1 },
  { id: 2, src: Unha2 },
  { id: 3, src: Unha3 },
  { id: 4, src: Unha4 },
  { id: 5, src: Unha5 },
  { id: 6, src: Unha6 },
  { id: 7, src: Unha7 },
  { id: 8, src: Unha8 },
  { id: 9, src: Unha9 },
  { id: 10, src: Unha10 },
  { id: 11, src: Unha11 },
  { id: 13, src: Unha13 },
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
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

function Galeria() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollTo = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  if (!isLoaded) {
    return (
      <section id="galeria" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0c29]">
        <div className="animate-pulse w-full max-w-6xl px-4">
          <div className="h-6 w-48 bg-white/10 rounded-full mx-auto mb-12" />
          <div className="h-96 bg-white/5 rounded-2xl" />
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="relative py-24 bg-[#0f0c29] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header com Motion */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <i className="fa-solid fa-images text-pink-400 text-sm" />
            <span className="text-sm text-gray-200 font-medium tracking-wide">Portfólio</span>
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Transformações <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Reais</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Cada unha é uma obra de arte única. Clique nas setas ou arraste para ver mais.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                ref={trackRef}
                className="flex"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="w-full flex-shrink-0 px-4 py-4">
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={image.src} 
                        alt={`Transformação ${index + 1}`}
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                        loading="lazy"
                      />
                      
                      {/* Overlay Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setShowOverlay(true)}
                        onMouseLeave={() => setShowOverlay(false)}
                      />
                      
                      <AnimatePresence>
                        {showOverlay && (
                          <motion.div
                            className="absolute bottom-6 left-6 right-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <i className="fa-solid fa-eye text-white text-sm" />
                              </div>
                              <div>
                                <p className="text-white font-semibold">Transformação {index + 1}</p>
                                <p className="text-gray-300 text-sm">Studio Rebeca Nail Designer</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Index Badge */}
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-white text-sm font-medium">
                          {index + 1} <span className="text-gray-400">/</span> {galleryImages.length}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-solid fa-chevron-left" />
            </motion.button>
            
            <motion.button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-solid fa-chevron-right" />
            </motion.button>
          </div>

          {/* Dots Indicators */}
          <motion.div 
            className="flex justify-center gap-2 mt-6"
            variants={containerVariants}
          >
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
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

        {/* Thumbnails com Motion */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-white font-semibold mb-6 text-center">
            <i className="fa-solid fa-grid text-pink-400 mr-2" />
            Todas as Transformações
          </h3>
          
          <motion.div 
            className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3"
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => scrollTo(index)}
                className={`relative group overflow-hidden rounded-xl aspect-square transition-all duration-300 ${
                  currentIndex === index 
                    ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0f0c29] scale-105" 
                    : "opacity-60 hover:opacity-100"
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-black/30 transition-opacity ${
                  currentIndex === index ? "opacity-0" : "group-hover:opacity-0"
                }`} />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA com Motion */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">Gostou de algum design?</p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20adorei%20os%20trabalhos%20da%20galeria!%20Queria%20fazer%20um%20igualzinho%20%F0%9F%92%9C"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-brands fa-whatsapp" />
            Quero uma igual!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Galeria;