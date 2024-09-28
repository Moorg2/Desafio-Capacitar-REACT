import React from 'react';
import styles from './caixaStats.module.css'; // Importe o CSS

export default function caixaStats() {
    return (
        <section>
            <div className={styles.caixa}>
                <h1 className={styles.titulo}>Nossos Produtos</h1>
                <div className={styles.itens}>
                    <div className={styles.item}>
                        <h2 className={styles.numero}>+ 1000</h2>
                        <p className={styles.descricao}>Produtos disponíveis</p>
                    </div>
                    <div className={styles.item}>
                        <h2 className={styles.numero}>+ 15</h2>
                        <p className={styles.descricao}>Anos de história</p>
                    </div>
                    <div className={styles.item}>
                        <h2 className={styles.numero}>99%</h2>
                        <p className={styles.descricao}>Satisfação Garantida</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
