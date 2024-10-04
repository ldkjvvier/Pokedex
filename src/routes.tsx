import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './modules/Home';
import { NotFound } from './components/NotFound';
import { PokemonPage } from './modules/Pokemon/pages/PokemonPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/:name" element={<PokemonPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
