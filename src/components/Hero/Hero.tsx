import { Link } from "react-router-dom";
import logo from "../../assets/logo_fundacion.jpg";

function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: "#34A12C" }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={logo}
                alt="Fundación Incluir Valor - Transformando vidas"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-md p-3 hidden lg:block" style={{ borderLeft: `3px solid #34A12C` }}>
              <p className="text-xs font-semibold" style={{ color: "#012AAA" }}>
                🌟 Impacto positivo
              </p>
              <p className="text-xs" style={{ color: "#3F3F3F" }}>Certificada en inclusión</p>
            </div>
          </div>

          <div className="order-2 md:order-1 space-y-4 text-center md:text-left">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-opacity-10" style={{ backgroundColor: "#34A12C", color: "#34A12C" }}>
              ✨ Transformando vidas desde 2010
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span style={{ color: "#012AAA" }}>Incluir Valor</span>
              <br />
              <span style={{ color: "#3F3F3F" }}>para un futuro</span>
              <br />
              <span style={{ color: "#34A12C" }}>mejor</span>
            </h1>
            <p className="text-base md:text-lg" style={{ color: "#3F3F3F" }}>
              Empoderamos a personas y comunidades con clases presenciales y acompañamiento directo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Link
                to="/capacitaciones"
                className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 text-center text-sm"
                style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
              >
                Ver capacitaciones
              </Link>
              <Link
                to="/nosotros"
                className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 border-2 hover:shadow-md text-center text-sm"
                style={{ borderColor: "#012AAA", color: "#012AAA" }}
              >
                Conocer más
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: "#E5E7EB" }}>
              <div>
                <p className="text-xl md:text-2xl font-bold" style={{ color: "#34A12C" }}>+5,000</p>
                <p className="text-xs md:text-sm" style={{ color: "#3F3F3F" }}>Personas capacitadas</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold" style={{ color: "#34A12C" }}>+120</p>
                <p className="text-xs md:text-sm" style={{ color: "#3F3F3F" }}>Empresas aliadas</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold" style={{ color: "#34A12C" }}>+15</p>
                <p className="text-xs md:text-sm" style={{ color: "#3F3F3F" }}>Programas activos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
}

export default Hero;
