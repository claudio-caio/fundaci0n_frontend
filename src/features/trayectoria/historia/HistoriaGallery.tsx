import { useState } from "react";

type CasoExitoImage = {
  id: number;
  titulo?: string;
  descripcion?: string;
  orden: number;
  imagen_url?: string | null;
};

interface HistoriaGalleryProps {
  galeria?: CasoExitoImage[];
}

export function HistoriaGallery({ galeria }: HistoriaGalleryProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState<CasoExitoImage | null>(null);

  if (!galeria || galeria.length === 0) return null;

  return (
    <section>
      <div className="mb-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Galería de imágenes</h2>
            <p className="text-gray-500 mt-2">Usá las flechas para navegar; clic en la imagen para verla más grande.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setGalleryIndex((prev) => (prev - 1 + galeria.length) % galeria.length)}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50"
              aria-label="Imagen anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setGalleryIndex((prev) => (prev + 1) % galeria.length)}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50"
              aria-label="Siguiente imagen"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="relative h-105 bg-gray-100">
          <button
            onClick={() => setGalleryIndex((prev) => (prev - 1 + galeria.length) % galeria.length)}
            type="button"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-700 shadow-sm transition hover:bg-white"
            aria-label="Imagen anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setGalleryIndex((prev) => (prev + 1) % galeria.length)}
            type="button"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-700 shadow-sm transition hover:bg-white"
            aria-label="Siguiente imagen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {galeria.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setEnlargedImage(item)}
              className={`absolute inset-0 transition-opacity duration-500 ${index === galleryIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}
              aria-label={`Ver imagen ${index + 1}`}
            >
              {item.imagen_url ? (
                <img
                  src={item.imagen_url}
                  alt={item.titulo || `Imagen ${item.orden}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  Sin imagen
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="p-5 sm:p-6 bg-white">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-500">Imagen {galleryIndex + 1} de {galeria.length}</p>
              {galeria[galleryIndex]?.titulo && (
                <p className="text-lg font-semibold text-gray-900">{galeria[galleryIndex]?.titulo}</p>
              )}
            </div>
            {galeria[galleryIndex]?.descripcion && (
              <p className="text-sm text-gray-500 max-w-2xl">{galeria[galleryIndex]?.descripcion}</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {enlargedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="relative max-w-5xl w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setEnlargedImage(null)}
              type="button"
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
              aria-label="Cerrar vista ampliada"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative bg-black">
              {enlargedImage.imagen_url ? (
                <img
                  src={enlargedImage.imagen_url}
                  alt={enlargedImage.titulo || `Imagen ${enlargedImage.orden}`}
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <div className="flex h-80 items-center justify-center text-gray-400">Sin imagen</div>
              )}
            </div>
            <div className="p-6">
              {enlargedImage.titulo && <h3 className="text-xl font-semibold text-gray-900 mb-2">{enlargedImage.titulo}</h3>}
              {enlargedImage.descripcion && <p className="text-gray-600">{enlargedImage.descripcion}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
