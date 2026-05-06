import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";
import { HistoriaHeader } from "../historia/HistoriaHeader.tsx";
import { HistoriaContent } from "../historia/HistoriaContent";
import type { CasoExito } from "../types/TrayectoriaHistoria.types.ts";

function TrayectoriaHistoria() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [caso, setCaso] = useState<CasoExito | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_BASE_URL}/trayectoria/casos/${id}/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setCaso(data))
      .catch((err) => {
        console.error("Error fetching trayectoria detalle:", err);
        setError("No se pudo cargar la historia. Intentá nuevamente más tarde.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" style={{ color: "#34A12C" }}></div>
          <p className="mt-4 text-sm text-gray-500">Cargando caso de éxito...</p>
        </div>
      </div>
    );
  }

  if (error || !caso) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Caso no encontrado</h3>
          <p className="text-gray-500 mb-6">{error ?? "El caso de éxito que buscas no existe o ha sido removido."}</p>
          <button
            onClick={() => navigate("/trayectoria")}
            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "#34A12C" }}
          >
            ← Volver a trayectoria
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen">
      <HistoriaHeader caso={caso} imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
      <HistoriaContent caso={caso} />
    </article>
  );
}

export default TrayectoriaHistoria;
