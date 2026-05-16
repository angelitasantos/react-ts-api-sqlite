import { Container } from '../../../../components/Container';
import './HomeAbout.css';

interface HomeAboutProps {
  title: string;
  description: string;
}

export function HomeAbout({ title, description }: HomeAboutProps) {
  return (
    <section className='home-about-section'>
      <Container>
        <div className='home-about'>
          <div className='home-about__content'>
            <span className='home-about__eyebrow'>Sobre a página</span>
            <h2 className='home-about__title'>{title}</h2>
            <p className='home-about__description'>{description}</p>
          </div>

          <div className='home-about__card'>
            <h3 className='home-about__card-title'>Pronto para o próximo passo</h3>
            <p className='home-about__card-text'>
              Quando o backend estiver disponível, basta substituir o mock no
              service por uma chamada HTTP. A interface e a tipagem já estarão
              preparadas.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}