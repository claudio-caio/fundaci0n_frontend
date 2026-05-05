import { useNavigate } from "react-router-dom";

type CasoExito = {
  id: number;
  sector: "empresa" | "institucion" | "coaching";
  cliente: string;
  problema: string;
  capacitacion: string;
  resultado: string;
  testimonio: string;
  fecha: string;
  imagen_url?: string | null;
};

interface TrayectoriaCardProps {
  caso: CasoExito;
}

const sectorLabels = {
  empresa: "Empresa",
  institucion: "Institución",
  coaching: "Coaching",
};

const sectorColors = {
  empresa: "bg-blue-100 text-blue-700",
  institucion: "bg-purple-100 text-purple-700",
  coaching: "bg-green-100 text-green-700",
};

export default function TrayectoriaCard({ caso }: TrayectoriaCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#34A12C]/20">
      {/* Imagen */}
      {caso.imagen_url && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={caso.imagen_url}
            alt={`Caso de éxito: ${caso.cliente}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
            <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${sectorColors[caso.sector]}`}>
              {sectorLabels[caso.sector]}
            </span>
          </div>
        </div>
      )}

      {/* Contenido */}
      <div className="p-5">
        {/* Cliente y fecha */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
            {caso.cliente}
          </h3>
          <time className="text-xs text-gray-400 shrink-0 ml-2">
            {new Date(caso.fecha).toLocaleDateString("es-CL", {
              year: "numeric",
              month: "short",
            })}
          </time>
        </div>

        {/* Problema resumido */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
          {caso.problema}
        </p>

        {/* Solución resumida */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <svg className="w-3.5 h-3.5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Solución aplicada
            </h4>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {caso.capacitacion}
          </p>
        </div>

        {/* Botón */}
        <button
          onClick={() => navigate(`/trayectoria/${caso.id}`)}
          className="mt-2 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          style={{ backgroundColor: "#34A12C" }}
        >
          <span>Ver caso completo</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
