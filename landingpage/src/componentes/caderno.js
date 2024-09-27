import React from "react";
import CadernoImg from './imagens/CadernoImg.png'
export default function caderno(){
    const titulo='Caderno Inteligente'
    const preço ='R$ 119,90'
    const descriçao='Caderno vibrante que faz suas ideias brilharem!'
    return (
    <section>
        <div className="Caderno">
            <div className="Conteudo">
                <img src={CadernoImg} alt="Caderno"/>
                <div className="Informaçao">
                    <p>{titulo}</p>
                    <p>{preço}</p>
                    <p>{descriçao}</p>
                </div>
                <button className="Btn">Adicionar ao carrinho</button>
            </div>
       </div>
    </section>
    );
}