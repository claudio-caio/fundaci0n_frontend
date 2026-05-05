import { useEffect, useState } from "react";
import TrayectoriaCard from "../components/TrayectoriaCard";
import TrayectoriaFilters from "../components/TrayectoriaFilters";
import HeroTrayectoria from "../../../components/Hero/HeroTrayectoria";
import { trayectoriaService } from "../services/trayectoriaService";
import type { CasoExito } from "../services/trayectoriaService";

function Trayectoria() {
  const [casos, setCasos] = useState<CasoExito[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sectorActivo, setSectorActivo] = useState("all");
  const [paginaActual, setPaginaActual] = useState(1);
  const [pageTransitioning, setPageTransitioning] = useState(false);
  const casosPorPagina = 4;

  useEffect(() => {
    const loadCasos = async () => {
      try {
        setLoading(true);
        const data = await trayectoriaService.getCasos();
        setCasos(data);
      } catch (err) {
        console.error("Error fetching trayectoria:", err);
        setError("No se pudo cargar la trayectoria.");
      } finally {
        setLoading(false);
      }
    };

    loadCasos();
  }, []);

  const casosFiltrados = casos.filter((caso) => {
    if (sectorActivo === "all") return true;
    return caso.sector === sectorActivo;
  });

  const totalPages = Math.max(1, Math.ceil(casosFiltrados.length / casosPorPagina));
  const paginaActualValida = Math.min(paginaActual, totalPages);
  const casosParaMostrar = casosFiltrados.slice((paginaActualValida - 1) * casosPorPagina, paginaActualValida * casosPorPagina);

  const handleSectorChange = (sector: string) => {
    setSectorActivo(sector);
    setPaginaActual(1);
  };

  const changePage = (newPage: number) => {
    if (newPage === paginaActual) return;
    setPageTransitioning(true);
    setTimeout(() => {
      setPaginaActual(newPage);
      setPageTransitioning(false);
    }, 200);
  };

  return (
    <div className="bg-white min-h-screen">
      <HeroTrayectoria />

      {/* Filtros */}
      <TrayectoriaFilters sectorActivo={sectorActivo} onSectorChange={handleSectorChange} />

      {/* Grid de casos */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" style={{ color: "#34A12C" }}></div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-[#34A12C] text-white rounded-lg text-sm"
              >
                Reintentar
              </button>
            </div>
          ) : casosFiltrados.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No hay casos para este filtro.</p>
            </div>
          ) : (
            <>
              <div className={`grid gap-6 md:gap-8 lg:grid-cols-2 transition-all duration-500 ease-out transform ${pageTransitioning ? 'opacity-30 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {casosParaMostrar.map((caso) => (
                  <TrayectoriaCard key={caso.id} caso={caso} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-gray-500">
                    Mostrando {casosParaMostrar.length} de {casosFiltrados.length} casos
                  </p>
                  <div className="inline-flex items-center rounded-full border border-gray-200 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => changePage(Math.max(paginaActualValida - 1, 1))}
                      className="px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
                      disabled={paginaActualValida === 1 || pageTransitioning}
                    >
                      Anterior
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => changePage(index + 1)}
                        className={`px-4 py-2 text-sm font-medium transition ${
                          paginaActualValida === index + 1 ? 'bg-[#34A12C] text-white' : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        disabled={pageTransitioning}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => changePage(Math.min(paginaActualValida + 1, totalPages))}
                      className="px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:text-gray-300"
                      disabled={paginaActualValida === totalPages || pageTransitioning}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA opcional al final */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-3">¿Querés ser parte de nuestras historias de éxito?</p>
          <button
            onClick={() => window.location.href = "/contacto"}
            className="inline-flex items-center gap-2 text-[#34A12C] font-semibold hover:gap-3 transition-all"
          >
            <span>Contactanos</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Trayectoria;
