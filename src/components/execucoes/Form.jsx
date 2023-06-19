/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [optionsAlunos, setOptionsAlunos] = useState([]);
    const [optionsInstrutores, setOptionsInstrutores] = useState([]);
    const [optionsExercicios, setOptionsExercicios] = useState([]);

    const navigate = useNavigate();

    function carregarAlunos() {
        axios.get(`http://localhost:3001/alunos`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsAlunos(dados);
                } else if (resp.status === 404) {
                    navigate("/execucoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarInstrutores() {
        axios.get(`http://localhost:3001/instrutores`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsInstrutores(dados);
                } else if (resp.status === 404) {
                    navigate("/execucoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarExercicios() {
        axios.get(`http://localhost:3001/exercicios`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsExercicios(dados);
                } else if (resp.status === 404) {
                    navigate("/execucoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarAlunos();
        carregarInstrutores();
        carregarExercicios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormSelect field="alunoId" label="Aluno" placeholder="Selecione o aluno..." error={errors?.alunoId} onChange={handleChange} value={inputs?.alunoId} options={optionsAlunos} />
            <FormSelect field="instrutorId" label="Instrutor" placeholder="Selecione o instrutor..." error={errors?.instrutorId} onChange={handleChange} value={inputs?.instrutorId} options={optionsInstrutores} />
            <FormSelect field="exercicioId" label="Exercício" placeholder="Selecione o execício..." error={errors?.exercicioId} onChange={handleChange} value={inputs?.exercicioId} options={optionsExercicios} />
            <FormInput type="number" field="series" label="Séries" placeholder="3" error={errors?.series} onChange={handleChange} value={inputs?.series} />
            <FormInput type="number" field="repeticoes" label="Repetições" placeholder="10" error={errors?.repeticoes} onChange={handleChange} value={inputs?.repeticoes} />
            <FormInput type="number" field="carga" label="Carga" placeholder="20" error={errors?.carga} onChange={handleChange} value={inputs?.carga} />
            <FormInput type="date" field="data" label="Data" placeholder="01/01/2023" error={errors?.data} onChange={handleChange} value={inputs?.data} />
            <FormButtons cancelTarget="/execucoes" />
        </form>
    )
}

export default Form

