import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorPerfil";
import { handleChange, validar } from "../../lib/FormUtils";
import FormPerfil from "../../components/perfil/Form";

const Cadastro = () => {

  const [inputs, setInputs] = useState({admin: false, equipe: false});
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
        .post("https://scap-sistema-promotor.onrender.com/perfils", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Perfil inserido com sucesso!");
            navigate("/perfils")
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
      <h1>Cadastro de Perfil</h1>
      <hr />
      <FormPerfil handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
    </>
  )


}

export default Cadastro;