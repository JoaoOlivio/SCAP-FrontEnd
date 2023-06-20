/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="razaoSocial" label="Razão Social" placeholder="Razão" error={errors?.razaoSocial} onChange={handleChange} value={inputs?.razaoSocial} />
            <FormInput type="text" field="nomeFantasia" label="Nome Fantasia" placeholder="Razão" error={errors?.nomeFantasia} onChange={handleChange} value={inputs?.nomeFantasia} />
            <FormInput type="text" field="cnpj" label="CNPJ"  error={errors?.cnpj} onChange={handleChange} value={inputs?.cnpj} mask="99.999.999/9999-99"/>
            <FormInput type="email" field="email" label="Email" placeholder="contato@gmail.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
            <FormInput type="text" field="telefone" label="Telefone" placeholder="(99) 99999-9999" error={errors?.telefone} onChange={handleChange} value={inputs?.telefone} mask="(99) 99999-9999" />
            <FormButtons cancelTarget="/fornecedores" />
        </form>
    )
}

export default Form

