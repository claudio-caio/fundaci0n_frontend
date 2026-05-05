import type { ContactFormData } from "../types/contacto.types";
import ContactoStatusMessage from "./ContactoStatusMessage";

interface ContactoFormularioProps {
  form: ContactFormData;
  loading: boolean;
  status: "ok" | "error" | null;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ContactoFormulario = ({
  form,
  loading,
  status,
  errorMessage,
  onChange,
  onSubmit,
}: ContactoFormularioProps) => {
  const tiposConsulta = [
    { value: "informacion", label: "📋 Información general" },
    { value: "capacitacion", label: "🎓 Capacitación" },
    { value: "consultoria", label: "💼 Consultoría" },
    { value: "testimonio", label: "💬 Compartir testimonio" },
    { value: "soporte", label: "🛠️ Soporte técnico" },
    { value: "quejas", label: "⚠️ Quejas y reclamos" },
    { value: "otros", label: "📌 Otros" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
      <h2 className="text-2xl font-bold mb-2" style={{ color: "#012AAA" }}>
        Envíanos un mensaje
      </h2>
      <p className="text-gray-600 mb-6">
        Completa el formulario y te responderemos a la brevedad.
      </p>

      <ContactoStatusMessage status={status} errorMessage={errorMessage} />

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de documento de identidad *
          </label>
          <input
            type="text"
            name="numero_documento"
            value={form.numero_documento}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
            placeholder="Ej: 12345678-9"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de consulta *
          </label>
          <select
            name="tipo_consulta"
            value={form.tipo_consulta}
            onChange={onChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all"
            required
          >
            <option value="">Selecciona tipo de consulta</option>
            {tiposConsulta.map((tipo) => (
              <option key={tipo.value} value={tipo.value}>
                {tipo.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje *
          </label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={onChange}
            rows={5}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34A12C] focus:border-transparent transition-all resize-none"
            placeholder="Cuéntanos cómo podemos ayudarte..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-linear-to-r from-[#34A12C] to-[#2a8a23] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Enviando...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Enviar mensaje</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactoFormulario;
