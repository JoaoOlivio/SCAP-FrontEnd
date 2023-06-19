/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [loja, setLoja] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`https://scap-sistema-promotor.onrender.com/lojas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setLoja(resp.data);
                } else if (resp.status === 404) {
                    navigate("/lojas");
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
        axios.delete(`https://scap-sistema-promotor.onrender.com/lojas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Loja excluída com sucesso!");
                    navigate("/lojas")
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
            <h1>Exclusão de Loja</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a Loja {loja.nome}?</p>
            <FormButtons cancelTarget="/lojas" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;