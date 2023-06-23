import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [usuarios, setPromotores] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarPromotores = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/usuarios")
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
              <th>Loja</th>
              <th>Perfil</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              usuarios.map((usuario) =>
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.nome}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.lojaId}</td>
                  <td>{usuario.perfilId}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/usuarios/alterar/${usuario.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/usuarios/excluir/${usuario.id}`}>
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