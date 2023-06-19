import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import AppContext from "./components/AppContext";
import Leiaute from './pages/leiaute';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';

import ListagemLoja from './pages/lojas/Listagem';
import CadastroLoja from './pages/lojas/Cadastro';
import AlteracaoLoja from './pages/lojas/Alteracao';
import ExclusaoLoja from './pages/lojas/Exclusao';

import ListagemPromotor from './pages/promotores/Listagem';
import CadastroPromotor from './pages/promotores/Cadastro';
import AlteracaoPromotor from './pages/promotores/Alteracao';
import ExclusaoPromotor from './pages/promotores/Exclusao';

import CadastroExecucao from './pages/execucoes/Cadastro';


const App = () => {
  const [tema, setTema] = useState("light");

  return (
    <div data-bs-theme={tema}>
      <AppContext.Provider value={{ tema, setTema }}>
        <Router>
          <Routes>
            <Route path="/" element={<Leiaute />}>
              <Route index element={<Home />} />
              <Route path="sobre" element={<Sobre />} />

              <Route path="lojas">
                <Route index element={<ListagemLoja />} />
                <Route path="cadastrar" element={<CadastroLoja />} />
                <Route path="alterar/:id" element={<AlteracaoLoja />} />
                <Route path="excluir/:id" element={<ExclusaoLoja />} />
              </Route>

              <Route path="promotores">
                <Route index element={<ListagemPromotor />} />
                <Route path="cadastrar" element={<CadastroPromotor />} />
                <Route path="alterar/:id" element={<AlteracaoPromotor />} />
                <Route path="excluir/:id" element={<ExclusaoPromotor />} />
              </Route>
              
              <Route path="execucoes/cadastrar" element={<CadastroExecucao />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  )
}

export default App;