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
    const timer = setTimeout(() => setIsLoaded(true), 100);
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
      <footer className="bg-[#0f0c29] border-t border-white/10">
        <div className="animate-pulse max-w-6xl mx-auto px-4 py-8">
          <div className="h-4 w-64 bg-white/10 rounded mx-auto" />
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative bg-[#0f0c29] border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-3">
              Rebeca{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Nail Designer
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transformando suas unhas em obras de arte. 
              Profissionalismo e qualidade em cada detalhe.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href={footerLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <i className="fa-brands fa-whatsapp" />
              </a>
              <a
                href={footerLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm">
                <i className="fa-brands fa-whatsapp text-green-400" />
                <span>(11) 99498-8231</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm">
                <i className="fa-solid fa-location-dot text-pink-400" />
                <span>Itapecerica da Serra, SP</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-400 text-sm">
                <i className="fa-regular fa-clock text-purple-400" />
                <span>Seg a Sáb: 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Rebeca Nail Designer. Todos os direitos reservados.
            </p>
          </div>

          {/* Developed By */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Desenvolvido por</span>
            <a
              href="https://instagram.com/matheusotho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-400 transition-colors font-medium"
            >
              Matheus Otho
            </a>
            <i className="fa-solid fa-heart text-pink-500 text-xs" />
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => scrollToSection("#home")}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 hover:border-purple-500 transition-all duration-300"
          >
            <i className="fa-solid fa-arrow-up" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;