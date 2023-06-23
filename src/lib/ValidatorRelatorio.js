import * as yup from "yup";

const validator = yup.object().shape({
    dataInicial: yup
        .date()
        .required("Data de início é obrigatória."),
    dataFinal: yup
        .date()
        .required("Data de início é obrigatória.")
});

export default validator;
