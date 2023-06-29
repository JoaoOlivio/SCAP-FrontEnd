import { useNavigate } from "react-router-dom";

const BotaoVoltar = () => {
  const navagacao = useNavigate();

  return (
 
      <p className="botao-voltar" onClick={() => navagacao(-1)}> <i className="bi bi-arrow-left-short"></i> Voltar</p>
  );
};

export default BotaoVoltar;