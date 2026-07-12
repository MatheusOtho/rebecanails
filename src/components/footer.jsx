import { useState, useEffect } from "react";

const footerLinks = {
  whatsapp: "https://api.whatsapp.com/send?phone=5511994988231&text=Oi%2C%20tudo%20bem%3F%20Quero%20agendar%20um%20hor%C3%A1rio%20%F0%9F%92%9C",
  instagram: "https://www.instagram.com/rebecanails_designer/",
};

const navLinks = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isLoaded) {
    return (
      <footer className="bg-zinc-950 border-t border-white/5">
        <div className="animate-pulse max-w-5xl mx-auto px-6 py-12">
          <div className="h-4 w-48 bg-white/10 rounded mx-auto" />
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 overflow-hidden text-white selection:bg-pink-500/30">
      {/* Background Iluminação */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 mb-16 text-center md:text-left">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">
              Rebeca{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                Nail Designer
              </span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transformando suas unhas em obras de arte. Profissionalismo, biossegurança e qualidade em cada detalhe.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={footerLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/20 hover:bg-emerald-500/[0.02] active:scale-95 transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
              </a>
              <a
                href={footerLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-pink-400 hover:border-pink-500/20 hover:bg-pink-500/[0.02] active:scale-95 transition-all duration-300"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-zinc-200 font-semibold text-sm tracking-wider uppercase mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-zinc-400 hover:text-pink-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-zinc-200 font-semibold text-sm tracking-wider uppercase mb-5">Informações</h4>
            <div className="space-y-3 flex flex-col items-center md:items-end text-zinc-400 text-sm">
              <div className="flex items-center gap-2.5">
                <i className="fa-brands fa-whatsapp text-emerald-500" />
                <span>(11) 99498-8231</span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-location-dot text-pink-500" />
                <span>Itapecerica da Serra, SP</span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-regular fa-clock text-purple-500" />
                <span>Seg a Sáb: 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center sm:text-left order-2 sm:order-1">
            <p className="text-zinc-500 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Rebeca Nail Designer. Todos os direitos reservados.
            </p>
          </div>

          {/* Developed By & Back to Top */}
          <div className="flex flex-col sm:flex-row items-center gap-6 order-1 sm:order-2 w-full sm:w-auto">
            <div className="flex items-center gap-1.5 text-zinc-500 text-xs sm:text-sm">
              <span>Desenvolvido por</span>
              <a
                href="https://instagram.com/matheusotho"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-pink-400 transition-colors font-medium"
              >
                Matheus Otho
              </a>
            </div>

            <button
              onClick={() => scrollToSection("#home")}
              className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all"
              aria-label="Voltar para o topo"
            >
              <i className="fa-solid fa-arrow-up text-xs" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;