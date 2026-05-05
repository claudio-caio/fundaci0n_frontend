import type { CommunityBlockProps, FeatureItem } from '../types/types';

const CommunityBlock = ({ image, delay = 0 }: CommunityBlockProps) => {
  const features: FeatureItem[] = [
    { icon: "M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z", title: "Foros de Discusión", description: "Comparte experiencias y resuelve dudas" },
    { icon: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z", title: "Webinars Exclusivos", description: "Accede a contenido premium" },
    { icon: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", title: "Soporte Continuo", description: "Acompañamiento en tu proceso" }
  ];

  return (
    <div className={`animate-on-scroll opacity-0 translate-y-4 transition-all duration-500 ease-out delay-${delay}`}>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20 bg-linear-to-r from-[#34A12C]/5 to-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
        <div className="relative order-1">
          <img
            src={image}
            alt="Comunidad de aprendizaje - Reemplazar con imagen real"
            className="rounded-xl sm:rounded-2xl shadow-xl w-full h-62.5 sm:h-75 md:h-87.5 lg:h-100 object-cover transform hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[#34A12C] text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full font-bold text-sm sm:text-base shadow-lg">
            Comunidad
          </div>
        </div>
        
        <div className="order-2">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#34A12C]/10 flex items-center justify-center mr-3 sm:mr-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34A12C]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">Comunidad de Aprendizaje</h3>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
            Únete a una comunidad activa de profesionales y estudiantes que comparten 
            experiencias, recursos y oportunidades de crecimiento. Aprende de otros y 
            comparte tus logros.
          </p>
          <div className="space-y-3 sm:space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start group cursor-pointer">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#34A12C] mt-0.5 sm:mt-1 mr-2 sm:mr-3 shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d={feature.icon} clipRule="evenodd"/>
                </svg>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{feature.title}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBlock;
