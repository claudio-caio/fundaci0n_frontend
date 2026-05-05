import { useNavigate } from "react-router-dom";

export function CapacitacionesHeader() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero de Capacitaciones */}
      <section className="relative bg-linear-to-br from-white to-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-opacity-10" 
                 style={{ backgroundColor: "#34A12C", color: "#34A12C" }}>
              📚 Aprendizaje continuo
            </div>
            
            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#012AAA" }}>
              Nuestras <span style={{ color: "#34A12C" }}>Capacitaciones</span>
            </h1>
            
            {/* Descripción */}
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#3F3F3F" }}>
              Potencia tus habilidades con nuestros cursos diseñados para impulsar tu desarrollo 
              profesional y personal. ¡Aprende de los mejores!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#012AAA" }}>
            ¿Necesitas una capacitación personalizada?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#3F3F3F" }}>
            Contáctanos y creamos un programa a medida para tu equipo u organización.
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
          >
            Solicitar información
          </button>
        </div>
      </section>
    </>
  );
}
