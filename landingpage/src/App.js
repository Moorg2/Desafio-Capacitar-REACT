import React from 'react'
import TopBar from './componentes/Top-bar';
import Menu from './componentes/Menu'
import Banner from './componentes/imagens/banner.png'
import LowBar from './componentes/Low-bar'
import './App.css';
import Adesivo from './componentes/adesivo.js';
import Caderno from './componentes/caderno.js';
import Caneta from './componentes/caneta.js';

export default function App() {
  const Descricao = 'A Papel & Arte oferece serviços completos de personalização de materiais de escritório e papelaria, atendendo a empresas e eventos que buscam destacar sua identidade visual e agregar valor aos seus produtos. Nosso processo começa com a consultoria individualizada, onde entendemos as necessidades específicas de cada cliente, desde pequenas empresas até grandes corporações, adaptando nossos produtos ao perfil de cada marca. Além da personalização estética, nos preocupamos com a funcionalidade dos produtos, criando designs que facilitam a organização e a produtividade, sem abrir mão do estilo. Para empresas que desejam presentear funcionários, parceiros ou clientes, disponibilizamos pacotes exclusivos com kits personalizados, que podem incluir itens como agendas, canetas e blocos, tudo em uma embalagem sofisticada e personalizada.'
  return (
    <section className="App">
      <div className ="home">
        <TopBar/>
        <Menu/>
        <img src = {Banner} alt="Banner"/>
        <LowBar/>
      </div>
      <div className='Serviços'>
        <h1 className='h1'>Serviços</h1>
        <p className='p1'>{Descricao}</p>
      </div>
      <div className='Produtos'>
      <Caderno/>
      <Caneta/>
      <Adesivo/>
      </div>
    </section>
  );
}

