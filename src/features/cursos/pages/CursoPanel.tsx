import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learningService } from "../../learning/services/learningService";

type Lesson = {
  id: number;
  title: string;
  video_url?: string;
  content?: string;
  order: number;
  completed?: boolean;
};

type Modulo = {
  id: number;
  title: string;
  description?: string;
  order: number;
  lessons: Lesson[];
};

function CursoPanel() {
  const { id } = useParams();
  const [courseName, setCourseName] = useState<string>("");
  const [courseDescription, setCourseDescription] = useState<string>("");
  const [modulos, setModulos] = useState<Modulo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedModulo, setExpandedModulo] = useState<number | null>(null);
  const navigate = useNavigate();

  const totalLessons = modulos.reduce((count, modulo) => count + modulo.lessons.length, 0);
  const completedLessons = modulos.reduce(
    (count, modulo) => count + modulo.lessons.filter((lesson) => lesson.completed).length,
    0
  );
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  useEffect(() => {
    if (!id) return;

    const fetchCourseContent = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await learningService.getCourseContent(Number(id));
        setCourseName(data.course);
        setCourseDescription(data.description || "");
        setModulos(data.modules);
        // Expandir el primer módulo por defecto
        if (data.modules.length > 0) {
          setExpandedModulo(data.modules[0].id);
        }
      } catch (err) {
        console.error("Error cargando módulos:", err);
        if (err instanceof Error) {
          setError(err.message);
          if (err.message === "No token found" || err.message === "Unauthorized") {
            navigate("/login");
          }
        } else {
          setError("Error al cargar los módulos del curso");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCourseContent();
  }, [id, navigate]);

  const toggleModulo = (moduloId: number) => {
    setExpandedModulo(expandedModulo === moduloId ? null : moduloId);
  };

// En CursoPanel.tsx, modifica handleLessonClick:
const handleLessonClick = (lessonId: number, lessonTitle: string) => {
  navigate(`/curso/${id}/leccion/${lessonId}`, {
    state: { lessonTitle, courseName }
  });
};

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" style={{ color: "#34A12C" }}></div>
          <p className="mt-4 text-gray-500">Cargando contenido del curso...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Error al cargar el curso</h3>
          <p className="text-gray-500 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 rounded-lg text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: "#34A12C" }}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero del curso */}
      <div className="bg-linear-to-r from-[#012AAA] to-[#34A12C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/mis-cursos")}
              className="text-white/80 hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver a mis cursos
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {courseName || "Curso"}
          </h1>
          {courseDescription && (
            <p className="text-lg text-white/90 max-w-3xl">
              {courseDescription}
            </p>
          )}
          
          {/* Estadísticas rápidas */}
          <div className="flex flex-wrap gap-6 mt-8 pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span className="text-white/90">{modulos.length} {modulos.length === 1 ? 'Módulo' : 'Módulos'}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <span className="text-white/90">{totalLessons} Lecciones</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-white/90">{completedLessons} completadas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del curso */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {modulos.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No hay módulos disponibles</h3>
            <p className="text-gray-500">Este curso aún no tiene contenido. Vuelve más tarde.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {modulos.map((modulo, index) => (
              <div
                key={modulo.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Cabecera del módulo - clickeable */}
                <button
                  onClick={() => toggleModulo(modulo.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#34A12C]/10 text-[#34A12C] font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {modulo.title}
                      </h3>
                      {modulo.description && (
                        <p className="text-sm text-gray-500 mt-0.5">{modulo.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">
                      {modulo.lessons.length} {modulo.lessons.length === 1 ? 'lección' : 'lecciones'}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedModulo === modulo.id ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Lecciones del módulo - expandible */}
                {expandedModulo === modulo.id && (
                  <div className="border-t border-gray-100 bg-gray-50">
                    <div className="divide-y divide-gray-100">
                      {modulo.lessons.map((lesson, lessonIndex) => (
                        <button
                          key={lesson.id}
                          onClick={() => handleLessonClick(lesson.id, lesson.title)}
                          className="w-full flex items-center gap-4 p-4 hover:bg-gray-100 transition-colors duration-200 text-left group"
                        >
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 text-gray-500 text-xs font-medium group-hover:bg-[#34A12C] group-hover:text-white transition-colors">
                            {lessonIndex + 1}
                          </div>
                          <div className="flex-1">
                            <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                              {lesson.title}
                            </span>
                            {lesson.content && (
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                {lesson.content.substring(0, 100)}...
                              </p>
                            )}
                            {lesson.completed ? (
                              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#34A12C] mt-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                                Completada
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 mt-1">
                                Pendiente
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.video_url && (
                              <span className="text-xs text-[#34A12C] flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M10 15l5-3-5-3v6zm1-13C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                                Video
                              </span>
                            )}
                            <svg className="w-4 h-4 text-gray-300 group-hover:text-[#34A12C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Barra de progreso */}
        {modulos.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Progreso del curso</span>
              <span className="text-sm text-gray-500">{progressPercentage}% completado</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#34A12C] h-2 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Completa las lecciones para avanzar en tu progreso
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CursoPanel;