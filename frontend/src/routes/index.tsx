import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/web-home/public-pages/Home';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}