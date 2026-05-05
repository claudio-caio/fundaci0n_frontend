const MainHeader = () => {
  return (
    <div className="text-center mb-12 sm:mb-16">
      <div className="inline-block mb-4 sm:mb-6">
        <span className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#34A12C]/10 mb-3 sm:mb-4">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#34A12C]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
          </svg>
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
        Aprende, Comunica y <span className="text-[#34A12C]">Lidera con Impacto</span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
        En la Fundación Incluir Valor encontrarás programas, capacitaciones y herramientas 
        para desarrollar habilidades de comunicación, oratoria y liderazgo que transformarán 
        tu vida personal y profesional.
      </p>
    </div>
  );
};

export default MainHeader;
