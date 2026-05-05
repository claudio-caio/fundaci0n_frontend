import { Link } from "react-router-dom";

interface FooterContentProps {
  currentYear: number;
}

export function FooterContent({ currentYear }: FooterContentProps) {
  return (
    <>
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Columna 1 - Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-md" style={{ backgroundColor: "#34A12C" }}>
                <span className="text-white text-sm font-bold">+</span>
              </div>
              <span className="text-xl font-bold" style={{ color: "#012AAA" }}>
                Fundación<span style={{ color: "#34A12C" }}>Incluir Valor</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#2C2C2C" }}>
              Transformando vidas a través de la inclusión, capacitación y oportunidades laborales para construir una sociedad más justa e igualitaria.
            </p>
            {/* Redes sociales */}
            <div className="flex space-x-3 pt-2">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", color: "#012AAA", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", color: "#012AAA", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.441-1.44-1.441z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", color: "#012AAA", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", color: "#012AAA", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.803-12.075c0-.213-.005-.426-.015-.637a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#012AAA" }}>
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Nosotros
                </Link>
              </li>
              <li>
                <a href="mailto:info@fundacionincluirvalor.cl" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Contacto por correo
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Programas */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#012AAA" }}>
              Nuestros programas
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Inclusión laboral
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Capacitación digital
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Emprendedores
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Voluntariado
                </a>
              </li>
              <li>
                <a href="#" className="text-sm transition-colors duration-200 hover:translate-x-1 inline-block hover:font-semibold" style={{ color: "#2C2C2C" }}>
                  → Alianzas estratégicas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Contacto y newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: "#012AAA" }}>
              Contacto
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm" style={{ color: "#2C2C2C" }}>
                  Av. Principal 1234, CHACO, ARGENTINA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm" style={{ color: "#2C2C2C" }}>
                  info@fundacionincluirvalor.cl
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm" style={{ color: "#2C2C2C" }}>
                  +56 2 1234 5678
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2" style={{ color: "#012AAA" }}>
                Suscríbete a nuestro newsletter
              </h4>
              <form className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico"
                  className="px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-[#34A12C] transition-all"
                  style={{ borderColor: "#D1D5DB", color: "#2C2C2C", backgroundColor: "rgba(255,255,255,0.9)" }}
                />
                <button 
                  type="submit"
                  className="px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 hover:shadow-lg hover:scale-105"
                  style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t my-8" style={{ borderColor: "#E5E7EB", opacity: 0.5 }}></div>

        {/* Copyright y términos */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: "#2C2C2C" }}>
            © {currentYear} Fundación Incluir Valor. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors duration-200 hover:text-[#34A12C]" style={{ color: "#2C2C2C" }}>
              Términos y condiciones
            </a>
            <a href="#" className="text-xs transition-colors duration-200 hover:text-[#34A12C]" style={{ color: "#2C2C2C" }}>
              Política de privacidad
            </a>
            <a href="#" className="text-xs transition-colors duration-200 hover:text-[#34A12C]" style={{ color: "#2C2C2C" }}>
              Donaciones
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
