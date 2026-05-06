import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";
import { CursoInfo } from "../components/CursoInfo";
import { CursoInscripcion } from "../components/CursoInscripcion";

type Curso = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    duracion?: string;
    instructor?: string;
    modalidad?: string;
};

function CursoDetalle() {
    const { id } = useParams();
    const [curso, setCurso] = useState<Curso | null>(null);
    const [loading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 🔥 NUEVO: modal + compromiso
    const [showModal, setShowModal] = useState(false);
    const [accepted, setAccepted] = useState(false);

    

    const navigate = useNavigate();

    // 📥 Obtener curso
    useEffect(() => {
        fetch(`${API_BASE_URL}/cursos/${id}/`)
            .then((res) => res.json())
            .then((data) => setCurso(data))
            .catch((err) => {
                console.error("Error fetching curso:", err);
                setError("No se pudo cargar el curso");
            });
    }, [id]);

    // 💰 FUNCIÓN DE INSCRIPCIÓN
const handleBuy = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        navigate("/login");
        return;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/payments/create/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                course_id: curso?.id,
            }),
        });

        const data = await res.json();

        // 🔴 YA INSCRIPTO
        if (data.message) {
            alert(data.message);
            return;
        }

        // 🔴 ERROR
        if (data.error) {
            alert(data.error);
            return;
        }

        // 🟢 GUARDAR ESTADO (opcional)
        localStorage.setItem("mp_payment_pending", "true");

        // 🟢 ABRIR EN NUEVA VENTANA Y REDIRIGIR ORIGINAL AL INICIO
        window.open(data.init_point, "_blank");
        navigate("/");

    } catch (err) {
        console.error(err);
        alert("Error conectando con el servidor");
    }
};

    // ⏳ Loading inicial
    if (!curso) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <div
                        className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 mb-4"
                        style={{ borderColor: "#34A12C" }}
                    ></div>
                    <p style={{ color: "#3F3F3F" }}>Cargando curso...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <section className="relative bg-linear-to-br from-white to-gray-50 py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* 🔙 Volver */}
                    <button
                        onClick={() => navigate("/capacitaciones")}
                        className="inline-flex items-center gap-2 mb-6 text-sm font-semibold transition-colors hover:opacity-70"
                        style={{ color: "#34A12C" }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver a capacitaciones
                    </button>

                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* 📘 Info */}
                        <CursoInfo curso={curso} />

                        {/* 💳 Botón que abre el modal */}
                        <CursoInscripcion
                            curso={curso}
                            loading={loading}
                            error={error}
                            onInscribirse={() => setShowModal(true)} // 🔥 abre modal
                            onContacto={() => navigate("/contacto")}
                        />

                    </div>
                </div>
            </section>

            {/* 🔥 MODAL DE CONFIRMACIÓN */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">

                        <h2 className="text-xl font-bold mb-4">
                            Confirmar inscripción
                        </h2>

                        <p className="text-sm mb-4 text-gray-600">
                            Antes de continuar, debes aceptar el compromiso de completar el curso.
                        </p>

                        {/* Checkbox */}
                        <div className="flex items-start gap-2 mb-4">
                            <input
                                type="checkbox"
                                checked={accepted}
                                onChange={(e) => setAccepted(e.target.checked)}
                            />
                            <label className="text-sm">
                                Me comprometo a completar este curso y aprovechar el contenido.
                            </label>
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-sm mb-3">{error}</p>
                        )}

                        {/* Botones */}
                        <div className="flex gap-3">

                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setAccepted(false);
                                }}
                                className="flex-1 border rounded-lg py-2"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={() => {
                                    if (!accepted) {
                                        alert("Debes aceptar el compromiso");
                                        return;
                                    }
                                    setShowModal(false);
                                    handleBuy(); // 🔥 DISPARA PAGO
                                }}
                                className="flex-1 text-white rounded-lg py-2"
                                style={{ backgroundColor: "#34A12C" }}
                            >
                                Continuar al pago
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CursoDetalle;

{/* 
    const handleBuy = async () => {
        const res = await fetch("http://localhost:8000/api/payments/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                course_id: 1,
            }),
        });
        
        const data = await res.json();
        
        window.location.href = data.init_point;
    };
*/}