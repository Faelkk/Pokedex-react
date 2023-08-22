import styled from "styled-components";
export const ContainerCard = styled.section`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 29rem;
  border-radius: 0.4rem;
  cursor: pointer;
  @media (max-width: 1004px) {
    width: 90%;
    justify-content: center;
  }

  @media (max-width: 704px) {
    flex-direction: column;
    gap: 2rem;
    height: 35rem;
  }
`;
export const PreviewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 624px) {
    margin: 2rem 0;
  }
`;
export const PreviewContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30rem;
  width: 98%;
  padding: 0.2rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  border-radius: 0.4rem;
  @media (max-width: 1000px) {
    justify-content: center;
    gap: 2rem;
  }
`;
export const LogoContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29rem;
  width: 35%;
  border-radius: 0.4rem;
  background: #000;
  opacity: 0;
  transform: translateX(-20px);
  animation: animate 0.3s forwards;

  @keyframes animate {
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media (max-width: 1004px) {
    display: none;
  }
`;
export const LogoImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const PreviewCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95%;
  height: 29rem;
  border-radius: 0.4rem;
  cursor: pointer;
  @media (max-width: 904px) {
    width: 90%;
    justify-content: center;
  }

  @media (max-width: 704px) {
    flex-direction: column;
    gap: 2rem;
    height: 35rem;
  }
`;

export const LoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 29rem;
  width: 100%;
  background: #181b1d;
  border-radius: 0.4rem;
  @media (max-width: 700px) {
    height: 560px;
  }
`;
export const LoadImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const PreviewInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 2rem;

  @media (max-width: 25.94rem) {
    margin-top: 0;
    height: 10rem;
    margin-left: 0;
  }
  @media (max-width: 624px) {
    gap: 1rem;
    margin-left: 0;
  }
`;
export const PokemonID = styled.span`
  margin: 0;
  padding: 0;
  opacity: 0.1;
  width: auto;
  color: #fff;
  font-size: 5rem;
  font-weight: bold;
  text-align: start;
  font-family: "Merriweather Sans", sans-serif;

  @media (max-width: 624px) {
    font-size: 3rem;
  }
`;

export const PokemonName = styled.h1`
  color: #fff;
  text-align: start;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px #000;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 2rem;

  @media (max-width: 45.94rem) {
    text-align: center;
  }
`;
export const PokemonTypes = styled.span`
  color: #fff;
  margin: 0.4rem;
  text-align: center;
  width: 100px;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.2rem 1.5rem;
  border-radius: 0.4rem;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px #000;
  font-family: "Merriweather Sans", sans-serif;
  @media (max-width: 45.94rem) {
    margin: 0.3rem auto;
  }
`;

export const PreviewPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 29rem;
  margin-top: -3rem;
  @media (max-width: 624px) {
    margin: 0;
    width: 100%;
  }
`;

export const PreviewPokemonImage = styled.img`
  width: 360px;
  max-width: 360px;
  height: auto;
  object-fit: cover;
  filter: drop-shadow(0 0 0.75rem rgb(57, 55, 56));

  @media (max-width: 1020px) {
    width: 300px;
    max-width: 300px;
  }

  @media (max-width: 624px) {
    width: 250px;
    max-width: 250px;
  }
`;
export const ContainerBtns = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  @media (max-width: 624px) {
    gap: 0.5rem;
    margin: 0;
  }
`;
