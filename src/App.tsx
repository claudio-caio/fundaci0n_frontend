import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import PageTransition from "./components/PageTransition";
import Success from "./pages/Success";

// Lazy load pages
const Inicio = lazy(() => import("./features/home/pages/Home"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const SomosIguales = lazy(() => import("./pages/SomosIguales"));
const Perfil = lazy(() => import("./pages/Perfil"));

// Lazy load features
const Capacitaciones = lazy(() => import("./features/capacitaciones/pages/Capacitaciones"));
const Trayectoria = lazy(() => import("./features/trayectoria/pages/Trayectoria"));
const TrayectoriaHistoria = lazy(() => import("./features/trayectoria/pages/TrayectoriaHistoria"));
const Testimonios = lazy(() => import("./features/testimonios/pages/Testimonios"));
const CursoDetalle = lazy(() => import("./features/cursos/pages/CursoDetalle"));
const CursoPanel = lazy(() => import("./features/cursos/pages/CursoPanel"));
const Contactanos = lazy(() => import("./features/contacto/pages/Contactanos"));
const Login = lazy(() => import("./features/auth/pages/Login"));
const Registro = lazy(() => import("./features/auth/pages/Registro"));
const TestimonioDetail = lazy(() => import("./features/testimonios/pages/TestimonioDetail"));
const MisCursos = lazy(() => import("./features/learning/pages/MisCursos"));

// ✅ Importar el componente de detalle de lección
const LeccionDetail = lazy(() => import("./features/learning/pages/LeccionDetail"));

// Loading fallback
const LoadingFallback = () => <PageTransition />;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>

          {/* 🌐 PUBLICO */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/somos-iguales" element={<SomosIguales />} />
            <Route path="/contacto" element={<Contactanos />} />
            <Route path="/capacitaciones" element={<Capacitaciones />} />
            <Route path="/trayectoria" element={<Trayectoria />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/testimonios/:id" element={<TestimonioDetail />} />
            <Route path="/trayectoria/:id" element={<TrayectoriaHistoria />} />
            <Route path="/curso/:id" element={<CursoDetalle />} />
            <Route path="/success" element={<Success />} />
          </Route>

          {/* 🔐 AUTH */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Route>

          {/* 🔒 PRIVADO */}
          <Route element={<MainLayout />}>
            <Route
              path="/curso/:id/panel"
              element={
                <ProtectedRoute redirectTo="/registro">
                  <CursoPanel />
                </ProtectedRoute>
              }
            />
            
            {/* ✅ RUTA PARA DETALLE DE LECCIÓN */}
            <Route
              path="/curso/:id/leccion/:lessonId"
              element={
                <ProtectedRoute redirectTo="/registro">
                  <LeccionDetail />
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mis-cursos"
              element={
                <ProtectedRoute>
                  <MisCursos />
                </ProtectedRoute>
              }
            />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
