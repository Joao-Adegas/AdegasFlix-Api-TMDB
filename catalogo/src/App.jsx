import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../src/Layout'; // Importa o layout
import { Perfil } from './paginas/Perfil'; // Página inicial sem cabeçalho
import { Serie } from './paginas/Serie'; // Página de séries
import { Lista } from './Components/Lista/Lista'; // Página de filmes

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página inicial (perfil) sem cabeçalho e navegação */}
        <Route path="/" element={<Perfil />} />

        {/* Todas as telas subsequentes usam o layout */}
        <Route element={<Layout />}>
          <Route path="/filmes" element={<Lista />} />
          <Route path="/serie" element={<Serie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
