import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './modules/Home';
import { NotFound } from './components/NotFound';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/pokemon/:id" element={<PokemonPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
