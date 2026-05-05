import { Link } from 'react-router-dom';
import type { EnrolledCourse } from '../types/learning';

interface CursoCardProps {
  course: EnrolledCourse;
}

export function CursoCard({ course }: CursoCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
      {/* Encabezado del curso */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">{course.nombre}</h3>
        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{course.descripcion}</p>
      </div>

      {/* Información del curso */}
      <div className="mb-4 text-sm text-slate-600 space-y-1">
        <p>Total de lecciones: <span className="font-medium">{course.total_lessons}</span></p>
        <p>Completadas: <span className="font-medium">{course.completed_lessons}</span></p>
      </div>

      {/* Barra de progreso */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700">Progreso</span>
          <span className="text-sm font-semibold text-slate-900">{course.progress_percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#34A12C] h-2 rounded-full transition-all duration-300"
            style={{ width: `${course.progress_percentage}%` }}
          />
        </div>
      </div>

      {/* Botón para continuar */}
      <Link
        to={`/curso/${course.id}/panel`}
        className="w-full inline-block text-center px-4 py-2 bg-[#34A12C] text-white text-sm font-medium rounded hover:bg-[#289023] transition"
      >
        Continuar Curso
      </Link>
    </div>
  );
}
