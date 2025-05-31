import React from 'react';
import PropTypes from 'prop-types';
import styles from './CaixaStats.module.css';

const CaixaStats = ({ titulo = "Nossos Produtos", stats }) => {
  const dadosStats = stats || [
    { valor: "+ 1000", descricao: "Produtos disponíveis" },
    { valor: "+ 15", descricao: "Anos de história" },
    { valor: "99%", descricao: "Satisfação Garantida" }
  ];

  return (
    <section className={styles.section} aria-label="Estatísticas da empresa">
      <div className={styles.caixa}>
        <h1 className={styles.titulo}>{titulo}</h1>
        <div className={styles.itens}>
          {dadosStats.map((item, index) => (
            <div key={`stat-${index}`} className={styles.item}>
              <h2 className={styles.numero}>{item.valor}</h2>
              <p className={styles.descricao}>{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

CaixaStats.propTypes = {
  titulo: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      valor: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired
    })
  )
};

export default React.memo(CaixaStats);