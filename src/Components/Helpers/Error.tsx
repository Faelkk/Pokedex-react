import styled from "styled-components";
import imgIcon from "../../assets/Feeling sorry-bro.svg";

const ContainerError = styled.main`
  display: flex;

  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;
const TitleError = styled.h1`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  margin-bottom: 1rem;
`;
const ImgError = styled.img`
  width: 300px;
`;

const Error = () => {
  return (
    <ContainerError>
      <TitleError>Erro ao fazer as requisições</TitleError>
      <ImgError src={imgIcon} alt="Imagem de erro" />
    </ContainerError>
  );
};

export default Error;
