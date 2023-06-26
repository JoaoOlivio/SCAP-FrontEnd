import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import estilos from "./Listagem.module.css"
import validator from "../../../lib/ValidatorRelatorio";
import { handleChange, validar } from "../../../lib/FormUtils";
import axios from "axios";
import FormRelatorio from "../../../components/relatorio/Form";

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

    function handleSubmit( dataInicial, dataFinal) {
        axios
            .get(`https://scap-sistema-promotor.onrender.com/horasTrabalho/relatorio1/${dataInicial}/${dataFinal}`)
            .then((resp) => {
                setRelatorios(resp.data);
                console.log('asds', dataInicial)
                setLoading(false);
            });
    }

    useEffect(() => {
        validarLocal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs])

    return (
        <>
            <div className="d-flex align-items-center">
                <h1 className="col-md-4" >Horas trabalhadas - Relatório 1</h1>
                <FormRelatorio  handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
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