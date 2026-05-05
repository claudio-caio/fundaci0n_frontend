interface TestimoniosCTAProps {
  onCompartir: () => void;
}

const TestimoniosCTA = ({ onCompartir }: TestimoniosCTAProps) => {
  return (
    <div className="bg-gray-50 py-16 mt-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-[#34A12C]/10 text-[#34A12C] mb-4">
          💬 Tu opinión importa
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: "#012AAA" }}>
          ¿Ya viviste la experiencia?
        </h3>
        <p className="text-gray-600 mb-6">
          Compartí tu testimonio y ayudá a más personas a descubrir el poder de la comunicación efectiva.
        </p>
        <button
          onClick={onCompartir}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg hover:scale-105"
          style={{ backgroundColor: "#34A12C" }}
        >
          <span>Compartir mi experiencia</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimoniosCTA;
