import { useState } from "react";
import { useApiType } from "../../Hooks/FetchApi";

import { TypeCardFilter, Pokemon } from "../../Types/Type";
import Loading from "../Helpers/Loading";
import Modal from "../Modal/Modal";
import { PokedexMain, ContainerCard, BtnPoke } from "../Cards/Style";

import Card from "../Cards/Card";
import Error from "../Helpers/Error";

const PokedexByFilter: React.FC<TypeCardFilter> = ({
  typeName,
  setTypeName,
}) => {
  const { PokedexFilter, loading, error } = useApiType(typeName);
  const [modal, setModal] = useState(false);

  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  function handleClickCard(pokemonInfo: Pokemon) {
    setPokemon(pokemonInfo);
    setModal(!modal);
  }

  function handleLoadBtn() {
    setTypeName("");
  }

  if (error) return <Error />;
  if (loading) return <Loading />;

  if (PokedexFilter)
    return (
      <PokedexMain>
        <ContainerCard>
          {PokedexFilter?.pokemon?.map(({ pokemon }) => {
            return (
              <Card
                key={pokemon.name}
                pokeURL={pokemon.url}
                onCardClick={handleClickCard}
              />
            );
          })}
        </ContainerCard>

        <BtnPoke onClick={handleLoadBtn}>Desfiltrar pokes</BtnPoke>
        {modal ? (
          <Modal pokemon={pokemon} modal={modal} setModal={setModal} />
        ) : (
          ""
        )}
      </PokedexMain>
    );
};

export default PokedexByFilter;
