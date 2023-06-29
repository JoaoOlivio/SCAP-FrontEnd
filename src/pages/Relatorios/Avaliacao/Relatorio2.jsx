import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import estilos from "./Listagem.module.css"
import validator from "../../../lib/ValidatorRelatorio";
import { handleChange, validar } from "../../../lib/FormUtils";
import axios from "axios";
import FormRelatorio3 from "../../../components/relatorio/Form3";
import BotaoVoltar from "../../../components/BotaoVoltar";

const Listagem = () => {
    const [relatorios, setRelatorios] = useState([]);
    const [loading, setLoading] = useState(true);

    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});

    function validarLocal(callbackAction) {
        validar(callbackAction, inputs, setErrors, validator);
    }

    function handleChangeLocal(e) {
        handleChange(e, setInputs, inputs);
    }

    function handleSubmit(e) {
        e.preventDefault(); // Evita o envio automático do formulário

        const { promotorId } = inputs;

        axios
            .get(`https://scap-sistema-promotor.onrender.com/avaliacoes/relatorio2/${promotorId}`)
            .then((resp) => {
                setRelatorios(resp.data);
                setLoading(false);
            });
    }

    useEffect(() => {
        validarLocal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs])

    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-between">
                <div className="w-100 d-flex justify-content-between">
                    <h1>Avaliação - Relatório 2</h1>
                    <BotaoVoltar />
                </div>

                <div className="w-100">
                    <FormRelatorio3 handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
                </div>
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
                            <th>Destaques</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            relatorios.map((relatorio, index) =>
                                <tr key={index}>
                                    <td>{relatorio.destaques}</td>
                                    <td>{relatorio.quantidade}</td>
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