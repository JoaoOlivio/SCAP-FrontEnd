import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup
        .string()
        .required("Nome é obrigatório.")
        .min(3, "Nome deve ter pelo menos 3 caracteres.")
        .max(50, "Nome deve ter no máximo 50 caracteres."),
    email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
    senha: yup.string().required("Senha é obrigatório."),
    lojaId: yup.number("Somente números.").required("Loja é obrigatório."),
    perfilId: yup.number("Somente números.").required("Perfil é obrigatório."),
});

export default validator;
