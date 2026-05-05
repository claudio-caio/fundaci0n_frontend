import { Link } from "react-router-dom";
import logo from "../../../../assets/logo_fundacion.jpg";

const HeroTestimonios = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#34A12C" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Columna izquierda - Texto */}
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-opacity-10" 
                 style={{ backgroundColor: "#34A12C", color: "#34A12C" }}>
              💬 Testimonios reales
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span style={{ color: "#012AAA" }}>Historias que</span>
              <br />
              <span style={{ color: "#34A12C" }}>transforman</span>
              <br />
              <span style={{ color: "#3F3F3F" }}>vidas</span>
            </h1>
            <p className="text-base md:text-lg" style={{ color: "#3F3F3F" }}>
              Conocé testimonios reales de estudiantes, empresarios e instituciones
              que vivieron un cambio a través de nuestra formación en oratoria y liderazgo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Link
                to="/testimonios"
                className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 text-center text-sm"
                style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
              >
                Ver testimonios
              </Link>
              <Link
                to="/contacto"
                className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 border-2 hover:shadow-md text-center text-sm"
                style={{ borderColor: "#012AAA", color: "#012AAA" }}
              >
                Compartir mi experiencia
              </Link>
            </div>
            
            {/* Estadísticas de satisfacción */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: "#E5E7EB" }}>
              <div>
                <p className="text-xl md:text-2xl font-bold" style={{ color: "#34A12C" }}>98%</p>
                <p className="text-xs md:text-sm" style={{ color: "#3F3F3F" }}>Satisfacción</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold" style={{ color: "#34A12C" }}>+200</p>
                <p className="text-xs md:text-sm" style={{ color: "#3F3F3F" }}>Testimonios</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold" style={{ color: "#34A12C" }}>4.9</p>
                <p className="text-xs md:text-sm" style={{ color: "#3F3F3F" }}>Calificación</p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={logo}
                alt="Testimonios - Fundación Incluir Valor"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Tarjeta flotante decorativa */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-3 hidden lg:block" 
                 style={{ borderLeft: `3px solid #34A12C` }}>
              <p className="text-xs font-semibold" style={{ color: "#012AAA" }}>
                ⭐ Experiencias reales
              </p>
              <p className="text-xs" style={{ color: "#3F3F3F" }}>Clientes que confían</p>
            </div>
            
            {/* Tarjeta flotante superior derecha */}
            <div className="absolute -top-4 -right-4 bg-[#34A12C] rounded-lg shadow-md p-3 hidden lg:block">
              <p className="text-xs font-semibold text-white">
                💬 +200 historias
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ola decorativa */}
      <div className="relative mt-4">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120,320,120,160,120,80,120L0,120Z"
            style={{ fill: "#34A12C", opacity: 0.08 }}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroTestimonios;
