import type { EnrolledCoursesResponse, CourseContentResponse, LessonDetailResponse } from '../types/learning';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const learningService = {
  /**
   * Obtiene los cursos inscritos del usuario autenticado
   */
  async getEnrolledCourses(): Promise<EnrolledCoursesResponse> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(
      `${API_BASE_URL}/learning/enrolled-courses/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      throw new Error('Failed to fetch enrolled courses');
    }

    const data = await response.json();

    return {
      enrolled_courses: data.enrolled_courses ?? data ?? [],
      count: data.count ?? (Array.isArray(data) ? data.length : 0),
    };
  },

  /**
   * Obtiene el contenido (módulos y lecciones) de un curso específico
   */
  async getCourseContent(courseId: number): Promise<CourseContentResponse> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(
      `${API_BASE_URL}/learning/course/${courseId}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Not enrolled in this course');
      }
      if (response.status === 404) {
        throw new Error('Course not found');
      }
      throw new Error('Failed to fetch course content');
    }

    return response.json();
  },

  async markLessonCompleted(courseId: number, lessonId: number): Promise<{ completed: boolean; total_lessons: number; completed_lessons: number; progress_percentage: number; }> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(
      `${API_BASE_URL}/learning/course/${courseId}/lesson/${lessonId}/complete/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      if (response.status === 403) {
        throw new Error('Not enrolled in this course');
      }
      if (response.status === 404) {
        throw new Error('Lesson not found');
      }
      throw new Error('Failed to mark lesson as completed');
    }

    return response.json();
  },

  /**
   * ✅ NUEVO: Obtiene el detalle de una lección específica
   */
  async getLessonDetail(courseId: number, lessonId: number): Promise<LessonDetailResponse> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(
      `${API_BASE_URL}/learning/course/${courseId}/lesson/${lessonId}/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      if (response.status === 403) {
        throw new Error('Not enrolled in this course');
      }
      if (response.status === 404) {
        throw new Error('Lesson not found');
      }
      throw new Error('Failed to fetch lesson detail');
    }

    return response.json();
  },
};