import type { CasoExito } from "../types/TrayectoriaHistoria.types.ts";
import { sectorLabel, sectorColors } from "../types/TrayectoriaHistoria.types.ts";

interface HistoriaHeaderProps {
  caso: CasoExito;
  imageLoaded: boolean;
  setImageLoaded: (loaded: boolean) => void;
}

export function HistoriaHeader({ caso, imageLoaded, setImageLoaded }: HistoriaHeaderProps) {
  return (
    <>
      {/* Hero - Imagen de portada */}
      <div className="bg-white">
        {caso.imagen_url || caso.galeria?.[0]?.imagen_url ? (
          <div className="relative w-full h-105 overflow-hidden bg-gray-100">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
            )}
            <img
              src={(caso.imagen_url ?? caso.galeria?.[0]?.imagen_url) ?? undefined}
              alt={`${caso.cliente} - caso de éxito en oratoria`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative w-full h-105 overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400">
            <span>Imagen no disponible</span>
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`inline-flex items-center rounded-full ${sectorColors[caso.sector].bg} px-3 py-1.5 text-xs font-semibold ${sectorColors[caso.sector].text}`}>
            {sectorLabel[caso.sector]}
          </span>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time dateTime={caso.fecha}>
              {new Date(caso.fecha).toLocaleDateString("es-CL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          {caso.cliente}
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl leading-relaxed">
          Transformación en {sectorLabel[caso.sector].toLowerCase()} a través de la oratoria estratégica.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Caso verificado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Resultados medibles</span>
          </div>
        </div>
      </div>
    </>
  );
}
