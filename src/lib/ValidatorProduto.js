import * as yup from "yup";

const validator = yup.object().shape({
    descricao: yup.string().required("Descrião é obrigatório."),
    precoCusto: yup.string().required("Preço de Custo é obrigatório."),
    precoVenda: yup.string().required("Preço de Venda é obrigatório."),
    fornecedorId: yup.number("Somente números.").required("Fornecedor é obrigatório."),
});

export default validator;
