import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { useHome } from '../../../../hooks/useHome';
import { HomeBanner } from '../../components/HomeBanner/HomeBanner';
import { HomeHighlights } from '../../components/HomeHighlights/HomeHighlights';
import { HomeAbout } from '../../components/HomeAbout/HomeAbout';
import './home.css';

export default function Home() {
  const { home, loading, error } = useHome();

  return (
    <div className='home-page'>
      <Header />

      <main className='home-page__main'>
        {loading && (
          <section className='home-page__status-wrapper'>
            <div className='home-page__status'>Carregando conteúdo...</div>
          </section>
        )}

        {!loading && error && (
          <section className='home-page__status-wrapper'>
            <div className='home-page__status home-page__status--error'>
              {error}
            </div>
          </section>
        )}

        {!loading && !error && home && (
          <>
            <HomeBanner content={home} />
            <HomeHighlights items={home.highlights} />
            <HomeAbout
              title={home.aboutTitle}
              description={home.aboutDescription}
            />
          </>
        )}

        {!loading && !error && !home && (
          <section className='home-page__status-wrapper'>
            <div className='home-page__status'>Nenhum conteúdo disponível.</div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}