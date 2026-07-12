import { useState, useEffect } from "react";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Aciona a animação de entrada logo após a montagem do componente
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const ctaLink = "https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20agendar%20um%20hor%C3%A1rio%20para%20fazer%20minhas%20unhas%20%F0%9F%92%9C";

  return (
    <section
      id="home" 
      className="relative min-h-screen pt-25 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden px-6 selection:bg-pink-500/30 text-white"
    >
      {/* 🌌 BACKGROUND COM LINHAS E GRADIENTES ESTILO VERCEL */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>

      {/* 🔮 ORBES DE LUZ PREMIUM (MICROINTERAÇÕES) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse duration-[6000ms]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[120px] animate-pulse duration-[4000ms]" />
      </div>

      {/* 📦 CONTEÚDO PRINCIPAL COM TIMING VIA CSS */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        

        {/* Título com Tipografia de Alta Costura */}
        <h1 
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] transition-all duration-1000 delay-100 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Rebeca{" "}
          <span className="relative block sm:inline">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-300% animate-gradient bg-clip-text text-transparent">
              Nail Designer
            </span>
          </span>
        </h1>

        {/* Subtítulo Equilibrado */}
        <p 
          className={`text-base sm:text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed transition-all duration-1000 delay-200 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          O nível de <span className="text-white font-medium">arte em unhas</span> que você só encontra aqui — e{" "}
          <span className="text-zinc-200 underline decoration-pink-500/50 decoration-2 underline-offset-4">
            nunca mais vai querer outro lugar.
          </span>
        </p>

        {/* ⚡ BOTÃO CTA DE ELITE (Estilo SaaS Premium) */}
        <div 
          className={`transition-all duration-1000 delay-300 transform ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-full group bg-gradient-to-br from-pink-500 via-purple-600 to-pink-500 group-hover:from-pink-500 group-hover:to-purple-600 active:scale-[0.98] transition-transform duration-200"
          >
            <span className="relative px-8 py-4 transition-all ease-in duration-200 bg-zinc-950 rounded-full group-hover:bg-opacity-0 flex items-center gap-3">
              <i className="fa-brands fa-whatsapp text-xl text-green-400 group-hover:text-white transition-colors" />
              <span className="font-semibold text-base tracking-wide text-white">
                Agendar Atendimento
              </span>
            </span>
            <div className="absolute -inset-px rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-300 -z-10" />
          </a>
        </div>

        {/* 📊 INDICADORES DE CONFIANÇA INTEGRADOS */}
        <div 
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 items-center justify-center w-full max-w-3xl mt-10 pt-8 border-t border-white/[0.05] transition-all duration-1000 delay-400 transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Item 1 */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex text-amber-400 text-xs gap-0.5">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star" />
              ))}
              <span className="text-zinc-300 text-sm font-medium ml-1.5">5.0</span>
            </div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">
              Avaliação Clientes
            </span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center gap-0.5">
            <div className="flex items-center gap-2 text-zinc-200 font-medium">
              <i className="fa-solid fa-heart text-pink-500 animate-pulse" />
              <span>+100 Sorrisos</span>
            </div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider mt-1">
              Clientes Frequentes
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;