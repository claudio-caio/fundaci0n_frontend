import StarRating from "../ui/StarRating";

interface TestimonioTextCardProps {
  nombre: string;
  rol: string;
  contenido: string;
  fecha?: string;
  calificacion?: number;
}

const TestimonioTextCard = ({ nombre, rol, contenido, fecha, calificacion }: TestimonioTextCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
            <svg className="w-6 h-6 text-[#34A12C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: "#012AAA" }}>
                Testimonio de {nombre}
              </h2>
              <p className="text-gray-500">{rol}</p>
              {fecha && (
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(fecha).toLocaleDateString("es-CL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
            {calificacion && <StarRating rating={calificacion} size="md" />}
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        "{contenido}"
      </p>
    </div>
  );
};

export default TestimonioTextCard;
