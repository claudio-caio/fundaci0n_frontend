export interface ContactFormData {
  nombre: string;
  email: string;
  numero_documento: string;
  tipo_consulta: string;
  mensaje: string;
}

export interface ContactoInfoItem {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

export interface SocialRed {
  name: string;
  url: string;
  bg: string;
  icon: string;
}
