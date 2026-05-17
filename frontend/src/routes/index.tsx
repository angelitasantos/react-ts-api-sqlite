import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/web-home/public-pages/Home';
import About from '../modules/web-home/public-pages/About';
import Contact from '../modules/web-home/public-pages/Contact';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
} 