// Types
export interface Testimonio {
  id: number;
  nombre: string;
  rol: string;
  contenido: string;
  video_url?: string;
  imagen: string | null;
  rating?: number;
}

export interface TestimonioResponse {
  id: number;
  nombre: string;
  rol: string;
  contenido: string;
  video_url?: string;
  imagen?: string;
  rating?: number;
}

import { API_BASE_URL } from "../../../config/api";

// Testimonios API service
export const testimoniosService = {
  // Get all testimonios
  async getTestimonios(): Promise<Testimonio[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonios/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching testimonios:', error);
      throw error;
    }
  },

  // Get testimonio by ID
  async getTestimonioById(id: number): Promise<Testimonio> {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonios/${id}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching testimonio ${id}:`, error);
      throw error;
    }
  }
};