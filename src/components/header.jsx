import { useState, useEffect } from "react";

const navItems = [
  { name: "Galeria", href: "#galeria" },
  { name: "Serviços", href: "#servicos" },
  { name: "Clientes", href: "#clientes" },
  { name: "Contato", href: "#contato" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0f0c29]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 z-50">
            <span className="text-2xl font-bold tracking-tight text-white">
              Rebeca
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Nails
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-white transition-colors relative group
                    lg:text-base"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            
            <a
              href="#contato"
              className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all
              lg:text-base"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-white"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-[#0f0c29] transition-all duration-300 lg:hidden flex flex-col ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Background decorativo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />
        </div>

        {/* Links alinhados à esquerda */}
        <div className="relative z-10 flex flex-col pt-20 px-10">
          <ul className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`transition-all duration-300 ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-lg font-medium text-white hover:text-pink-400 transition-colors block py-4 px-3"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            onClick={handleLinkClick}
            className={`mt-6 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-semibold rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all text-center ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
            style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
          >
            Agendar Agora
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;