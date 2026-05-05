// API base URL
const API_BASE_URL = '/api';

// Types
export interface CasoExito {
  id: number;
  sector: "empresa" | "institucion" | "coaching";
  cliente: string;
  problema: string;
  solucion: string;
  resultados: string;
  imagen: string;
  capacitacion: string;
  resultado: string;
  testimonio: string;
  fecha: string;
  imagen_url?: string | null;
}

export interface CasoExitoResponse {
  id: number;
  sector: string;
  cliente: string;
  problema: string;
  solucion: string;
  resultados: string;
  imagen: string;
}

// Trayectoria API service
export const trayectoriaService = {
  // Get all casos de éxito
  async getCasos(): Promise<CasoExito[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/trayectoria/casos/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching casos de trayectoria:', error);
      throw error;
    }
  },

  // Get caso by ID
  async getCasoById(id: number): Promise<CasoExito> {
    try {
      const response = await fetch(`${API_BASE_URL}/trayectoria/casos/${id}/`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching caso ${id}:`, error);
      throw error;
    }
  },

  // Get casos by sector
  async getCasosBySector(sector: string): Promise<CasoExito[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/trayectoria/casos/?sector=${sector}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching casos por sector ${sector}:`, error);
      throw error;
    }
  }
};