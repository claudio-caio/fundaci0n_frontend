import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/api";

type User = {
  id: number;
  username: string;
  email: string;
  telefono: string;
};

function Perfil() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    // Obtener datos del usuario desde el backend
    fetch(`${API_BASE_URL}/users/me/`, {
      method: "GET",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los datos");
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

        {user && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Usuario
              </label>
              <p className="text-gray-600 text-lg">{user.username}</p>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <p className="text-gray-600 text-lg">{user.email}</p>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Teléfono
              </label>
              <p className="text-gray-600 text-lg">
                {user.telefono || "No registrado"}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t">
              <button
                onClick={() => navigate("/")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Volver al inicio
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Perfil;
