import React from 'react';
import Logo from './imagens/logo.png'
import Bolsa from './imagens/Shopping Bag.png'
export default function TopBar(){
    return (
    <section>
        <img src ={Logo}/>
        <div class="menu">
        <p>Home</p><p>Serviços</p><p>Produtos</p><p>Contato</p><img src ={Bolsa}/>
        </div>
    </section>
    );
}
