import { useNavigate } from "react-router-dom";
import { HistoriaActions } from "../historia/HistoriaActions.tsx";
import { HistoriaGallery } from "./HistoriaGallery.tsx";
import type { CasoExito } from "../types/TrayectoriaHistoria.types.ts";

interface HistoriaContentProps {
  caso: CasoExito;
}

export function HistoriaContent({ caso }: HistoriaContentProps) {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <HistoriaActions cliente={caso.cliente} />

      <div className="space-y-12">
        {/* Galería */}
        <HistoriaGallery galeria={caso.galeria} />

        {/* Desafío */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">El desafío</h2>
          </div>
          <div className="w-12 h-0.5 bg-[#34A12C] mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-lg">{caso.problema}</p>
        </section>

        {/* Solución */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">La solución aplicada</h2>
          </div>
          <div className="w-12 h-0.5 bg-[#34A12C] mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-lg">{caso.capacitacion}</p>
        </section>

        {/* Resultados */}
        <section className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Resultados obtenidos</h2>
          </div>
          <div className="w-12 h-0.5 bg-[#34A12C] mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-lg">{caso.resultado}</p>
        </section>

        {/* Testimonio */}
        {caso.testimonio && (
          <section className="relative bg-[#012AAA]/5 rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#012AAA]/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#012AAA] flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    "{caso.testimonio}"
                  </p>
                  <footer className="mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#34A12C] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{caso.cliente}</p>
                        <p className="text-xs text-gray-500">Cliente verificado</p>
                      </div>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* CTA Final */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="bg-linear-to-r from-[#012AAA] to-[#012AAA]/90 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">¿Necesitás resultados similares?</h3>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Transformá la comunicación de tu organización con nuestra metodología probada
          </p>
          <button
            onClick={() => navigate("/contacto")}
            className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-semibold rounded-lg text-[#012AAA] bg-white transition-all hover:bg-white/90 hover:scale-105 shadow-lg"
          >
            Solicitar asesoría
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <p className="text-xs text-white/70 mt-4">
            Consulta sin compromiso · Respuesta en 24h
          </p>
        </div>
      </div>
    </div>
  );
}
