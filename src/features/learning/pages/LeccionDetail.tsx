import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { learningService } from "../services/learningService";
import type { LessonDetailResponse } from "../types/learning";

function LeccionDetail() {
  const { id, lessonId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [lesson, setLesson] = useState<LessonDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const courseName = location.state?.courseName || "";

  useEffect(() => {
    const fetchLessonDetail = async () => {
      if (!id || !lessonId) return;
      
      try {
        setLoading(true);
        setError(null);
        const data = await learningService.getLessonDetail(Number(id), Number(lessonId));
        setLesson(data);
      } catch (err) {
        console.error("Error cargando lección:", err);
        if (err instanceof Error) {
          if (err.message === "Unauthorized") {
            navigate("/login");
          } else {
            setError(err.message);
          }
        } else {
          setError("No se pudo cargar el contenido de la lección");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLessonDetail();
  }, [id, lessonId, navigate]);

  // Función para convertir URL de YouTube a embed
  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("/embed/")) {
      return url;
    }
    return url;
  };

  const handleMarkAsCompleted = async () => {
    if (!id || !lessonId || !lesson) return;

    try {
      setMarking(true);
      const updated = await learningService.markLessonCompleted(Number(id), Number(lessonId));
      setLesson({ ...lesson, completed: updated.completed });
    } catch (err) {
      console.error('Error marcando lección como completada:', err);
      if (err instanceof Error) {
        if (err.message === 'Unauthorized') {
          navigate('/login');
          return;
        }
        setError(err.message);
      } else {
        setError('No se pudo marcar la lección como completada');
      }
    } finally {
      setMarking(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" style={{ color: "#34A12C" }}></div>
          <p className="mt-4 text-gray-500">Cargando lección...</p>
        </div>
      </div>
    );
  }

  if (error || !lesson) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Lección no encontrada</h3>
          <p className="text-gray-500 mb-6">{error || "No se pudo cargar el contenido de la lección"}</p>
          <button
            onClick={() => navigate(`/curso/${id}/panel`)}
            className="px-6 py-2 rounded-lg text-white transition-all hover:shadow-lg"
            style={{ backgroundColor: "#34A12C" }}
          >
            Volver al curso
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del curso */}
      <div className="bg-linear-to-r from-[#012AAA] to-[#34A12C] text-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/curso/${id}/panel`)}
              className="text-white/80 hover:text-white transition-colors flex items-center gap-1 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al curso
            </button>
            <div className="h-4 w-px bg-white/30"></div>
            <span className="text-sm text-white/80">{courseName || lesson.course_title}</span>
          </div>
        </div>
      </div>

      {/* Contenido de la lección */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Título de la lección */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-[#34A12C] font-medium">
              Módulo {lesson.module_title}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {lesson.title}
          </h1>
          <p className="text-gray-500">Lección {lesson.order}</p>
        </div>

        {/* Video de YouTube */}
        {lesson.video_url && (
          <div className="mb-8">
            <div className="bg-black rounded-xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src={getEmbedUrl(lesson.video_url)}
                className="w-full h-full"
                allowFullScreen
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        )}

        {/* Contenido en texto */}
        {lesson.content && (
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-[#34A12C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              Contenido de la lección
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
              {lesson.content}
            </div>
          </div>
        )}

        {/* Navegación entre lecciones */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => navigate(`/curso/${id}/panel`)}
            className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#34A12C] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Ver todas las lecciones
          </button>
          
          <button
            onClick={handleMarkAsCompleted}
            disabled={lesson.completed || marking}
            className={`px-6 py-2 rounded-lg text-white transition-all hover:shadow-lg ${lesson.completed ? 'bg-gray-400 hover:bg-gray-400 cursor-not-allowed' : 'bg-[#34A12C] hover:shadow-lg'}`}
            style={{ backgroundColor: lesson.completed ? '#94a3b8' : '#34A12C' }}
          >
            <span>
              {lesson.completed ? 'Lección completada' : marking ? 'Guardando...' : 'Marcar como completada'}
            </span>
            {!lesson.completed && (
              <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>

        {/* Navegación anterior/siguiente lección - TODO: Implementar cuando el backend proporcione estos datos */}
         {(lesson.prev_lesson || lesson.next_lesson) && (
          <div className="flex justify-between gap-4 mt-8 pt-4 border-t border-gray-200">
            {lesson.prev_lesson ? (
              <button
                onClick={() => navigate(`/curso/${id}/leccion/${lesson.prev_lesson?.id}`, {
                  state: { lessonTitle: lesson.prev_lesson?.title, courseName }
                })}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#34A12C] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Anterior: {lesson.prev_lesson.title}
              </button>
            ) : <div />}
            
            {lesson.next_lesson ? (
              <button
                onClick={() => navigate(`/curso/${id}/leccion/${lesson.next_lesson?.id}`, {
                  state: { lessonTitle: lesson.next_lesson?.title, courseName }
                })}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-[#34A12C] transition-colors"
              >
                Siguiente: {lesson.next_lesson.title}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : <div />}
          </div>
        )} 
      </div>
    </div>
  );
}

export default LeccionDetail;