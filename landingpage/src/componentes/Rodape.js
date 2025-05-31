import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Ou seu gerenciador de rotas
import './Rodape.css';

const Rodape = ({ logo, linksRapidos: linksProp, copyright }) => {
  // Valores padrão caso não sejam fornecidos via props
  const linksRapidos = linksProp || ['Home', 'Serviços', 'Produtos', 'Contato'];
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape" aria-label="Rodapé do site">
      <div className="rodape__conteudo">
        <div className="rodape__logo">
          <img 
            src={logo} 
            alt="Logo da empresa" 
            className="rodape__imagem" 
            loading="lazy"
          />
        </div>

        <nav className="rodape__links" aria-label="Navegação rápida">
          <h3 className="rodape__titulo">Links Rápidos</h3>
          <ul className="rodape__lista">
            {linksRapidos.map((link) => (
              <li key={link} className="rodape__item">
                <Link 
                  to={`/${link.toLowerCase()}`} 
                  className="rodape__link"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {copyright && (
          <div className="rodape__copyright">
            © {anoAtual} {copyright} - Todos os direitos reservados
          </div>
        )}
      </div>
    </footer>
  );
};

Rodape.propTypes = {
  logo: PropTypes.string.isRequired,
  linksRapidos: PropTypes.arrayOf(PropTypes.string),
  copyright: PropTypes.string
};

export default React.memo(Rodape);