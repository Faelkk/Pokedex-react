import styled from "styled-components";
export const PokedexMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
  gap: 2rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }
  @media (max-width: 724px) {
    grid-template-columns: 1fr;
  }
`;

export const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  padding: 15px 15px 0px 15px;
  border-radius: 3px;
  background: #262424;
  cursor: pointer;
  max-height: 350px;
  max-width: 23rem;
  width: 23rem;
  @media (max-width: 1300px) {
    width: 19rem;
    max-width: 19rem;
  }
  @media (max-width: 1000px) {
    width: 22rem;
    max-width: 22rem;
  }
  @media (max-width: 830px) {
    width: 19rem;
    max-width: 19rem;
  }
`;

export const ImgPoke = styled.img`
  width: 150px;
  max-height: 150px;
  height: 150px;
`;
export const ContainerNames = styled.div`
  margin-top: 1rem;
  font-size: 1.2rem;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;
export const PokeInfo = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
`;
export const ContainerTypes = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
`;
export const SpanType = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  padding: 5px;
  width: 6rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: capitalize;
  border-radius: 2px;
`;
export const ContainerDescription = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0px;
`;
export const DivDescription = styled.div`
  display: flex;
  gap: 0.2rem;
`;
export const IconDescription = styled.img``;
export const SpanDescription = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  font-weight: bold;
`;
export const BtnMoreInformation = styled.button`
  width: calc(100% + 30px);
  padding: 10px;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
`;
export const BtnPoke = styled.button`
  font-family: "Noto Sans JP", sans-serif;
  padding: 8px;
  width: 10%;
  cursor: pointer;
  border-radius: 3px;
  background: #90efdd53;

  color: #fff;
  font-weight: bold;
  &:hover {
    background: #04a48755;
  }
  @media (max-width: 1024px) {
    width: 20%;
  }
  @media (max-width: 768px) {
    width: 30%;
  }
`;
