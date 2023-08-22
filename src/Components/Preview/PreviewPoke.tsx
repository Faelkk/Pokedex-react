import { useEffect, useState } from "react";
import load from "../../assets/load-pokeball.gif";
import ash from "../../assets/ash-2.png";
import {
  PreviewContainer,
  LogoContainer,
  LogoImage,
  PreviewCard,
  LoadContainer,
  LoadImage,
  PreviewInfo,
  PokemonID,
  PokemonName,
  PokemonTypes,
  PreviewPokemon,
  PreviewPokemonImage,
  PreviewSection,
  ContainerBtns,
  ContainerCard,
} from "./Style";
import { use_pokePreview } from "../../Hooks/FetchApi";
import Modal from "../Modal/Modal";

const PreviewPoke = () => {
  const arrayPrevsNumber = [
    10104, 10059, 144, 248, 257, 658, 553, 625, 445, 493, 245, 700, 655, 643,
    717, 384, 471, 150, 131, 701,
  ];
  const { pokemonPreview, loading, fetchPokeInfo } = use_pokePreview();
  const [modal, setModal] = useState(false);

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * arrayPrevsNumber.length);
    fetchPokeInfo(arrayPrevsNumber[randomIndex]);
  };

  useEffect(() => {
    getRandomIndex();
    const interval = setInterval(getRandomIndex, 8000);

    return () => clearInterval(interval);
  }, []);

  function handleClick() {
    setModal(!modal);
  }

  return (
    <PreviewSection>
      <PreviewContainer>
        <LogoContainer>
          <LogoImage src={ash} alt="Ash" />
        </LogoContainer>

        {loading ? (
          <ContainerCard>
            <PreviewCard>
              <LoadContainer className="animate">
                <LoadImage src={load} alt="load" />
              </LoadContainer>
            </PreviewCard>
          </ContainerCard>
        ) : pokemonPreview && pokemonPreview.name ? (
          <>
            <ContainerCard onClick={handleClick}>
              <PreviewCard
                className={`animate card${pokemonPreview.types[0].type.name}`}
              >
                <PreviewInfo>
                  <PokemonID>#{pokemonPreview.id}</PokemonID>
                  <PokemonName>{pokemonPreview.name}</PokemonName>
                  <ContainerBtns>
                    {pokemonPreview.types.map(({ type }) => (
                      <PokemonTypes key={type.name} className={type.name}>
                        {type.name}
                      </PokemonTypes>
                    ))}
                  </ContainerBtns>
                </PreviewInfo>
                <PreviewPokemon>
                  <PreviewPokemonImage
                    src={pokemonPreview.sprites.other.home.front_default}
                    alt={pokemonPreview.name}
                  />
                </PreviewPokemon>
              </PreviewCard>
            </ContainerCard>
            {modal && (
              <Modal
                pokemon={pokemonPreview}
                modal={modal}
                setModal={setModal}
              />
            )}
          </>
        ) : (
          <PreviewCard>
            <LoadContainer>
              <LoadImage src={load} alt="load" />
            </LoadContainer>
          </PreviewCard>
        )}
      </PreviewContainer>
    </PreviewSection>
  );
};

export default PreviewPoke;
