import { useState, useEffect } from "react";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

function Galeria() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section id="galeria" className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-950">
        <div className="animate-pulse w-full max-w-5xl px-6">
          <div className="h-6 w-32 bg-white/10 rounded-full mx-auto mb-6" />
          <div className="h-10 w-72 bg-white/10 rounded-lg mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[500px] w-full" />
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden text-white selection:bg-pink-500/30">
      {/* Background Iluminação */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-pink-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-5">
            <i className="fa-solid fa-images text-pink-400 text-xs" />
            <span className="text-xs text-zinc-300 font-semibold tracking-wider uppercase">Portfólio</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Transformações <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">Reais</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Cada unha é uma obra de arte única. Clique na foto que desejar para ver os detalhes em tela cheia.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* VISUALIZAÇÃO DE DESKTOP (Carrossel Interativo por Clique) */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/[0.06] p-3 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
              <motion.img 
                key={activeIndex}
                src={galleryImages[activeIndex].src} 
                alt={`Transformação em destaque`}
                className="w-full h-full object-cover cursor-zoom-in"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(galleryImages[activeIndex].src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <i className="fa-solid fa-wand-magic-sparkles text-white text-xs" />
                </div>
                <div>
                  <p className="text-white text-base font-semibold">Transformação {activeIndex + 1}</p>
                  <p className="text-zinc-300 text-xs">Studio Rebeca Nail Designer</p>
                </div>
              </div>

              <div className="absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                <span className="text-white text-xs font-semibold">
                  {activeIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          </div>

          {/* Miniaturas Seletoras para Desktop */}
          <div className="mt-6">
            <div className="flex items-center justify-center gap-2 mb-4 text-zinc-400">
              <i className="fa-solid fa-grip text-xs text-pink-400" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Selecione para Visualizar</h3>
            </div>
            <div className="grid grid-cols-6 lg:grid-cols-12 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-xl aspect-square border transition-all ${
                    activeIndex === index 
                      ? "border-pink-500 ring-2 ring-pink-500/20 scale-105 z-10" 
                      : "border-white/5 opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={image.src} alt="" className="w-full h-full object-cover select-none" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VISUALIZAÇÃO MOBILE (Grid Inteligente Estilo Instagram) */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => setSelectedImage(image.src)}
                className="relative overflow-hidden rounded-xl aspect-[3/4] border border-white/5 bg-white/[0.02] active:scale-95 transition-transform"
              >
                <img 
                  src={image.src} 
                  alt={`Design ${index + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-bold tracking-wider text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-md">
                  FOTO {index + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA do WhatsApp */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm text-zinc-500 mb-4">Gostou de algum desses designs exclusivos?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20adorei%20os%20trabalhos%20da%20galeria!%20Queria%20fazer%20um%20design%20especial%20%F0%9F%92%9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg shadow-pink-500/10 hover:opacity-95 transition-all"
          >
            <i className="fa-brands fa-whatsapp text-base" />
            <span>Quero um Design Assim!</span>
          </a>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* MODAL DE LIGHTBOX EM TELA CHEIA (Para Mobile e Desktop) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm px-4 select-none touch-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Botão Fechar */}
            <button 
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>

            {/* Imagem Ampliada */}
            <motion.div
              className="relative max-w-full max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
            >
              <img 
                src={selectedImage} 
                alt="Visualização ampliada" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Galeria;