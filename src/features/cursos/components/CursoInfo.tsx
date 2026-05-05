type Curso = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: string;
    duracion?: string;
    instructor?: string;
    modalidad?: string;
};

interface CursoInfoProps {
    curso: Curso;
}

export function CursoInfo({ curso }: CursoInfoProps) {
    return (
        <div>
            {/* Badge */}
            <div className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 bg-opacity-10" 
                 style={{ backgroundColor: "#34A12C", color: "#34A12C" }}>
                Curso certificado
            </div>
            
            {/* Título */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#012AAA" }}>
                {curso.nombre}
            </h1>
            
            {/* Descripción completa */}
            <div className="prose prose-lg max-w-none mt-6">
                <h3 className="text-xl font-semibold mb-3" style={{ color: "#012AAA" }}>
                    Descripción del curso
                </h3>
                <p className="leading-relaxed" style={{ color: "#3F3F3F" }}>
                    {curso.descripcion}
                </p>
            </div>
            
            {/* Información adicional si existe */}
            {(curso.duracion || curso.modalidad || curso.instructor) && (
                <div className="mt-8 pt-6 border-t" style={{ borderColor: "#E5E7EB" }}>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: "#012AAA" }}>
                        Información del curso
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {curso.duracion && (
                            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                                <svg className="w-6 h-6" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-xs" style={{ color: "#6B7280" }}>Duración</p>
                                    <p className="font-semibold" style={{ color: "#3F3F3F" }}>{curso.duracion}</p>
                                </div>
                            </div>
                        )}
                        {curso.modalidad && (
                            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                                <svg className="w-6 h-6" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9" />
                                </svg>
                                <div>
                                    <p className="text-xs" style={{ color: "#6B7280" }}>Modalidad</p>
                                    <p className="font-semibold" style={{ color: "#3F3F3F" }}>{curso.modalidad}</p>
                                </div>
                            </div>
                        )}
                        {curso.instructor && (
                            <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "#F9FAFB" }}>
                                <svg className="w-6 h-6" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <div>
                                    <p className="text-xs" style={{ color: "#6B7280" }}>Instructor</p>
                                    <p className="font-semibold" style={{ color: "#3F3F3F" }}>{curso.instructor}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            {/* Lo que aprenderás */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "#E5E7EB" }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: "#012AAA" }}>
                    Lo que aprenderás
                </h3>
                <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: "#3F3F3F" }}>Contenido actualizado y relevante</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: "#3F3F3F" }}>Certificado de finalización</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: "#3F3F3F" }}>Soporte y acompañamiento personalizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#34A12C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: "#3F3F3F" }}>Acceso a material descargable</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
