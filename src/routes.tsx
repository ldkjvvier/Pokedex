import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './modules/Home';
import { NotFound } from './components/NotFound';
import { PokemonPage } from './modules/Pokemon/pages/PokemonPage';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pokedex/" element={<HomePage />} />
        <Route path="pokedex/:name" element={<PokemonPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
