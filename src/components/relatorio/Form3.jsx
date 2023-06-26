/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [promotores, setPromotores] = useState([]);

    const carregarPromotores = () => {
    axios
        .get("https://scap-sistema-promotor.onrender.com/promotores")
        .then((resp) => {
        const dados = resp.data.map((obj) => {
            return {
                value: obj.id,
                label: obj.nome
            };
        });
        setPromotores(dados);
        console.log(resp.data);
        setLoading(false);
        });
    }

    useEffect(() => {
        carregarPromotores();
    }, []);

    return (
        <form className="col-md-8" onSubmit={handleSubmit(inputs?.dataInicial)} noValidate autoComplete="off">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <FormSelect field="promotorId" label="Promotor" placeholder="Selecione o promotor..." error={errors?.promotorId} onChange={handleChange} value={inputs?.promotorId} options={promotores} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <FormButtons cancelTarget="/" />

                </div>

            </div>

        </form>
    )
}

export default Form

