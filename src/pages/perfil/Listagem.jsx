import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [perfis, setPerfis] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarPromotores = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/perfils")
      .then((resp) => {
        setPerfis(resp.data);
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
              perfis.map((perfil) =>
                <tr key={perfil.id}>
                  <td>{perfil.id}</td>
                  <td>{perfil.nome}</td>
                  <td>{perfil.equipe ? "sim" : "nao"}</td>
                  <td>{perfil.admin ? "sim" : "nao"}</td>
                  <td>{perfil.descricao}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/perfils/alterar/${perfil.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/perfils/excluir/${perfil.id}`}>
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