import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { validar, handleChange } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorFornecedor";
import FormFornecedor from "../../components/fornecedores/Form";

const Alteracao = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const id = useParams().id;
    if (!id) {
        navigate("/fornecedores");
    }

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`https://scap-sistema-promotor.onrender.com/fornecedores/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setInputs(resp.data);
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

    function validarLocal(callbackAction) {
        validar(callbackAction, inputs, setErrors, validator);
    }

    function handleChangeLocal(e) {
        handleChange(e, setInputs, inputs);
    }

    function handleSubmit(e) {
        e.preventDefault();
        validarLocal(() => {
            axios
                .put(`https://scap-sistema-promotor.onrender.com/fornecedores/${id}`, inputs)
                .then((resp) => {
                    if (resp.status == 200) {
                        alert("Fornecedor alterado com sucesso!");
                        navigate("/fornecedores")
                    }
                });
        });
    }

    useEffect(() => {
        validarLocal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs])

    return (
        <>
            <h1>Alteração de Fornecedor</h1>
            <hr />
            <FormFornecedor handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
        </>
    )
}

export default Alteracao;