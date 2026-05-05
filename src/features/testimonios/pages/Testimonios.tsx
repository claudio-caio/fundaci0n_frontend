import { useEffect, useState } from "react";
import Hero from "../components/sections/HeroTestimonios";
import TestimonioCard from "../components/cards/TestimonioCard";
import TestimoniosPagination from "../components/TestimoniosPagination";
import TestimoniosEmpty from "../components/states/TestimoniosEmpty";
import TestimoniosError from "../components/states/TestimoniosError";
import TestimoniosLoading from "../components/TestimoniosLoading";
import TestimoniosCTA from "../components/sections/TestimoniosCTA";
import { testimoniosService, type Testimonio } from "../services/testimoniosService";

const Testimonios = () => {
  const [data, setData] = useState<Testimonio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [pageTransitioning, setPageTransitioning] = useState(false);
  const testimoniosPorPagina = 4;

  useEffect(() => {
    const loadTestimonios = async () => {
      try {
        setLoading(true);
        const testimonios = await testimoniosService.getTestimonios();
        setData(testimonios);
      } catch (err) {
        console.error("Error fetching testimonios:", err);
        setError("No se pudieron cargar los testimonios. Intentá nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    loadTestimonios();
  }, []);

  const totalPages = Math.max(1, Math.ceil(data.length / testimoniosPorPagina));
  const paginaActualValida = Math.min(paginaActual, totalPages);
  const testimoniosParaMostrar = data.slice(
    (paginaActualValida - 1) * testimoniosPorPagina,
    paginaActualValida * testimoniosPorPagina
  );

  const changePage = (newPage: number) => {
    if (newPage === paginaActual) return;
    setPageTransitioning(true);
    setTimeout(() => {
      setPaginaActual(newPage);
      setPageTransitioning(false);
    }, 200);
  };

  const handleReintentar = () => {
    window.location.reload();
  };

  const handleCompartir = () => {
    window.location.href = "/contacto";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Hero />
        <TestimoniosLoading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Hero />
        <TestimoniosError error={error} onReintentar={handleReintentar} />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Hero />
        <TestimoniosEmpty onCompartir={handleCompartir} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Grid de testimonios - 2 columnas (4 testimonios = 2 filas) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 transition-all duration-500 ease-out transform ${
          pageTransitioning ? 'opacity-30 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          {testimoniosParaMostrar.map((testimonio) => (
            <TestimonioCard key={testimonio.id} {...testimonio} />
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <TestimoniosPagination
            paginaActual={paginaActualValida}
            totalPages={totalPages}
            pageTransitioning={pageTransitioning}
            onPageChange={changePage}
          />
        )}
      </div>

      {/* CTA final */}
      <TestimoniosCTA onCompartir={handleCompartir} />
    </div>
  );
};

export default Testimonios;
