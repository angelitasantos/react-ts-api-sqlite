import { useEffect, useState } from 'react';
import { contactService } from '../services/contactService';
import type { ContactContent, ContactFormData } from '../types/contact';

interface UseContactReturn {
  contact: ContactContent | null;
  loading: boolean;
  error: string | null;
  submitting: boolean;
  successMessage: string | null;
  submitForm: (data: ContactFormData) => Promise<void>;
}

export function useContact(): UseContactReturn {
  const [contact, setContact] = useState<ContactContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        setLoading(true);
        setError(null);
        const data = await contactService.getActiveContact();
        setContact(data);
      } catch {
        setError('Não foi possível carregar a página Contact.');
      } finally {
        setLoading(false);
      }
    }

    fetchContact();
  }, []);

  async function submitForm(data: ContactFormData) {
    try {
      setSubmitting(true);
      setSuccessMessage(null);
      await contactService.sendContactForm(data);
      setSuccessMessage('Sua mensagem foi enviada com sucesso.');
    } catch {
      setError('Não foi possível enviar sua mensagem.');
    } finally {
      setSubmitting(false);
    }
  }

  return {
    contact,
    loading,
    error,
    submitting,
    successMessage,
    submitForm,
  };
}