import React from 'react'
import TopBar from './componentes/Top-bar';
import Menu from './componentes/Menu'
import LowBar from './componentes/Low-bar'
import Produto from './componentes/produtos';
import './App.css';
import CanetaImg from './componentes/imagens/Caneta.png';
import AdesivoImg from './componentes/imagens/Adesivos.png';
import CadernoImg from './componentes/imagens/Cadernos.png';
import Logo from './componentes/imagens/logo.png';

export default function App() {
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
    <div className='Contato'>
    <h2 className='h2'>Contatos</h2>
    <div className='contato-item'>
        <span className='telefone'>Telefone:</span>
        <span className='numero'>(81) 99999-9999</span>
    </div>
    <div className='contato-item'>
        <span className='Email'>Email:</span>
        <span className='contato'>papelearte@hotmail.com</span>
    </div>
  </div>
  <div className='Rodape'>
    <img src={Logo} alt="Logo" className='Logo' />
    <p className='Links'>Links Rápidos</p>
    <p className='p3'>Home</p>
    <p className='p3'>Serviços</p>
    <p className='p3'>Produtos</p>
    <p className='p3'>Contato</p>
  </div>
    </section>
  );
}

