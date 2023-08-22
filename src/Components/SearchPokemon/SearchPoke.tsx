import { useEffect, useState } from "react";
import {
  ContainerPokeInput,
  ImgPoke,
  MoreDetails,
  PokemonTypes,
  SearchHeader,
  SidesDiv,
  SpanNamePoke,
  SpanNumberPoke,
} from "./Style";
import { use_pokeByInfo } from "../../Hooks/FetchApi";
import InputSearchPoke from "../Helpers/Input";
import { ContainerTypes } from "../Cards/Style";
import Modal from "../Modal/Modal";
import Loading from "../Helpers/Loading";
import ErrorSearch from "../Helpers/ErrorSearch";

const SearchPoke = () => {
  const [modal, setModal] = useState(false);

  const { pokeInfo, loading, error, setError, fetchPokeInfo } =
    use_pokeByInfo();

  function HandleSubmit(value: string) {
    fetchPokeInfo(value);
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error]);

  if (loading) return <Loading />;

  return (
    <>
      <SearchHeader>
        <InputSearchPoke
          type="text"
          id="poke"
          autoComplete="off"
          required
          placeholder="procure seu pokemon"
          onSearch={HandleSubmit}
        />
        {pokeInfo && !error && (
          <ContainerPokeInput
            className={`card${pokeInfo.types[0].type.name}`}
            onClick={() => setModal(!modal)}
          >
            <SidesDiv className="Left">
              <SpanNumberPoke>#0{pokeInfo.id}</SpanNumberPoke>
              <SpanNamePoke>{pokeInfo.name}</SpanNamePoke>
              <ContainerTypes>
                {pokeInfo?.types.map((type) => (
                  <PokemonTypes key={type.type.name} className={type.type.name}>
                    {type.type.name}
                  </PokemonTypes>
                ))}
              </ContainerTypes>
              <MoreDetails className={pokeInfo?.types[0].type.name}>
                Mais detalhes
              </MoreDetails>
            </SidesDiv>
            <SidesDiv className="Right">
              <ImgPoke
                src={pokeInfo?.sprites.other["official-artwork"].front_default}
                alt={pokeInfo.name}
              />
            </SidesDiv>
          </ContainerPokeInput>
        )}
      </SearchHeader>
      {error && <ErrorSearch />}
      {modal && <Modal pokemon={pokeInfo} modal={modal} setModal={setModal} />}
    </>
  );
};

export default SearchPoke;
