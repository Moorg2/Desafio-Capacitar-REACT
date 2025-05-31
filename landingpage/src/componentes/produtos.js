import CanetaImg from './imagens/Caneta.png';
import AdesivoImg from './imagens/Adesivos.png';
import CadernoImg from './imagens/Cadernos.png';

const ProdutoItem = ({ nome, preco, descricao, imagem }) => {
    return (
        <div className="card">
            <img src={imagem} alt={nome} className="foto" />
            <div className="informacoes">
                <h2 className="titulo-produto">{nome}</h2>
                <p className="preco">{preco}</p>
                <p className="descricao">{descricao}</p>
            </div>
            <button className="botao">Adicionar ao carrinho</button>
        </div>
    );
};
const Produto = () => {
    const produtos = [
        {
            id: 1,
            nome: 'Caneta Gel',
            preco: 'R$ 9,99',
            descricao: 'Caneta que desliza como manteiga e escreve como um sonho!',
            imagem: CanetaImg
        },
        {
            id: 2,
            nome: 'Adesivos Divertidos',
            preco: 'R$ 14,90',
            descricao: 'Adesivos que trazem sorrisos e um toque de diversão!',
            imagem: AdesivoImg
        },
        {
            id: 3,
            nome: 'Caderno Inteligente',
            preco: 'R$ 119,90',
            descricao: 'Caderno vibrante que faz suas ideias brilharem!',
            imagem: CadernoImg
        }
    ];

    return (
        <div className="produtos-container">
            {produtos.map(produto => (
                <ProdutoItem
                    key={produto.id}
                    nome={produto.nome}
                    preco={produto.preco}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                />
            ))}
        </div>
    );
};
export default Produto;