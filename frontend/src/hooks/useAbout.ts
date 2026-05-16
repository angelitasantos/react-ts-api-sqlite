import { useEffect, useState } from 'react';
import { aboutService } from '../services/aboutService';
import type { AboutContent } from '../types/about';

interface UseAboutReturn {
  about: AboutContent | null;
  loading: boolean;
  error: string | null;
}

export function useAbout(): UseAboutReturn {
  const [about, setAbout] = useState<AboutContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        setLoading(true);
        setError(null);
        const data = await aboutService.getActiveAbout();
        setAbout(data);
      } catch {
        setError('Não foi possível carregar a página About.');
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  return { about, loading, error };
}