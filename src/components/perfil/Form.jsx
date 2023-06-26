/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"
import FormSwitch from "../FormSwitch"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormSwitch field="admin"  type="Admin" value={inputs?.admin}/>
            <FormSwitch  field="equipe" type="Equipe" value={inputs?.equipe}/>
            <FormInput type="text" field="descricao" label="Descrição" placeholder="Esse Perfil" error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
            <FormButtons cancelTarget="/perfils" />
        </form>
    )
}

export default Form

