/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {

    return (
        <form className="col-md-12" onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className="row">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6">
                            <FormInput type="date" field="dataInicial" label="Data de Inicial" placeholder="11/11/2000" error={errors?.dataInicial} onChange={handleChange} value={inputs?.dataInicial} />
                        </div>
                        <div className="col-md-6">
                            <FormInput type="date" field="dataFinal" label="Data de Final" placeholder="11/11/2000" error={errors?.dataFinal} onChange={handleChange} value={inputs?.dataFinal} />
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <FormButtons cancelTarget="/" />

                </div>

            </div>

        </form>
    )
}

export default Form

