interface TestimoniosPaginationProps {
  paginaActual: number;
  totalPages: number;
  pageTransitioning: boolean;
  onPageChange: (page: number) => void;
}

const TestimoniosPagination = ({ 
  paginaActual, 
  totalPages, 
  pageTransitioning, 
  onPageChange 
}: TestimoniosPaginationProps) => {
  // Generar números de página para mostrar (máximo 5)
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, paginaActual - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-500">
        Mostrando <span className="font-semibold text-[#34A12C]">
          {Math.min(paginaActual * 4, totalPages * 4)}
        </span> de{' '}
        <span className="font-semibold">{totalPages * 4}</span> testimonios
      </p>
      
      <div className="flex items-center gap-2">
        {/* Botón Anterior */}
        <button
          onClick={() => onPageChange(paginaActual - 1)}
          disabled={paginaActual === 1 || pageTransitioning}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-all hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Anterior</span>
        </button>

        {/* Números de página */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              disabled={pageTransitioning}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                paginaActual === pageNum
                  ? 'bg-[#34A12C] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={() => onPageChange(paginaActual + 1)}
          disabled={paginaActual === totalPages || pageTransitioning}
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 rounded-lg transition-all hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimoniosPagination;
