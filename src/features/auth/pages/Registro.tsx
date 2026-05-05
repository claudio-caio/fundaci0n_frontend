import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fondoRegistro from "../../../assets/fondo_Registro.jpeg"; // Ajusta la ruta según tu estructura
import CustomScrollbar from "../../../components/CustomScrollbar";

function Registro() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    telefono: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    fetch("/api/users/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Usuario creado:", data);
        // Si el backend devuelve un token, guardarlo y recargar
        if (data.token) {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        } else {
          navigate("/login");
        }
      })
      .catch(() => setError("Error al registrar. Intenta de nuevo."));
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${fondoRegistro})`,
      }}
    >
      {/* Capa traslúcida superpuesta para mejorar legibilidad */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.10)",
          backdropFilter: "blur(2px)",
        }}
      ></div>
      
      {/* Capa adicional con gradiente sutil */}
      <div 
        className="absolute inset-0 bg-linear-to-br from-white/30 to-white/10"
      ></div>

      {/* Contenido del registro - relativo para estar por encima de las capas */}
      <div className="relative z-10 w-full max-w-md px-4 py-10">
        <div className="bg-white shadow-2xl rounded-2xl p-8">
          {/* Logo o icono decorativo */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: "#34A12C" }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2 text-center" style={{ color: "#012AAA" }}>
            Crear cuenta
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Regístrate para acceder a todos los recursos
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 py-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" style={{ color: "#3F3F3F" }}>
                Usuario
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="username"
                  placeholder="Tu usuario"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" style={{ color: "#3F3F3F" }}>
                Correo electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" style={{ color: "#3F3F3F" }}>
                Teléfono
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="telefono"
                  placeholder="Tu teléfono"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" style={{ color: "#3F3F3F" }}>
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] mt-6"
              style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
            >
              Registrarse
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">¿Ya tienes cuenta?</span>
            </div>
          </div>

          <p className="text-center">
            <a 
              href="/login" 
              className="font-semibold transition-all hover:underline inline-flex items-center gap-1"
              style={{ color: "#34A12C" }}
            >
              Inicia sesión aquí
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </p>
        </div>
      </div>
      <CustomScrollbar/>
    </div>
  );
}

export default Registro;
