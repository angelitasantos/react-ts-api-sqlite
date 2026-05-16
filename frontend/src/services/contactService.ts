import { contactMock } from '../mocks/contactMock';
import type { ContactContent, ContactFormData } from '../types/contact';

export const contactService = {
  async getActiveContact(): Promise<ContactContent> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(contactMock), 300);
    });
  },

  async sendContactForm(data: ContactFormData): Promise<{ message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Formulário enviado localmente:', data);
        resolve({ message: 'Mensagem enviada com sucesso.' });
      }, 500);
    });
  },
};