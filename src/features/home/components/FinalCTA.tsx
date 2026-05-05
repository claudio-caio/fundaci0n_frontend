import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <div className="text-center py-12 sm:py-16">
      <div className="max-w-3xl mx-auto bg-linear-to-r from-[#34A12C] to-[#2a8a23] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl hover:shadow-xl transition-shadow">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
          ¿Listo para transformar tu comunicación?
        </h3>
        <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 text-white/90">
          Únete a nuestros programas y comienza tu viaje hacia el liderazgo efectivo.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link 
            to="/contacto" 
            className="px-6 py-3 sm:px-8 sm:py-3 bg-white text-[#34A12C] font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base shadow-md"
          >
            Solicita Información
          </Link>
          <Link 
            to="/capacitaciones" 
            className="px-6 py-3 sm:px-8 sm:py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
          >
            Ver Programas
          </Link>
        </div>
        <p className="text-xs text-white/70 mt-6">
          📞 Consulta sin compromiso | Respuesta en 24 horas
        </p>
      </div>
    </div>
  );
};

export default FinalCTA;
