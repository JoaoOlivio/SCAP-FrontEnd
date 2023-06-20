import * as yup from "yup";

const validator = yup.object().shape({
    email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
    telefone: yup.string().required("Telefone é obrigatório."),
    razaoSocial: yup.string().required("Razão Social é obrigatório."),
    nomeFantasia: yup.string().required("Nome Fantasia é obrigatório."),
    cnpj: yup
        .string()
        .required("CNPJ é obrigatório.")
        .test("valid-cnpj", "CNPJ inválido.", (value) => {
            // Remove characters that are not digits
            const cnpj = value.replace(/\D/g, "");

            // CNPJ must have 14 digits
            if (cnpj.length !== 14) return false;

            // Validate CNPJ digits
            let sum = 0;
            let weight = 2;
            let verificationDigit = "";

            for (let i = 11; i >= 0; i--) {
                sum += parseInt(cnpj.charAt(i)) * weight;
                weight = weight === 9 ? 2 : weight + 1;
            }

            const mod = sum % 11;
            verificationDigit = mod < 2 ? 0 : 11 - mod;

            if (verificationDigit !== parseInt(cnpj.charAt(12))) return false;

            sum = 0;
            weight = 2;

            for (let i = 12; i >= 0; i--) {
                sum += parseInt(cnpj.charAt(i)) * weight;
                weight = weight === 9 ? 2 : weight + 1;
            }

            const mod2 = sum % 11;
            verificationDigit = mod2 < 2 ? 0 : 11 - mod2;

            return verificationDigit === parseInt(cnpj.charAt(13));
        }),
});

export default validator;
