import { useState, useEffect } from "react";

const navItems = [
  { name: "Galeria", href: "#galeria" },
  { name: "Serviços", href: "#servicos" },
  { name: "Clientes", href: "#clientes" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Otimização de Performance: Listener de scroll passivo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile se a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Travar o scroll do body apenas quando o menu mobile estiver ativo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Acessibilidade: Fechar com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between relative">
          {/* Logo Premium */}
          <a href="#home" className="flex items-center gap-2 z-[60] relative group">
            <span className="text-xl font-bold tracking-tight text-white transition-opacity group-hover:opacity-90">
              Rebeca
              <span className="ml-1 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-300% animate-gradient bg-clip-text text-transparent font-medium">
                Nails
              </span>
            </span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 relative py-2 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
                  </a>
                </li>
              ))}
            </ul>

            <span className="w-[1px] h-5 bg-white/10" aria-hidden="true" />

            <a
              href="#contato"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden shadow-sm transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-600 before:to-purple-600 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10 isolate active:scale-[0.98]"
            >
              Agendar Horário
            </a>
          </nav>

          {/* Botão Hambúrguer Animado com z-index alto */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[60] p-2 text-zinc-400 hover:text-white transition-colors flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`h-[2px] w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[8px] bg-white" : ""
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-current transition-all duration-200 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-current transform transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 translate-y-[-8px] bg-white" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* MENU MOBILE FULLSCREEN (LAYOUT MELHORADO) */}
      <div
        className={`fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-3xl transition-all duration-500 lg:hidden flex flex-col justify-center items-center ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Orbes de Luz de Fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-600/25 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/25 rounded-full blur-[140px]" />
        </div>

        {/* Conteúdo do Menu Centralizado com z-index */}
        <nav className="relative z-10 px-6 max-w-md w-full flex flex-col items-center gap-10">
          {/* Título Opcional para o Menu Mobile */}
          <p className={`text-xs font-semibold text-zinc-500 uppercase tracking-widest transition-all duration-500 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Navegação
          </p>
          
          <ul className="flex flex-col gap-6 items-center w-full">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`w-full text-center transition-all duration-500 transform ${
                  isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 80 + 100}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-zinc-100 hover:text-white transition-all block py-3 border-b border-white/[0.04] focus:outline-none focus:text-white focus:bg-white/[0.02] rounded-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`w-full transition-all duration-500 transform ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isOpen ? `${navItems.length * 80 + 200}ms` : "0ms" }}
          >
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="block w-full py-4.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center text-lg font-semibold rounded-xl shadow-lg shadow-pink-600/15 active:scale-[0.98] transition-transform duration-300"
            >
              Agendar Horário
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;