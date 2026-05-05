export type CasoExitoImage = {
  id: number;
  titulo?: string;
  descripcion?: string;
  orden: number;
  imagen_url?: string | null;
};

export type CasoExito = {
  id: number;
  sector: "empresa" | "institucion" | "coaching";
  cliente: string;
  problema: string;
  capacitacion: string;
  resultado: string;
  testimonio: string;
  fecha: string;
  imagen_url?: string | null;
  galeria?: CasoExitoImage[];
};

export const sectorLabel: Record<CasoExito["sector"], string> = {
  empresa: "Empresa",
  institucion: "Institución",
  coaching: "Coaching Personalizado",
};

export const sectorColors: Record<CasoExito["sector"], { bg: string; text: string }> = {
  empresa: { bg: "bg-blue-50", text: "text-blue-700" },
  institucion: { bg: "bg-purple-50", text: "text-purple-700" },
  coaching: { bg: "bg-green-50", text: "text-green-700" },
};
