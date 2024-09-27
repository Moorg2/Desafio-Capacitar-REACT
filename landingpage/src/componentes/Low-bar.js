import React from 'react';
import Entrega from './imagens/In Transit.png'
import Garantia from './imagens/Guarantee.png'
import Disconto from './imagens/Discount.png'
export default function TopBar(){
    return (
    <section>
        <div class="LowBar">
        <img src ={Entrega}/><p>Entrega rápida</p>
        <img src ={Garantia}/><p>Produtos com Qualidade</p>
        <img src ={Disconto}/><p>+3% de Desconto</p>
        </div>
    </section>
    );
}
