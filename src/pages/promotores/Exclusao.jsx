/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [promotor, setPromotor] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`https://scap-sistema-promotor.onrender.com/promotores/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setPromotor(resp.data);
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
        axios.delete(`https://scap-sistema-promotor.onrender.com/promotores/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Promotor excluído com sucesso!");
                    navigate("/promotores")
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
            <h1>Exclusão de Promotor</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a Promotor {promotor.nome}?</p>
            <FormButtons cancelTarget="/promotores" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;