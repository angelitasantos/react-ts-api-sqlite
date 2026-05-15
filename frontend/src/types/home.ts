export interface HomeContent {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}