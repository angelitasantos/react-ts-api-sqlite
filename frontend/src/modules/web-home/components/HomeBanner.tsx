import type { HomeContent } from '../../../types/home';
import './HomeBanner.css';

interface HomeBannerProps {
  content: HomeContent;
}

export function HomeBanner({ content }: HomeBannerProps) {
  return (
    <section className='home-banner'>
      <div className='home-banner__content'>
        <span className='home-banner__subtitle'>{content.subtitle}</span>
        <h1 className='home-banner__title'>{content.title}</h1>
        <p className='home-banner__description'>{content.description}</p>

        <a className='home-banner__button' href={content.buttonLink}>
          {content.buttonText}
        </a>
      </div>

      {content.imageUrl && (
        <div className='home-banner__image-wrapper'>
          <img
            className='home-banner__image'
            src={content.imageUrl}
            alt={content.title}
          />
        </div>
      )}
    </section>
  );
}