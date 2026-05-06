// Types
export interface ContactFormData {
  nombre: string;
  email: string;
  numero_documento: string;
  tipo_consulta: string;
  mensaje: string;
}

export interface ContactResponse {
  ok: string;
}

import { API_BASE_URL } from "../../../config/api";

// Contact API service
export const contactoService = {
  // Send contact form
  async sendContact(formData: ContactFormData): Promise<ContactResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacto/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  }
};