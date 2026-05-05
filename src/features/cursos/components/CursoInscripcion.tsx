type Curso = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    duracion?: string;
    instructor?: string;
    modalidad?: string;
};

interface CursoInscripcionProps {
    curso: Curso;
    loading: boolean;
    error: string | null;
    onInscribirse: () => void;
    onContacto: () => void;
}

export function CursoInscripcion({ 
    curso, 
    loading, 
    error, 
    onInscribirse, 
    onContacto 
}: CursoInscripcionProps) {
    return (
        <div>
            <div className="sticky top-6">
                {/* Tarjeta de precio */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border" style={{ borderColor: "#E5E7EB" }}>
                    {/* Banner superior */}
                    <div className="p-6 text-center" style={{ backgroundColor: "#012AAA" }}>
                        <p className="text-white text-sm font-semibold">Inversión</p>
                        <p className="text-4xl md:text-5xl font-bold text-white mt-2">
                            ${curso.precio}
                        </p>
                    </div>
                    
                    {/* Contenido de la tarjeta */}
                    <div className="p-6">
                        {/* Beneficios incluidos */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm" style={{ color: "#3F3F3F" }}>Certificado digital incluido</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm" style={{ color: "#3F3F3F" }}>Acceso por 6 meses</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm" style={{ color: "#3F3F3F" }}>Soporte 24/7</span>
                            </div>
                        </div>
                        
                        {/* Error */}
                        {error && (
                            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}
                        
                        {/* Botón de inscripción */}
                        <button
                            onClick={onInscribirse}
                            disabled={loading}
                            className="w-full py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{ backgroundColor: "#34A12C", color: "#FFFFFF" }}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Procesando...
                                </span>
                            ) : (
                                "Inscribirme ahora"
                            )}
                        </button>
                        
                        {/* Texto de garantía */}
                        <p className="text-center text-xs mt-4" style={{ color: "#6B7280" }}>
                            🔒 Inscripción segura • Cancelación hasta 7 días antes del inicio
                        </p>
                    </div>
                </div>
                
                {/* Tarjeta de contacto */}
                <div className="mt-6 bg-white rounded-xl shadow-md p-6 text-center" style={{ border: `1px solid #E5E7EB` }}>
                    <p className="text-sm font-semibold mb-2" style={{ color: "#012AAA" }}>
                        ¿Tienes dudas sobre este curso?
                    </p>
                    <button
                        onClick={onContacto}
                        className="text-sm font-semibold transition-colors hover:opacity-70"
                        style={{ color: "#34A12C" }}
                    >
                        Contacta a un asesor →
                    </button>
                </div>
            </div>
        </div>
    );
}
