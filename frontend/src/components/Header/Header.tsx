import { Link, NavLink } from 'react-router-dom';
import { Container } from '../Container';
import './Header.css';

export function Header() {
  return (
    <header className='site-header'>
      <Container>
        <div className='site-header__content'>
          <Link to='/' className='site-header__logo'>
            WebProject
          </Link>

          <nav className='site-header__nav' aria-label='Navegação principal'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'site-header__link site-header__link--active'
                  : 'site-header__link'
              }
            >
              Home
            </NavLink>

            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? 'site-header__link site-header__link--active'
                  : 'site-header__link'
              }
            >
              About
            </NavLink>

            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? 'site-header__link site-header__link--active'
                  : 'site-header__link'
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}