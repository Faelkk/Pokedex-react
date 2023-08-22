import styled from "styled-components";

export const SearchHeader = styled.section`
  border-radius: 0.4rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerSearchPoke = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border-radius: 0.4rem;
  margin-bottom: 0.4rem;
`;

export const ContainerPokeInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 30rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 0.4rem;
  padding: 5px;
  opacity: 0;
  transform: translateX(-20px);
  animation: animation 0.3s forwards;
  cursor: pointer;
  @keyframes animation {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media (max-width: 65.25rem) {
    width: 90%;
  }
  @media (max-width: 804px) {
    height: auto;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 534px) {
    height: auto;
    justify-content: center;
    flex-direction: column;
    width: 90%;
  }
`;
export const SidesDiv = styled.div`
  &.Left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 25rem;
    width: 20rem;

    @media (max-width: 45.94rem) {
      height: auto;
    }

    @media (max-width: 734px) {
      margin-top: 0;
      width: auto;
    }
  }
  &.Right {
    width: 21rem;
    display: flex;
    align-items: end;
    justify-content: end;
    @media (max-width: 734px) {
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;
export const SpanNumberPoke = styled.span`
  margin: 0;
  padding: 0;
  opacity: 0.1;
  width: auto;
  color: #fff;
  font-size: 9rem;
  font-weight: bold;
  text-align: start;

  @media (max-width: 45.94rem) {
    font-size: 5rem;
    text-align: center;
  }

  @media (max-width: 734px) {
    font-size: 3rem;
  }
`;
export const SpanNamePoke = styled.span`
  color: #fff;
  text-align: start;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px #000;
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 45.94rem) {
    text-align: center;
  }
`;

export const ImgPoke = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  filter: drop-shadow(0 0 0.75rem rgb(57, 55, 56));

  @media (max-width: 734px) {
    width: 300px;
  }

  @media (max-width: 734px) {
    width: 250px;
  }
`;
export const PokemonTypes = styled.span`
  color: #fff;
  margin: 0.4rem;
  text-align: center;
  width: auto;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.4rem 1.9rem;
  border-radius: 4px;
  text-transform: capitalize;
  text-shadow: 1px 1px 5px #000;

  @media (max-width: 45.94rem) {
    margin: 0.3rem auto;
    width: 60%;
  }
`;

export const MoreDetails = styled.button`
  cursor: pointer;
  height: 3.5rem;
  margin-top: 2rem;
  width: 100%;
  outline: none;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
  color: #fff;
  transition: 0.2s;
  background-image: none;
  border-radius: 3px;
  text-shadow: 1px 1px 5px #000;

  @media (max-width: 45.94rem) {
    margin: 0.2rem auto;
    height: 2rem;
    width: 200px;
    font-size: 1.2rem;
  }

  @media (max-width: 734px) {
    height: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;
