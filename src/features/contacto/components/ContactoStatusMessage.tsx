interface ContactoStatusMessageProps {
  status: "ok" | "error" | null;
  errorMessage?: string;
}

const ContactoStatusMessage = ({ status, errorMessage }: ContactoStatusMessageProps) => {
  if (status === "ok") {
    return (
      <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
          </svg>
          <span>✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!</span>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
          </svg>
          <span>❌ {errorMessage || "Error al enviar el mensaje. Intenta nuevamente."}</span>
        </div>
      </div>
    );
  }

  return null;
};

export default ContactoStatusMessage;
