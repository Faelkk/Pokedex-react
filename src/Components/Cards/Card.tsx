import {
  BtnMoreInformation,
  CardPokemon,
  ContainerDescription,
  ContainerNames,
  ContainerTypes,
  DivDescription,
  IconDescription,
  ImgPoke,
  PokeInfo,
  SpanDescription,
  SpanType,
} from "./Style";
import { usePokemon } from "../../Hooks/FetchApi";
import imgWeight from "../../assets/icon-weight.svg";
import imgRuler from "../../assets/icon-ruler.svg";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
import { TypeCard } from "../../Types/Type";

const Card: React.FC<TypeCard> = ({ pokeURL, onCardClick }) => {
  const { pokemon, loading, error } = usePokemon(pokeURL);
  const imgPoke =
    pokemon?.sprites.other.dream_world.front_default ||
    pokemon?.sprites.other["official-artwork"].front_default;

  if (error) return <Error />;
  if (loading) <Loading />;
  if (pokemon)
    return (
      <CardPokemon onClick={() => onCardClick(pokemon)}>
        <ImgPoke src={imgPoke} alt={`${pokemon.name} imagem`} />

        <ContainerNames>
          <PokeInfo>{`#${pokemon?.id}`}</PokeInfo>
          <PokeInfo>{pokemon?.name}</PokeInfo>
        </ContainerNames>
        <ContainerTypes>
          {pokemon?.types.map((type) => (
            <SpanType key={type.type.name} className={type.type.name}>
              {type.type.name}
            </SpanType>
          ))}
        </ContainerTypes>
        <ContainerDescription>
          <DivDescription>
            <IconDescription src={imgRuler} alt="medida altura" />
            <SpanDescription>{`Altura: ${
              pokemon?.height / 10
            } m`}</SpanDescription>
          </DivDescription>
          <DivDescription>
            <IconDescription src={imgWeight} alt="peso icon" />
            <SpanDescription>{`Peso: ${
              pokemon?.weight / 10
            } kg`}</SpanDescription>
          </DivDescription>
        </ContainerDescription>

        <BtnMoreInformation className={pokemon?.types[0].type.name}>
          Saiba mais
        </BtnMoreInformation>
      </CardPokemon>
    );
};

export default Card;
