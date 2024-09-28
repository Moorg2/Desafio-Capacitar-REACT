import React from 'react';
import Logo from './imagens/logo.png';
import Bolsa from './imagens/Shopping Bag.png';
import styles from './Menu.module.css'; // Importe o CSS

export default function TopBar() {
    return (
        <div className={styles.Menu}>
            <img src={Logo} alt="Logo" className={styles.logo} />
            <div className={styles.menu}>
                <p className={styles.item}>Home</p>
                <p className={styles.item}>Serviços</p>
                <p className={styles.item}>Produtos</p>
                <p className={styles.item}>Contato</p>
                <img src={Bolsa} alt="Shopping Bag" className={styles.bolsa} />
            </div>
        </div>
    );
}
