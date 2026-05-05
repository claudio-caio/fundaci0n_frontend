import Hero from "../../../components/Hero/Hero";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import MainHeader from "../components/MainHeader";
import StatsSection from "../components/StatsSection";
import ServiceBlock from "../components/ServiceBlock";
import CommunityBlock from "../components/CommunityBlock";
import SpecializationBlock from "../components/SpecializationBlock";
import FinalCTA from "../components/FinalCTA";

// 📸 IMÁGENES - TEMPORALES (el cliente las reemplazará después)
import logoFundacion from "../../../assets/logo_fundacion.jpg";

function Home() {
  useScrollAnimation();

  // Datos de los servicios con tipado TypeScript
  const capacitacionesData = {
    image: logoFundacion,
    title: "Capacitaciones que Transforman",
    description: "Nuestros programas están diseñados para potenciar habilidades de comunicación, liderazgo y oratoria. Cada capacitación combina teoría y práctica para garantizar resultados tangibles en tu desarrollo profesional.",
    items: ["Oratoria y comunicación efectiva", "Liderazgo y trabajo en equipo", "Inteligencia emocional"],
    badgeText: "Capacitaciones",
    badgeColor: "#34A12C" as const,
    imagePosition: "right" as const,
    delay: 0
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <MainHeader />
        <StatsSection />
        
        {/* Bloque 1 - Capacitaciones */}
        {/* 📌 CLIENTE: Reemplazar imagen con foto de capacitación/oratoria */}
        <ServiceBlock {...capacitacionesData} />
        
        {/* Bloque 2 - Servicios Personalizados */}
        {/* 📌 CLIENTE: Reemplazar imagen con foto de asesoría personalizada */}
        <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 ease-out delay-100">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20 bg-linear-to-l from-[#012AAA]/5 to-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
            <div className="order-2 md:order-1">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#012AAA]/10 flex items-center justify-center mr-3 sm:mr-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#012AAA]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Soluciones a tu Medida</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Ofrecemos programas personalizados para empresas, instituciones y personas. 
                Cada solución se adapta a tus necesidades específicas para garantizar el máximo 
                impacto y resultados medibles.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Empresas", desc: "Liderazgo y comunicación corporativa" },
                  { title: "Instituciones", desc: "Programas educativos y formación" },
                  { title: "Coaching", desc: "Entrenamiento personalizado" },
                  { title: "Talleres", desc: "Práctica intensiva" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:shadow-md hover:border-[#34A12C]/30 transition-all">
                    <div className="text-[#34A12C] font-bold text-sm sm:text-base md:text-lg mb-1">{item.title}</div>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src={logoFundacion}
                alt="Soluciones personalizadas - Reemplazar con imagen real"
                className="rounded-xl sm:rounded-2xl shadow-xl w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 object-cover transform hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#012AAA] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
                Personalizado
              </div>
            </div>
          </div>
        </div>
        
        {/* Bloque 3 - Comunidad */}
        {/* 📌 CLIENTE: Reemplazar imagen con foto de comunidad/grupo */}
        <CommunityBlock image={logoFundacion} delay={200} />
        
        {/* Bloque 4 - Especialización */}
        {/* 📌 CLIENTE: Reemplazar imagen con foto de diferentes áreas */}
        <SpecializationBlock image={logoFundacion} delay={300} />
        
        {/* Bloque - Fundador */}
        <div className="animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 ease-out delay-200">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Conoce a Nuestro Fundador</h2>
            <p className="text-gray-600 mb-6">
              El profesor Juan Pérez, experto en oratoria y liderazgo, ha dedicado su vida a transformar la comunicación y el desarrollo personal de miles de personas. Su visión y experiencia son el motor de nuestra fundación.
            </p>
            <a
              href="/nosotros"
              className="inline-block bg-[#34A12C] text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#2a8f24] transition-colors"
            >
              Leer más sobre el profesor
            </a>
          </div>
        </div>
        
        <FinalCTA />
      </div>
    </div>
  );
}

export default Home;
