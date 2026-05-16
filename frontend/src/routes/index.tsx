import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/web-home/public-pages/Home';
import About from "../modules/web-home/public-pages/About";

function ContactPlaceholder() {
  return <div style={{ padding: '2rem' }}>Página Contato em construção.</div>;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<ContactPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
} 