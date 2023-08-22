import React, { ChangeEvent, FormEvent } from "react";
import { styled } from "styled-components";
import { ContainerSearchPoke } from "../SearchPokemon/Style";
import { TypeProps } from "../../Types/Type";

export const SearchForm = styled.form`
  display: flex;
  gap: 2rem;
  @media (max-width: 500px) {
    gap: 1rem;
  }
  @media (max-width: 370px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;
export const InputSearch = styled.input`
  font-family: "Merriweather Sans", sans-serif;
  width: 15rem;
  text-align: center;
  padding: 10px;
  border-radius: 3px;
`;
export const BtnInput = styled.button`
  font-family: "Merriweather Sans", sans-serif;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  color: rgb(228, 228, 228);
  background: rgb(255, 187, 17);
  width: 5rem;
  font-weight: bold;
`;

const InputSearchPoke: React.FC<TypeProps> = (props) => {
  const [pokeValue, setPokeValue] = React.useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setPokeValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSearch(pokeValue);
    setPokeValue("");
  }

  return (
    <>
      <ContainerSearchPoke>
        <SearchForm onSubmit={handleSubmit}>
          <InputSearch
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            value={pokeValue}
            onChange={handleChange}
            required
          />

          <BtnInput type="submit">Buscar</BtnInput>
        </SearchForm>
      </ContainerSearchPoke>
    </>
  );
};

export default InputSearchPoke;
