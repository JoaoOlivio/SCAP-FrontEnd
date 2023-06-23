import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorUsuario";
import { handleChange, validar } from "../../lib/FormUtils";
import FormUsuario from "../../components/usuarios/Form";

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function validarLocal(callbackAction) {
    validar(callbackAction, inputs, setErrors, validator);
  }

  function handleChangeLocal(e) {
    handleChange(e, setInputs, inputs);
  }

  function handleSubmit(e) {
    e.preventDefault();
    validarLocal(() => {      
      axios
        .post("https://scap-sistema-promotor.onrender.com/usuarios", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Usuário inserido com sucesso!");
            navigate("/usuarios")
          }
        });
      console.log("Enviou dados para a API.");
    });
  }

  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  return (
    <>
      <h1>Cadastro de Usuário</h1>
      <hr />
      <FormUsuario handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )


}

export default Cadastro;