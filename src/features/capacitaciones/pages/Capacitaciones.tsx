import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../config/api";
import { CapacitacionesHeader } from "../components/CapacitacionesHeader.tsx";
import { CapacitacionesList } from "../components/CapacitacionesList.tsx";

type Curso = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
};

function Capacitaciones() {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadCursos() {
      try {
        const res = await fetch(`${API_BASE_URL}/cursos/`);
        const text = await res.text();

        if (!res.ok) {
          throw new Error(`Error fetching cursos: ${res.status} ${res.statusText} - ${text}`);
        }

        const data = JSON.parse(text);
        setCursos(data);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCursos();
  }, []);

  // Filtrar cursos solo por búsqueda
  const filteredCursos = cursos.filter((curso) => {
    const matchesSearch = curso.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          curso.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <CapacitacionesHeader />
      
      <CapacitacionesList 
        cursos={cursos}
        filteredCursos={filteredCursos}
        loading={loading}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
    </div>
  );
}

export default Capacitaciones;
