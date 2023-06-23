/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [produto, setProduto] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`https://scap-sistema-promotor.onrender.com/produtos/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setProduto(resp.data);
                } else if (resp.status === 404) {
                    navigate("/produtos");
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
        axios.delete(`https://scap-sistema-promotor.onrender.com/produtos/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Produto excluído com sucesso!");
                    navigate("/produtos")
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
            <h1>Exclusão de Produto</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o Produto {produto.descricao}?</p>
            <FormButtons cancelTarget="/produtos" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;