/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [fornecedor, setFornecedor] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`https://scap-sistema-promotor.onrender.com/fornecedores/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setFornecedor(resp.data);
                } else if (resp.status === 404) {
                    navigate("/fornecedores");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarDados();
    }, [id]);

    function handleDelete() {
        axios.delete(`https://scap-sistema-promotor.onrender.com/fornecedores/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Fornecedor excluído com sucesso!");
                    navigate("/fornecedores")
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h1>Exclusão de Fornecedor</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o Fornecedor {fornecedor.nome}?</p>
            <FormButtons cancelTarget="/fornecedores" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;