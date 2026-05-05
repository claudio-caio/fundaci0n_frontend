interface TestimoniosErrorProps {
  error: string;
  onReintentar: () => void;
}

const TestimoniosError = ({ error, onReintentar }: TestimoniosErrorProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Error al cargar testimonios</h3>
      <p className="text-gray-500 mb-6">{error}</p>
      <button
        onClick={onReintentar}
        className="px-6 py-2 rounded-lg text-white transition-all hover:shadow-lg"
        style={{ backgroundColor: "#34A12C" }}
      >
        Reintentar
      </button>
    </div>
  );
};

export default TestimoniosError;
