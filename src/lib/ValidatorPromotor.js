import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup
        .string()
        .required("Nome é obrigatório.")
        .min(3, "Nome deve ter pelo menos 3 caracteres.")
        .max(50, "Nome deve ter no máximo 50 caracteres."),
    razaoSocial: yup
        .string()
        .required("Razão social é obrigatório")
        .min(3, "Razão social deve ter pelo menos 3 caracteres.")
        .max(50, "Razão social deve ter no máximo 50 caracteres."),
    email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
    telefone: yup.string().required("Telefone é obrigatório."),
    sexo: yup.string().required("Sexo é obrigatório."),
    cpf: yup
        .string()
        .required("CPF é obrigatório.")
        .test("valid-cpf", "CPF inválido.", (value) => {
            // Remove characters that are not digits
            const cpf = value.replace(/\D/g, "");

            // CPF must have 11 digits
            if (cpf.length !== 11) return false;

            // Validate CPF digits
            let sum = 0;
            let weight = 10;
            let verificationDigit = "";

            for (let i = 0; i < 9; i++) {
                sum += parseInt(cpf.charAt(i)) * weight;
                weight--;
            }

            const mod = sum % 11;
            verificationDigit = mod < 2 ? 0 : 11 - mod;

            if (verificationDigit !== parseInt(cpf.charAt(9))) return false;

            sum = 0;
            weight = 11;

            for (let i = 0; i < 10; i++) {
                sum += parseInt(cpf.charAt(i)) * weight;
                weight--;
            }

            const mod2 = sum % 11;
            verificationDigit = mod2 < 2 ? 0 : 11 - mod2;

            return verificationDigit === parseInt(cpf.charAt(10));
        }),
    nascimento: yup
        .date()
        .required("Data de nascimento é obrigatória.")
        .max(new Date(), "Data de nascimento inválida."),
});

export default validator;
