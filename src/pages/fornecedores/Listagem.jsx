import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [fornecedores, setPromotores] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarFornecedores = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/fornecedores")
      .then((resp) => {
        setPromotores(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarFornecedores();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem dos Fornecedores</h1>
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
              <th>Nome Fantasia</th>
              <th>Razão Social</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>CNPJ</th>
            </tr>
          </thead>
          <tbody>
            {
              fornecedores.map((fornecedor) =>
                <tr key={fornecedor.id}>
                  <td>{fornecedor.id}</td>
                  <td>{fornecedor.nomeFantasia}</td>
                  <td>{fornecedor.razaoSocial}</td>
                  <td>{fornecedor.email}</td>
                  <td>{fornecedor.telefone}</td>
                  <td>{fornecedor.cnpj}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/fornecedores/alterar/${fornecedor.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/fornecedores/excluir/${fornecedor.id}`}>
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