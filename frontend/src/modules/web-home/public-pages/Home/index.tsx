import { HomeBanner } from '../../components/HomeBanner';
import { useHome } from '../../../../hooks/useHome';
import './home.css';

export default function Home() {
  const { home, loading, error } = useHome();

  if (loading) {
    return (
      <main className='home-page'>
        <div className='home-page__status'>Carregando conteúdo...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className='home-page'>
        <div className='home-page__status home-page__status--error'>{error}</div>
      </main>
    );
  }

  if (!home) {
    return (
      <main className='home-page'>
        <div className='home-page__status'>Nenhum conteúdo disponível.</div>
      </main>
    );
  }

  return (
    <main className='home-page'>
      <HomeBanner content={home} />
    </main>
  );
}