import React from "react";
import AdesivoImg from './imagens/Adesivos.png'
export default function adesivo(){
    const titulo=' Adesivos Divertidos'
    const preço ='R$ 14,90'
    const descriçao='Adesivos que trazem sorrisos e um toque de diversão!'
    return (
    <section>
        <div className="Adesivo">
            <div className="Conteudo">
                <img src={AdesivoImg} alt="Caderno"/>
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