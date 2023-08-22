import { styled } from "styled-components";

const ErrorContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  transform: translateX(-20px);
  animation: animation 0.3s forwards;

  @keyframes animation {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
const Message = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  background: #fb1;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 0.4rem;
`;
const TextMessage = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 3px 10px #000;

  @media (max-width: 61.25rem) {
    font-size: 1.5rem;
  }

  @media (max-width: 40.94rem) {
    font-size: 1rem;
  }
`;
const ErrorImage = styled.img`
  width: 200px;
  height: 200px;
  margin-top: -5rem;
  filter: drop-shadow(0 0 0.25rem rgb(31, 30, 31));
`;

const ErrorSearch = () => {
  const error =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png";

  return (
    <ErrorContainer>
      <Message>
        <TextMessage>Pokemon não encontrado...</TextMessage>
        <ErrorImage src={error} alt="error pokemon not found" />
      </Message>
    </ErrorContainer>
  );
};
export default ErrorSearch;
