import { useEffect, useState } from "react";
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
    fetch("/api/cursos/")
      .then((res) => res.json())
      .then((data) => {
        setCursos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cursos:", error);
        setLoading(false);
      });
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
