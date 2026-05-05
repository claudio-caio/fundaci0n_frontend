# 📚 Learning Module Integration

Esta es la integración de la app **Learning** del backend Django con el frontend React/TypeScript.

## Estructura de Carpetas

```
src/features/learning/
├── pages/
│   └── MisCursos.tsx              # Página principal (lista de cursos inscritos)
├── components/
│   └── CursoCard.tsx              # Componente para mostrar un curso
├── services/
│   └── learningService.ts         # Servicio de API para consumir endpoints
├── types/
│   └── learning.ts                # Tipos TypeScript
└── README.md                       # Este archivo
```

## Endpoints de API Consumidos

### 1. Obtener Cursos Inscritos del Usuario
- **Endpoint**: `GET /api/learning/enrolled-courses/`
- **Autenticación**: Token requerida
- **Respuesta**:
  ```json
  {
    "enrolled_courses": [
      {
        "id": 1,
        "nombre": "Python Avanzado",
        "descripcion": "Aprende programación avanzada con Python",
        "precio": "99.99",
        "activo": true,
        "total_lessons": 24,
        "completed_lessons": 6,
        "progress_percentage": 25.0,
        "enrolled_date": "2024-05-04T10:30:00Z"
      }
    ],
    "count": 1
  }
  ```

### 2. Obtener Contenido de un Curso
- **Endpoint**: `GET /api/learning/course/{course_id}/`
- **Autenticación**: Token requerida
- **Validación**: Usuario debe estar inscrito en el curso
- **Respuesta**:
  ```json
  {
    "course": "Python Avanzado",
    "modules": [
      {
        "id": 1,
        "title": "Módulo 1: Introducción",
        "order": 1,
        "lessons": [
          {
            "id": 1,
            "title": "Lección 1: Conceptos básicos",
            "video_url": "https://...",
            "content": "Contenido de texto...",
            "order": 1
          }
        ]
      }
    ]
  }
  ```

## Componentes

### MisCursos (Página)
Página protegida que muestra los cursos inscritos del usuario.

**Características**:
- Cargar automáticamente los cursos al montar el componente
- Mostrar estado de carga
- Mostrar mensajes de error
- Redirigir a login si no está autenticado
- Mostrar mensaje si no hay cursos inscritos

### CursoCard (Componente)
Tarjeta individual de un curso que muestra:
- Nombre del curso
- Descripción
- Total de lecciones
- Lecciones completadas
- Barra de progreso
- Botón para continuar el curso

## Servicios

### learningService
Servicio que contiene funciones para consumir los endpoints de la API.

**Funciones**:

#### `getEnrolledCourses(): Promise<EnrolledCoursesResponse>`
Obtiene los cursos inscritos del usuario autenticado.

```typescript
import { learningService } from '../services/learningService';

try {
  const data = await learningService.getEnrolledCourses();
  console.log(data.enrolled_courses);
} catch (error) {
  console.error(error.message);
}
```

#### `getCourseContent(courseId: number): Promise<CourseContentResponse>`
Obtiene el contenido (módulos y lecciones) de un curso específico.

```typescript
try {
  const data = await learningService.getCourseContent(1);
  console.log(data.modules);
} catch (error) {
  console.error(error.message);
}
```

## Rutas

- **`/mis-cursos`** - Página de mis cursos (protegida)

## Integración en el Navbar

El enlace "Mis Cursos" aparece en el navbar solo cuando el usuario está autenticado:

- **Desktop**: Botón con borde verde (#34A12C)
- **Mobile**: Enlace verde en el menú hamburguesa

## Tipos TypeScript

Todos los tipos están definidos en `types/learning.ts`:

```typescript
// Curso inscrito
export interface EnrolledCourse {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  activo: boolean;
  total_lessons: number;
  completed_lessons: number;
  progress_percentage: number;
  enrolled_date: string;
}

// Respuesta de cursos inscritos
export interface EnrolledCoursesResponse {
  enrolled_courses: EnrolledCourse[];
  count: number;
}

// Lección
export interface Lesson {
  id: number;
  title: string;
  video_url?: string;
  content?: string;
  order: number;
}

// Módulo
export interface Module {
  id: number;
  title: string;
  order: number;
  lessons: Lesson[];
}

// Respuesta de contenido del curso
export interface CourseContentResponse {
  course: string;
  modules: Module[];
}
```

## Flujo de Uso

1. Usuario inicia sesión en `/login`
2. Token se guarda en localStorage
3. Usuario puede ver "Mis Cursos" en el navbar
4. Al hacer clic, se navega a `/mis-cursos`
5. Se cargan los cursos inscritos desde la API
6. Se muestran las tarjetas con información y progreso
7. Usuario puede hacer clic en "Continuar Curso" para ir a `/curso/{id}/panel`

## Próximos Pasos (Mejoras Futuras)

- [ ] Agregar filtros (activos, completados, en progreso)
- [ ] Buscar cursos por nombre
- [ ] Ordenar por progreso, fecha de inscripción, etc.
- [ ] Mostrar certificados descargables
- [ ] Integrar progreso de lecciones individuales
- [ ] Agregar sistema de notificaciones
- [ ] Agregar recomendaciones de cursos
