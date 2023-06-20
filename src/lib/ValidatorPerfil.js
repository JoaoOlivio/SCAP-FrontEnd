import * as yup from "yup";

const validator = yup.object().shape({
  nome: yup
    .string()
    .required("Nome é obrigatório.")
    .min(3, "Nome deve ter pelo menos 3 caracteres.")
    .max(50, "Nome deve ter no máximo 50 caracteres."),
    descricao: yup
    .string()
    .required("Descrição é obrigatório.")
    .min(10, "Nome deve ter pelo menos 10 caracteres.")
    .max(100, "Nome deve ter no máximo 100 caracteres."),
});


export default validator;