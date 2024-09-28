import React from "react";
import Map from './imagens/Map Pin.png';
import Redes from './imagens/redes.png';
import styles from './TopBar.module.css';

export default function TopBar() {
    const endereco = 'Rua das Cores, 123 - Bairro Criativo - Cidade da Inspiração, SP';
    
    return (
        <div className={styles.Bar}>
            <img src={Map} alt="Pin" />
            <p className={styles.endereço}>{endereco}</p>
            <img src={Redes} alt="Redes" className={styles.redes} />
        </div>
    );
}
