import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarProdutos = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/produtos")
      .then((resp) => {
        setProdutos(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem dos Produtos</h1>
        <Link className="btn btn-primary" to="cadastrar">Novo</Link>
      </div>
      <hr />
      {loading &&
        (<div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>)}
      {!loading && (
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Descrição</th>
              <th>Preço Custo</th>
              <th>Preço Venda</th>
              <th>Fornecedor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              produtos.map((produto) =>
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.precoVenda}</td>
                  <td>{produto.precoCusto}</td>
                  <td>{produto.fornecedorId}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/produtos/alterar/${produto.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/produtos/excluir/${produto.id}`}>
                      <i className="bi bi-trash" title="Excluir"></i>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default Listagem;