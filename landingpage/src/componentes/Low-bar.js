import React from 'react';
import Entrega from './imagens/In Transit.png';
import Garantia from './imagens/Guarantee.png';
import Disconto from './imagens/Discount.png';
import styles from './LowBar.module.css'; // Importe o CSS

export default function LowBar() {
    return (
        <section>
            <div className={styles.LowBar}>
                <div className={styles.item}>
                    <img src={Entrega} alt="Entrega Rápida" />
                    <p>Entrega rápida</p>
                </div>
                <div className={styles.item}>
                    <img src={Garantia} alt="Garantia" />
                    <p>Produtos com Qualidade</p>
                </div>
                <div className={styles.item}>
                    <img src={Disconto} alt="+3% de Desconto" />
                    <p>+3% de Desconto</p>
                </div>
            </div>
        </section>
    );
}
