/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [optionsLojas, setOptionsLojas] = useState([]);
    const [optionsPerfils, setOptionsPerfils] = useState([]);

    const navigate = useNavigate();

    function carregarLojas() {
        axios.get(`https://scap-sistema-promotor.onrender.com/lojas`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsLojas(dados);
                } else if (resp.status === 404) {
                    navigate("/usuarios");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarPerfils() {
        axios.get(`https://scap-sistema-promotor.onrender.com/perfils`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsPerfils(dados);
                } else if (resp.status === 404) {
                    navigate("/usuarios");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarLojas();
        carregarPerfils();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="email" field="email" label="Email" placeholder="contato@gmail.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
            <FormInput type="password" field="senha" label="Senha" placeholder="****" error={errors?.senha} onChange={handleChange} value={inputs?.senha} />
            <FormSelect field="lojaId" label="Loja" placeholder="Selecione o loja..." error={errors?.lojaId} onChange={handleChange} value={inputs?.lojaId} options={optionsLojas} />
            <FormSelect field="perfilId" label="Perfil" placeholder="Selecione o perfil..." error={errors?.perfilId} onChange={handleChange} value={inputs?.perfilId} options={optionsPerfils} />
            
            <FormButtons cancelTarget="/usuarios" />
        </form>
    )
}

export default Form

