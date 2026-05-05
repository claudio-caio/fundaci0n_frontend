import { useState } from "react";
import type { ContactFormData } from "../types/contacto.types";
import { contactoService } from "../services/contactoService";

const initialFormData: ContactFormData = {
  nombre: "",
  email: "",
  numero_documento: "",
  tipo_consulta: "",
  mensaje: "",
};

export const useContactoForm = () => {
  const [form, setForm] = useState<ContactFormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "error">(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    if (status) setStatus(null);
  };

  const resetForm = () => {
    setForm(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage("");

    if (!form.nombre.trim() || !form.email.trim() || !form.mensaje.trim()) {
      setStatus("error");
      setErrorMessage("Por favor, completa todos los campos obligatorios.");
      setLoading(false);
      return;
    }

    try {
      await contactoService.sendContact(form);
      setStatus("ok");
      resetForm();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar el mensaje. Intenta nuevamente.");
    }

    setLoading(false);
  };

  return {
    form,
    loading,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    resetForm,
  };
};