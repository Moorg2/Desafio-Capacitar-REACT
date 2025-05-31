import React from 'react'
import TopBar from './componentes/Top-bar';
import Menu from './componentes/Menu'
import LowBar from './componentes/Low-bar'
import Produto from './componentes/Produtos';
import Servicos from './componentes/servicos';  
import Contato from './componentes/contato';
import Rodape from './componentes/Rodape';
import CaixaStats from './componentes/caixaStats';

export default function App() {
  return (
    <main className="app">
      <header className="header">
        <TopBar />
        <Menu />
        <img src={Banner} alt="Banner" className="banner" />
        <LowBar />
      </header> 
      <Servicos/> 
      <Produto/>
      <CaixaStats />
      <Contato/>
      <Rodape logo={Logo} />
    </main>
  );
};