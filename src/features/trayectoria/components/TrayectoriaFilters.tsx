interface TrayectoriaFiltersProps {
  sectorActivo: string;
  onSectorChange: (sector: string) => void;
}

const sectores = [
  { value: "all", label: "Todos" },
  { value: "empresa", label: "Empresas" },
  { value: "institucion", label: "Instituciones" },
  { value: "coaching", label: "Coaching" },
];

export default function TrayectoriaFilters({ sectorActivo, onSectorChange }: TrayectoriaFiltersProps) {
  return (
    <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Filtrar por sector
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              {sectorActivo === "all" ? "Mostrando todos los casos" : `Mostrando casos de ${sectores.find(s => s.value === sectorActivo)?.label.toLowerCase()}`}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {sectores.map((sector) => (
              <button
                key={sector.value}
                onClick={() => onSectorChange(sector.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  sectorActivo === sector.value
                    ? "bg-[#34A12C] text-white shadow-md"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
