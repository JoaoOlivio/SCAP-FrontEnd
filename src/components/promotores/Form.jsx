/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="text" field="cpf" label="CPF" error={errors?.cpf} onChange={handleChange} value={inputs?.cpf} mask="999.999.999-99" />
            <FormInput type="email" field="email" label="Email" placeholder="contato@gmail.com" error={errors?.email} onChange={handleChange} value={inputs?.email} />
            <FormInput type="text" field="telefone" label="Telefone" placeholder="(99) 99999-9999" error={errors?.telefone} onChange={handleChange} value={inputs?.telefone} mask="(99) 99999-9999" />
            <FormInput type="text" field="sexo" label="Sexo" placeholder="Masculino" error={errors?.sexo} onChange={handleChange} value={inputs?.sexo} />
            <FormInput type="date" field="nascimento" label="Data de nascimento" placeholder="11/11/2000" error={errors?.nascimento} onChange={handleChange} value={inputs?.nascimento} />

            <FormButtons cancelTarget="/promotores" />
        </form>
    )
}

export default Form

