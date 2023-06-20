import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [promotores, setPromotores] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarPromotores = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/perfils")
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
        <h1>Listagem dos Perfil</h1>
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
              <th>Equipe</th>
              <th>Admin</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              promotores.map((promotor) =>
                <tr key={promotor.id}>
                  <td>{promotor.id}</td>
                  <td>{promotor.nome}</td>
                  <td>{promotor.equipe}</td>
                  <td>{promotor.admin}</td>
                  <td>{promotor.descricao}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/perfils/alterar/${promotor.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/perfils/excluir/${promotor.id}`}>
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