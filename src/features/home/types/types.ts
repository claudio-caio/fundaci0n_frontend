// Tipos compartidos
export interface ServiceBlockProps {
  image: string;
  title: string;
  description: string;
  items: string[];
  badgeText: string;
  badgeColor?: string;
  iconColor?: string;
  imagePosition?: 'left' | 'right';
  delay?: number;
}

export interface CommunityBlockProps {
  image: string;
  delay?: number;
}

export interface SpecializationBlockProps {
  image: string;
  delay?: number;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}
