import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo_fundacion.jpg";
import { NavbarContent } from "./NavbarContent";
import { MobileNavbarMenu } from "./MobileNavbarMenu";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md border-b-2 border-[#34A12C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link to="/" onClick={closeMenu} className="inline-flex items-center">
              <img src={logo} alt="Fundación" className="h-10 w-auto rounded-sm" />
            </Link>
            <span className="hidden sm:inline text-lg font-semibold text-slate-900">
              Fundación
            </span>
          </div>

          <NavbarContent isAuthenticated={isAuthenticated} onLogout={handleLogout} />

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#34A12C]"
              aria-label="Menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <MobileNavbarMenu
          isAuthenticated={isAuthenticated}
          menuOpen={menuOpen}
          onLogout={handleLogout}
          onCloseMenu={closeMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;
