import type { HomeContent } from '../types/home';

const mockHomeContent: HomeContent = {
  id: 1,
  title: 'Bem-vindo ao nosso projeto',
  subtitle: 'Uma aplicação full stack com React, TypeScript e Node.js',
  description:
    'Esta é a página inicial do projeto. No momento os dados estão mockados no frontend, mas a estrutura já está preparada para consumir a API futuramente.',
  buttonText: 'Saiba mais',
  buttonLink: '/about',
  imageUrl:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  isActive: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const homeService = {
  async getActiveHome(): Promise<HomeContent> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockHomeContent);
      }, 300);
    });
  },
};