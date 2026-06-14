import { useState, useEffect } from "react";
import "../App.css";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animateTrust, setAnimateTrust] = useState(false);

  // Animação de entrada - só executa no cliente
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animação dos indicadores após carregamento
  useEffect(() => {
    if (isLoaded) {
      const trustTimer = setTimeout(() => {
        setAnimateTrust(true);
      }, 800);
      return () => clearTimeout(trustTimer);
    }
  }, [isLoaded]);

  const ctaLink = "https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20agendar%20um%20hor%C3%A1rio%20para%20fazer%20minhas%20unhas%20%F0%9F%92%9C";

  // Se ainda não carregou, retorna null ou um skeleton
  if (!isLoaded) {
    return (
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f0c29]">
        {/* Skeleton loader simples */}
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-32 bg-white/10 rounded-full mb-8" />
          <div className="h-12 w-80 bg-white/10 rounded-lg mb-6" />
          <div className="h-6 w-96 bg-white/10 rounded-lg mb-10" />
          <div className="h-14 w-56 bg-white/10 rounded-full" />
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/20" />
      </div>

      {/* DECORATIVE BLOBS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm text-gray-200 font-medium tracking-wide">Studio Premium</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          Rebeca{" "}
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Nail Designer
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent blur-xl opacity-50" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
          O nível de{" "}
          <span className="text-white font-semibold">unhas</span> que você só encontra aqui — e{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
            nunca mais vai querer outro lugar
          </span>
        </p>

        {/* CTA BUTTON */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={ctaLink}
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:duration-300" />
            
            <div className="relative flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300 group-hover:scale-[1.02] group-active:scale-[0.98]">
              
              <div className="relative">
                <i className="fa-brands fa-whatsapp text-2xl text-white" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-green-500 animate-ping" />
              </div>

              <div className="flex flex-col items-start">
                <span className="text-white font-bold text-lg leading-tight">
                  Agendar Atendimento
                </span>
              </div>

            </div>
          </a>
        </div>

        {/* TRUST INDICATORS - ANIMATED */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-16">
          {/* Estrelas */}
          <div 
            className={`flex items-center gap-2 text-gray-400 text-sm transition-all duration-700 ${
              animateTrust ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="flex text-yellow-400 text-xs">
              {[0, 1, 2, 3, 4].map((index) => (
                <i 
                  key={index}
                  className="fa-solid fa-star animate-star"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: animateTrust ? 1 : 0,
                    transform: animateTrust ? 'scale(1)' : 'scale(0)',
                    transition: 'all 0.3s ease-out',
                    display: 'inline-block'
                  }}
                />
              ))}
            </div>
            <span 
              className="ml-1 transition-all duration-700"
              style={{
                opacity: animateTrust ? 1 : 0,
                transform: animateTrust ? 'translateX(0)' : 'translateX(-10px)',
                transitionDelay: '500ms'
              }}
            >
              5.0
            </span>
          </div>
          
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
          
          {/* Profissional */}
          <div 
            className="flex items-center gap-2 text-gray-400 text-sm transition-all duration-700"
            style={{
              opacity: animateTrust ? 1 : 0,
              transform: animateTrust ? 'translateX(0)' : 'translateX(20px)',
              transitionDelay: '300ms'
            }}
          >
            <i 
              className="fa-solid fa-certificate text-pink-400 transition-all duration-500"
              style={{
                opacity: animateTrust ? 1 : 0,
                transform: animateTrust ? 'rotate(0deg)' : 'rotate(-180deg)',
                transitionDelay: '400ms'
              }}
            />
            <span 
              className="transition-all duration-700"
              style={{
                opacity: animateTrust ? 1 : 0,
                transitionDelay: '500ms'
              }}
            >
              Profissional em Nail Designer
            </span>
          </div>
          
          <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
          
          {/* Clientes */}
          <div 
            className="flex items-center gap-2 text-gray-400 text-sm transition-all duration-700"
            style={{
              opacity: animateTrust ? 1 : 0,
              transform: animateTrust ? 'translateX(0)' : 'translateX(20px)',
              transitionDelay: '600ms'
            }}
          >
            <i 
              className="fa-solid fa-heart text-pink-400 animate-pulse"
              style={{
                opacity: animateTrust ? 1 : 0,
                transitionDelay: '700ms'
              }}
            />
            <span 
              className="transition-all duration-700"
              style={{
                opacity: animateTrust ? 1 : 0,
                transitionDelay: '800ms'
              }}
            >
              +100 Clientes
            </span>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-500 text-xs tracking-widest">SCROLL</span>
        <div className="w-6 h-10 rounded-full border border-gray-500/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;