import React from 'react';
import './Produto.css';

const Produto = ({ nome, preco, descricao, imagem }) => {
    return (
        <div className="card">
            <img src={imagem} alt={nome} className="foto" />
            <div className="informacoes">
                <h2 className="titulo-produto">{nome}</h2>
                <p className="preco">{preco}</p>
                <p className="descricao">{descricao}</p>
            </div>
            <button className="botao">Adicionar ao carrinho</button>
        </div>
    );
};

export default Produto;
