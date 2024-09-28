import React from 'react'
import TopBar from './componentes/Top-bar';
import Menu from './componentes/Menu'
import Banner from './componentes/imagens/banner.png'
import LowBar from './componentes/Low-bar'
import Produto from './componentes/produtos';
import './App.css';
import CanetaImg from './componentes/imagens/Caneta.png';
import AdesivoImg from './componentes/imagens/Adesivos.png';
import CardernoImg from './componentes/imagens/Carderno.png';


export default function App() {
  const Descricao1 = 'A Papel & Arte oferece serviços completos de personalização de materiais de escritório e papelaria, atendendo a empresas e eventos que buscam destacar sua identidade visual e agregar valor aos seus produtos. Nosso processo começa com a consultoria individualizada, onde entendemos as necessidades específicas de cada cliente, desde pequenas empresas até grandes corporações, adaptando nossos produtos ao perfil de cada marca.'
  const Descricao2='Além da personalização estética, nos preocupamos com a funcionalidade dos produtos, criando designs que facilitam a organização e a produtividade, sem abrir mão do estilo. Para empresas que desejam presentear funcionários, parceiros ou clientes, disponibilizamos pacotes exclusivos com kits personalizados, que podem incluir itens como agendas, canetas e blocos, tudo em uma embalagem sofisticada e personalizada.'
  const produtos = [
    {
        id: 1,
        nome: 'Caneta Gel',
        preco: 'R$ 9,99',
        descricao: 'Caneta que desliza como manteiga e escreve como um sonho!',
        imagem: CanetaImg
    },
    {
        id: 2,
        nome: 'Adesivos Divertidos',
        preco: 'R$ 5,99',
        descricao: 'Adesivos que trazem sorrisos e um toque de diversão!',
        imagem: AdesivoImg
    },
    {
      id: 3,
      nome: 'Caderno Inteligente',
      preco: 'R$ 5,99',
      descricao: 'Adesivos que trazem sorrisos e um toque de diversão!',
      imagem: CardernoImg
  }
];

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
        <p className='p1'>{Descricao1}</p>
        <p className='p1'>{Descricao2}</p>
      </div>
      <div className="produtos">
        <h1 className="titulo">Nossos Produtos</h1>
        <div className="caixa">
            {produtos.map(produto => (
                <Produto 
                    key={produto.id} 
                    nome={produto.nome} 
                    preco={produto.preco} 
                    descricao={produto.descricao} 
                    imagem={produto.imagem} 
                />
            ))}
        </div>
    </div>
    </section>
  );
}

