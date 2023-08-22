import { useState } from "react";
import { useApi } from "../../Hooks/FetchApi";
import { Pokemon } from "../../Types/Type";
import Loading from "../Helpers/Loading";
import Card from "../Cards/Card";
import { PokedexMain, ContainerCard, BtnPoke } from "../Cards/Style";
import Modal from "../Modal/Modal";
import Error from "../Helpers/Error";

const Pokedex = () => {
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(30);

  const { pokedex, loading, error } = useApi(limit);
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  function handleClickCard(pokemonInfo: Pokemon) {
    setPokemon(pokemonInfo);
    setModal(!modal);
  }

  function handleLoadBtn() {
    setLimit(limit + 30);
  }

  if (error) return <Error />;
  if (pokedex)
    return (
      <PokedexMain>
        <ContainerCard>
          {pokedex.map((pokemon) => {
            return (
              <Card
                key={pokemon.name}
                pokeURL={pokemon.url}
                onCardClick={handleClickCard}
              />
            );
          })}
        </ContainerCard>
        {loading ? (
          <Loading />
        ) : (
          <BtnPoke onClick={handleLoadBtn}>Carregar mais</BtnPoke>
        )}

        {modal ? (
          <Modal pokemon={pokemon} modal={modal} setModal={setModal} />
        ) : (
          ""
        )}
      </PokedexMain>
    );
};

export default Pokedex;
