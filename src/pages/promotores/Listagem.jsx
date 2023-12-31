import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [promotores, setPromotores] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarPromotores = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/promotores")
      .then((resp) => {
        setPromotores(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarPromotores();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem dos Promotores</h1>
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
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>Sexo</th>
              <th>Data de Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              promotores.map((promotor) =>
                <tr key={promotor.id}>
                  <td>{promotor.id}</td>
                  <td>{promotor.nome}</td>
                  <td>{promotor.email}</td>
                  <td>{promotor.telefone}</td>
                  <td>{promotor.cpf}</td>
                  <td>{promotor.sexo}</td>
                  <td>{promotor.nascimento}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/promotores/alterar/${promotor.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/promotores/excluir/${promotor.id}`}>
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