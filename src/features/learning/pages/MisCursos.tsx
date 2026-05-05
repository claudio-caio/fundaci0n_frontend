import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { learningService } from '../services/learningService';
import type { EnrolledCourse } from '../types/learning';
import { CursoCard } from '../components/CursoCard';

export default function MisCursos() {
  const [courses, setCourses] = useState<EnrolledCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await learningService.getEnrolledCourses();
      setCourses(data.enrolled_courses);
      
      // Calcular progreso general
      const avgProgress = data.enrolled_courses.reduce((acc, course) => acc + (course.progress_percentage || 0), 0) / (data.enrolled_courses.length || 1);
      setProgress(Math.round(avgProgress));
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'Unauthorized') {
          setError('Debes iniciar sesión para ver tus cursos');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError(err.message);
        }
      } else {
        setError('Error al cargar los cursos');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" style={{ color: "#34A12C" }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#012AAA" }}></div>
            </div>
          </div>
          <p className="mt-6 text-gray-500 font-medium">Cargando tus cursos...</p>
          <p className="text-sm text-gray-400 mt-1">Preparando tu contenido</p>
        </div>
      </div>
    );
  }

  // Calcular estadísticas
  const totalCursos = courses.length;
  const cursosCompletados = courses.filter(c => (c.progress_percentage || 0) === 100).length;
  const totalLecciones = courses.reduce((acc, c) => acc + (c.total_lessons || 0), 0);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#012AAA] to-[#34A12C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Mis Cursos
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Continúa con tu capacitación y mejora tus habilidades de comunicación y liderazgo
              </p>
            </div>
            
            {/* Progreso general */}
            {totalCursos > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/80">Progreso general</span>
                  <span className="text-sm font-semibold text-white">{progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-white/60 mt-2">
                  {cursosCompletados} de {totalCursos} cursos completados
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Mensaje de error */}
        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium">{error}</p>
              {error.includes('iniciar sesión') && (
                <p className="text-sm text-red-600 mt-1">Redirigiendo al inicio de sesión...</p>
              )}
            </div>
          </div>
        )}

        {/* Estadísticas rápidas (solo si hay cursos) */}
        {totalCursos > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.248 6.253 2 10.623 2 16s4.248 9.747 10 9.747c5.4 0 9.847-3.743 10-8.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{totalCursos}</p>
                  <p className="text-xs text-gray-500">Cursos activos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{cursosCompletados}</p>
                  <p className="text-xs text-gray-500">Completados</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{progress}%</p>
                  <p className="text-xs text-gray-500">Progreso</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#34A12C]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{totalLecciones}</p>
                  <p className="text-xs text-gray-500">Lecciones totales</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lista de cursos */}
        {courses.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.248 6.253 2 10.623 2 16s4.248 9.747 10 9.747c5.4 0 9.847-3.743 10-8.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No tienes cursos inscritos
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              Explora nuestros cursos disponibles y comienza tu transformación en comunicación y liderazgo
            </p>
            <button
              onClick={() => navigate('/capacitaciones')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#34A12C] to-[#2a8a23] text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <span>Explorar cursos</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        ) : (
          <>
            {/* Header con filtros (placeholder para futura funcionalidad) */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Tus cursos activos</h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  Continúa donde lo dejaste
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6" />
                  </svg>
                  Filtrar
                </button>
                <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9" />
                  </svg>
                  Ordenar
                </button>
              </div>
            </div>

            {/* Grid de cursos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CursoCard key={course.id} course={course} />
              ))}
            </div>

            {/* Footer de motivación */}
            <div className="mt-12 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm">
                ¡Sigue avanzando! Cada lección te acerca más a tus metas
              </p>
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1 rounded-full transition-all ${
                      i < Math.floor(progress / 20) 
                        ? 'bg-[#34A12C] w-6' 
                        : 'bg-gray-200 w-3'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}