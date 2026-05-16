import { homeMock } from '../mocks/homeMock';
import type { HomeContent } from '../types/home';

export const homeService = {
  async getActiveHome(): Promise<HomeContent> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(homeMock), 300);
    });
  },
};