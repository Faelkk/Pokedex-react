import { styled } from "styled-components";

export const ContainerBtn = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  @media (max-width: 500px) {
    justify-content: start;
  }
`;

export const BtnsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  width: 80%;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const BtnTypes = styled.button`
  padding: 5px;
  color: #fff;
  font-family: "Merriweather Sans", sans-serif;
  border-radius: 2px;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
`;
