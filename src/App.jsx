import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import "./Main.css";

import AppContext from "./components/AppContext";
import Leiaute from './pages/Leiaute';
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

import ListagemPerfil from './pages/perfil/Listagem';
import CadastroPerfil from './pages/perfil/Cadastro';
import AlteracaoPerfil from './pages/perfil/Alteracao';
import ExclusaoPerfil from './pages/perfil/Exclusao';

import ListagemFornecedor from './pages/fornecedores/Listagem';
import CadastroFornecedor from './pages/fornecedores/Cadastro';
import AlteracaoFornecedor from './pages/fornecedores/Alteracao';
import ExclusaoFornecedor from './pages/fornecedores/Exclusao';

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

              <Route path="fornecedores">
                <Route index element={<ListagemFornecedor />} />
                <Route path="cadastrar" element={<CadastroFornecedor/>} />
                <Route path="alterar/:id" element={<AlteracaoFornecedor />} />
                <Route path="excluir/:id" element={<ExclusaoFornecedor />} />
              </Route>

              <Route path="perfils">
                <Route index element={<ListagemPerfil />} />
                <Route path="cadastrar" element={<CadastroPerfil/>} />
                <Route path="alterar/:id" element={<AlteracaoPerfil />} />
                <Route path="excluir/:id" element={<ExclusaoPerfil />} />
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