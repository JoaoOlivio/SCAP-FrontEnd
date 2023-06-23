/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [optionsFornecedores, setOptionsFornecedores] = useState([]);

    const navigate = useNavigate();

    function carregarFornecedores() {
        axios.get(`https://scap-sistema-promotor.onrender.com/fornecedores`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nomeFantasia
                        };
                    });
                    setOptionsFornecedores(dados);
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
        carregarFornecedores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="descricao" label="Descrição" placeholder="Descrição" error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
            <FormInput type="text" field="precoCusto" label="Preço de Custo" placeholder="R$ 50,00" error={errors?.precoCusto} onChange={handleChange} value={inputs?.precoCusto} />
            <FormInput type="text" field="precoVenda" label="Preço de Venda" placeholder="R$ 50,00" error={errors?.precoVenda} onChange={handleChange} value={inputs?.precoVenda} />
            <FormSelect field="fornecedorId" label="Fornecedor" placeholder="Selecione o Fornecedor..." error={errors?.fornecedorId} onChange={handleChange} value={inputs?.fornecedorId} options={optionsFornecedores} />
            
            <FormButtons cancelTarget="/produtos" />
        </form>
    )
}

export default Form

