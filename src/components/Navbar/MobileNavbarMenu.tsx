import { Link } from "react-router-dom";

interface MobileNavbarMenuProps {
  menuOpen: boolean;
  isAuthenticated: boolean;
  onLogout: () => void;
  onCloseMenu: () => void;
}

export function MobileNavbarMenu({
  menuOpen,
  isAuthenticated,
  onLogout,
  onCloseMenu,
}: MobileNavbarMenuProps) {
  if (!menuOpen) {
    return null;
  }

  return (
    <div className="md:hidden border-t border-[#E5E7EB]">
      <div className="py-3 space-y-2">
        <Link
          to="/"
          className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
          onClick={onCloseMenu}
        >
          Inicio
        </Link>
        <Link
          to="/nosotros"
          className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
          onClick={onCloseMenu}
        >
          Nosotros
        </Link>
        <Link
          to="/trayectoria"
          className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
          onClick={onCloseMenu}
        >
          Trayectoria
        </Link>
        <Link
        to="/testimonios"
         className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
          onClick={onCloseMenu}
        >
          Testimonio
        </Link>
        <Link
          to="/somos-iguales"
          className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
          onClick={onCloseMenu}
        >
          Somos iguales
        </Link>
        <Link
          to="/contacto"
          className="block px-3 py-2 text-sm font-medium text-slate-700 rounded-md hover:bg-slate-100"
          onClick={onCloseMenu}
        >
          Contacto
        </Link>
        <div className="border-t border-[#E5E7EB]" />
        {isAuthenticated ? (
          <>
            <Link
              to="/mis-cursos"
              className="block px-3 py-2 text-sm font-medium text-[#34A12C] rounded-md hover:bg-slate-100"
              onClick={onCloseMenu}
            >
              Mis Cursos
            </Link>
            <Link
              to="/perfil"
              className="block px-3 py-2 text-sm font-medium text-white rounded-md bg-[#34A12C] hover:bg-[#289023]"
              onClick={onCloseMenu}
            >
              Mi Perfil
            </Link>
            <button
              onClick={() => {
                onLogout();
                onCloseMenu();
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-white rounded-md bg-slate-700 hover:bg-slate-800"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="block px-3 py-2 text-sm font-medium text-[#012AAA] rounded-md hover:bg-slate-100"
              onClick={onCloseMenu}
            >
              Iniciar sesión
            </Link>
            <Link
              to="/registro"
              className="block px-3 py-2 text-sm font-medium text-white rounded-md bg-[#34A12C] hover:bg-[#289023]"
              onClick={onCloseMenu}
            >
              Registrarse
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
