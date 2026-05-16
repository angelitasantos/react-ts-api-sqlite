import { aboutMock } from '../mocks/aboutMock';
import type { AboutContent } from '../types/about';

export const aboutService = {
  async getActiveAbout(): Promise<AboutContent> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(aboutMock), 300);
    });
  },
};