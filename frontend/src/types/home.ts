export interface HomeHighlightItem {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface HomeContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  imageUrl?: string;
  aboutTitle: string;
  aboutDescription: string;
  highlights: HomeHighlightItem[];
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}