interface TestimonioCTAProps {
  onCompartir?: () => void;
}

const TestimonioCTA = ({ onCompartir }: TestimonioCTAProps) => {
  const handleClick = () => {
    if (onCompartir) {
      onCompartir();
    } else {
      window.location.href = "/contacto";
    }
  };

  return (
    <div className="text-center">
      <div className="bg-linear-to-r from-[#34A12C]/10 to-[#012AAA]/10 rounded-2xl p-8">
        <h3 className="text-xl font-bold mb-3" style={{ color: "#012AAA" }}>
          ¿Te gustaría compartir tu experiencia?
        </h3>
        <p className="text-gray-600 mb-4">
          Tu testimonio puede inspirar a más personas a transformar su comunicación.
        </p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
          style={{ backgroundColor: "#34A12C" }}
        >
          Compartir mi testimonio
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonioCTA;
