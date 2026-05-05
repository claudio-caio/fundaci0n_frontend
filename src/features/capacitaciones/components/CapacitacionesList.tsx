import { useNavigate } from "react-router-dom";

type Curso = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
};

interface CapacitacionesListProps {
  cursos: Curso[];
  filteredCursos: Curso[];
  loading: boolean;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function CapacitacionesList({ 
  cursos, 
  filteredCursos, 
  loading, 
  searchTerm, 
  onSearchChange 
}: CapacitacionesListProps) {
  return (
    <>
      {/* Barra de búsqueda */}
      <section className="py-8 border-b" style={{ borderColor: "#E5E7EB" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: "#9CA3AF" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar capacitaciones..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                style={{ borderColor: "#D1D5DB", color: "#3F3F3F" }}
              />
            </div>
          </div>
          
          {/* Mostrar cantidad de resultados */}
          {!loading && (
            <p className="text-center mt-4 text-sm" style={{ color: "#6B7280" }}>
              Mostrando {filteredCursos.length} de {cursos.length} capacitaciones
            </p>
          )}
        </div>
      </section>

      {/* Grid de cursos */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Estado de carga */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 mb-4" style={{ borderColor: "#34A12C" }}></div>
                <p style={{ color: "#3F3F3F" }}>Cargando capacitaciones...</p>
              </div>
            </div>
          )}

          {/* Sin resultados */}
          {!loading && filteredCursos.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto mb-4" style={{ color: "#D1D5DB" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#3F3F3F" }}>No encontramos resultados</h3>
              <p style={{ color: "#6B7280" }}>No hay capacitaciones que coincidan con "{searchTerm}"</p>
              <button
                onClick={() => onSearchChange("")}
                className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
              >
                Limpiar búsqueda
              </button>
            </div>
          )}

          {/* Grid de cursos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCursos.map((curso) => (
              <CursoCard key={curso.id} curso={curso} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Componente interno para cada tarjeta de curso
function CursoCard({ curso }: { curso: Curso }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/curso/${curso.id}`)}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2"
    >
      {/* Banner decorativo */}
      <div className="h-32 overflow-hidden bg-linear-to-br" style={{ background: "linear-gradient(135deg, #34A12C, #012AAA)" }}>
        <div className="w-full h-full flex items-center justify-center opacity-20">
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
      </div>
      
      <div className="p-6">
        {/* Título */}
        <h2 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: "#012AAA" }}>
          {curso.nombre}
        </h2>
        
        {/* Descripción */}
        <p className="mb-4 line-clamp-3 leading-relaxed" style={{ color: "#3F3F3F" }}>
          {curso.descripcion}
        </p>
        
        {/* Precio y botón */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t" style={{ borderColor: "#E5E7EB" }}>
          <div>
            <span className="text-xs" style={{ color: "#6B7280" }}>Precio</span>
            <p className="text-2xl font-bold" style={{ color: "#34A12C" }}>
              ${curso.precio}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/curso/${curso.id}`);
            }}
            className="px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:shadow-md hover:scale-105"
            style={{ backgroundColor: "#012AAA", color: "#FFFFFF" }}
          >
            Ver curso
          </button>
        </div>
      </div>
    </div>
  );
}
