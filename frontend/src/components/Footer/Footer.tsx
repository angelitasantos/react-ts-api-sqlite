import { Link } from 'react-router-dom';
import { Container } from '../Container';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <Container>
        <div className='site-footer__content'>
          <div className='site-footer__brand'>
            <h3 className='site-footer__title'>WebProject</h3>
            <p className='site-footer__text'>
              Estrutura moderna de frontend preparada para integração com API,
              autenticação e painel administrativo.
            </p>
          </div>

          <div className='site-footer__links'>
            <Link to='/' className='site-footer__link'>
              Home
            </Link>
            <Link to='/about' className='site-footer__link'>
              About
            </Link>
            <Link to='/contact' className='site-footer__link'>
              Contact
            </Link>
          </div>
        </div>

        <div className='site-footer__bottom'>
          <p>© {currentYear} WebProject. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}