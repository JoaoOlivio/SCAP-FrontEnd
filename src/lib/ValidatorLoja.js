import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup
      .string()
      .required("Nome é obrigatório.")
      .min(3, "Nome deve ter pelo menos 3 caracteres.")
      .max(50, "Nome deve ter no máximo 50 caracteres."),
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
    endereco: yup.string().required("Endereço é obrigatório."),
    descricao: yup
      .string()
      .required("Descrição é obrigatório.")
      .min(10, "Nome deve ter pelo menos 10 caracteres.")
      .max(50, "Nome deve ter no máximo 50 caracteres."),
  });
  

export default validator;