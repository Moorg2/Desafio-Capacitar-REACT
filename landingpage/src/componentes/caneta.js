import React from "react";
import CanetaImg from './imagens/Caneta.png'
export default function caneta(){
    const titulo='Caneta Gel'
    const preço ='R$ 9,90'
    const descriçao='Caneta que desliza como manteiga e escreve como um sonho!'
    return (
    <section>
        <div className="Caneta">
            <div className="Conteudo">
                <img src={CanetaImg} alt="Caderno"/>
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