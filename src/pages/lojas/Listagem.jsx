import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [lojas, setLojas] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarLojas = () => {
    axios
      .get("https://scap-sistema-promotor.onrender.com/lojas")
      .then((resp) => {
        setLojas(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarLojas();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem das Lojas</h1>
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
              <th>CNPJ</th>
              <th>Endereço</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              lojas.map((loja) =>
                <tr key={loja.id}>
                  <td>{loja.id}</td>
                  <td>{loja.nome}</td>
                  <td>{loja.cnpj}</td>
                  <td>{loja.endereco}</td>
                  <td>{loja.descricao}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/lojas/alterar/${loja.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/lojas/excluir/${loja.id}`}>
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