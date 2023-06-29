import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import estilos from "./Listagem.module.css"
import validator from "../../../lib/ValidatorRelatorio";
import { handleChange, validar } from "../../../lib/FormUtils";
import axios from "axios";
import FormRelatorio2 from "../../../components/relatorio/Form2";
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

        const { dataInicial, dataFinal, promotorId } = inputs;

        axios
            .get(`https://scap-sistema-promotor.onrender.com/entradas/relatorio1/${dataInicial}/${dataFinal}/${promotorId}`)
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
                    <h1>Entrada - Relatório 2</h1>
                    <BotaoVoltar />
                </div>

                <div className="w-100">
                    <FormRelatorio2 handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
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
                            <th>Razão Social</th>
                            <th>Visitas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            relatorios.map((relatorio, index) =>
                                <tr key={index}>
                                    <td>{relatorio.razao_social}</td>
                                    <td>{relatorio.visitas}</td>
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