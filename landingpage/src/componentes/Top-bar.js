import React from "react";
import Map from './imagens/Map Pin.png'
import Redes from './imagens/redes.png'
export default function TopBar(){
    const endereco ='Rua das Cores, 123 - Bairro Criativo - Cidade da Inspiração, SP'
    return (
    <section>
        <><img src={Map} /><p>{endereco}</p><img src={Redes} /></>
    </section>
    );
}