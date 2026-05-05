import { Link } from "react-router-dom";

interface Props {
  id: number;
  nombre: string;
  rol: string;
  contenido: string;
  imagen: string | null;
  calificacion?: number; // Opcional: 1-5 estrellas
}

const TestimonioCard = ({ id, nombre, rol, contenido, imagen, calificacion = 5 }: Props) => {
  return (
    <Link to={`/testimonios/${id}`} className="block group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-[#34A12C]/20 h-full flex flex-col">
        
        {/* Imagen con overlay en hover */}
        {imagen && (
          <div className="relative overflow-hidden h-56">
            <img
              src={imagen}
              alt={`Testimonio de ${nombre}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Ícono de comillas flotante */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
              <svg className="w-4 h-4 text-[#34A12C]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
        )}

        {/* Contenido */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Calificación con estrellas */}
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < calificacion ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Testimonio */}
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-4">
            "{contenido}"
          </p>

          {/* Información del cliente */}
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {/* Avatar inicial si no hay imagen */}
              {!imagen && (
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#34A12C] to-[#2a8a23] flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-bold">
                    {nombre.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-base truncate" style={{ color: "#012AAA" }}>
                  {nombre}
                </h3>
                <p className="text-xs text-gray-500 truncate">{rol}</p>
              </div>
              
              {/* Flecha de navegación */}
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#34A12C] transition-colors duration-300 shrink-0">
                <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TestimonioCard;
