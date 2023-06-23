/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="text" field="cnpj" label="CNPJ"  error={errors?.cnpj} onChange={handleChange} value={inputs?.cnpj} mask="99.999.999/9999-99"/>
            <FormInput type="text" field="endereco" label="Endereço" placeholder="Rua xxxx" error={errors?.endereco} onChange={handleChange} value={inputs?.endereco} />
            <FormInput type="text" field="descricao" label="Descrição" placeholder="Esta loja..." error={errors?.descricao} onChange={handleChange} value={inputs?.descricao} />
            <FormButtons cancelTarget="/lojas" />
        </form>
    )
}

export default Form

