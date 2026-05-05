import { Link } from "react-router-dom";

interface NavbarContentProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

export function NavbarContent({ isAuthenticated, onLogout }: NavbarContentProps) {
  return (
    <div className="hidden md:flex md:items-center md:flex-1">
      <div className="flex items-center gap-6 mx-auto">
        <Link
          to="/"
          className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
        >
          Inicio
        </Link>
        <Link
          to="/nosotros"
          className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
        >
          Nosotros
        </Link>
        <Link
          to="/trayectoria"
          className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
        >
          Trayectoria
        </Link>
        <Link 
          to="/testimonios"
          className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
          >
            Testimonios
        </Link>
        <Link
          to="/somos-iguales"
          className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
        >
          Somos iguales
        </Link>
        <Link
          to="/contacto"
          className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900"
        >
          Contacto
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <Link
              to="/mis-cursos"
              className="px-4 py-2 text-sm font-medium rounded-full text-[#34A12C] border border-[#34A12C] transition hover:bg-[#34A12C] hover:text-white"
            >
              Mis Cursos
            </Link>
            <Link
              to="/perfil"
              className="px-4 py-2 text-sm font-medium rounded-full bg-[#34A12C] text-white shadow-sm transition hover:bg-[#289023]"
            >
              Mi Perfil
            </Link>
            <button
              onClick={onLogout}
              className="px-4 py-2 text-sm font-medium rounded-full bg-slate-700 text-white transition hover:bg-slate-800"
            >
              Cerrar Sesion
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium rounded-full text-[#012AAA] border border-[#012AAA] transition hover:bg-[#012AAA] hover:text-white"
            >
              Iniciar sesi�n
            </Link>
            <Link
              to="/registro"
              className="px-4 py-2 text-sm font-medium rounded-full bg-[#34A12C] text-white shadow-sm transition hover:bg-[#289023]"
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

