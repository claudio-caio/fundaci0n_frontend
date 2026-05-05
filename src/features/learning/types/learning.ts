// types/learning.ts

export interface Lesson {
  id: number;
  title: string;
  video_url?: string;
  content?: string;
  order: number;
  completed?: boolean;
}

export interface Modulo {
  id: number;
  title: string;
  description?: string;
  order: number;
  lessons: Lesson[];
}

export interface CourseContentResponse {
  course: string;
  description?: string;
  modules: Modulo[];
  total_lessons?: number;
  completed_lessons?: number;
  progress_percentage?: number;
}

export interface EnrolledCoursesResponse {
  enrolled_courses: Array<{
    id: number;
    nombre: string;
    descripcion?: string;
    precio: string;
    activo: boolean;
    total_lessons: number;
    completed_lessons: number;
    progress_percentage: number;
    enrolled_date?: string;
  }>;
  count: number;
}

// ✅ Tipo para curso inscrito individual
export interface EnrolledCourse {
  id: number;
  nombre: string;
  descripcion?: string;
  precio: string;
  activo: boolean;
  total_lessons: number;
  completed_lessons: number;
  progress_percentage: number;
  enrolled_date?: string;
}

// ✅ NUEVO TIPO - Respuesta del detalle de una lección
export interface LessonDetailResponse {
  id: number;
  title: string;
  content?: string;
  video_url?: string;
  order: number;
  completed: boolean;
  module_title: string;
  course_title: string;
  prev_lesson?: {
    id: number;
    title: string;
  };
  next_lesson?: {
    id: number;
    title: string;
  };
}