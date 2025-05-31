import React from 'react';
import PropTypes from 'prop-types';
import './Contato.css';

const Contato = ({ contatos: contatosProp, titulo = 'Contatos' }) => {
  const contatos = contatosProp || [
    { tipo: 'Telefone', valor: '(81) 99999-9999' },
    { tipo: 'Email', valor: 'papelearte@hotmail.com' }
  ];

  return (
    <section className="contato" aria-label="Informações de contato">
      <h2 className="contato__titulo">{titulo}</h2>
      <div className="contato__lista">
        {contatos.map((contato) => (
          <div key={`${contato.tipo}-${contato.valor}`} className="contato__item">
            <span className="contato__tipo">{contato.tipo}:</span>
            <span className="contato__valor">
              {contato.tipo === 'Email' ? (
                <a href={`mailto:${contato.valor}`}>{contato.valor}</a>
              ) : contato.tipo === 'Telefone' ? (
                <a href={`tel:${contato.valor.replace(/\D/g, '')}`}>{contato.valor}</a>
              ) : (
                contato.valor
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

Contato.propTypes = {
  contatos: PropTypes.arrayOf(
    PropTypes.shape({
      tipo: PropTypes.string.isRequired,
      valor: PropTypes.string.isRequired
    })
  ),
  titulo: PropTypes.string
};

export default Contato;