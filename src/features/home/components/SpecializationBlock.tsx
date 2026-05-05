import type { SpecializationBlockProps } from '../types/types';

const SpecializationBlock = ({ image, delay = 0 }: SpecializationBlockProps) => {
  const specializations: string[] = ["🎤 Oratoria", "👔 Liderazgo", "💬 Comunicación", "🧠 Inteligencia Emocional", "🤝 Negociación", "📊 Presentaciones"];

  return (
    <div className={`animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 ease-out delay-${delay}`}>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center bg-linear-to-l from-[#012AAA]/5 to-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
        <div className="order-2 md:order-1">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#012AAA]/10 flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#012AAA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Áreas de Especialización</h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Abordamos todas las áreas de la comunicación y el liderazgo. Desde oratoria 
            básica hasta estrategias avanzadas de comunicación corporativa.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {specializations.map((spec, idx) => (
              <span key={idx} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-[#34A12C]/20 text-[#34A12C] font-medium text-xs sm:text-sm hover:bg-[#34A12C]/5 transition-colors cursor-pointer">
                {spec}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative order-1 md:order-2">
          <img
            src={image}
            alt="Áreas de especialización - Reemplazar con imagen real"
            className="rounded-xl sm:rounded-2xl shadow-xl w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 object-cover transform hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-[#012AAA] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
            Especialización
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializationBlock;
