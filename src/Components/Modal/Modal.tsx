import { typePokemon } from "../../Types/Type";
import {
  CloseModal,
  ContainerDescription,
  ContainerLeft,
  ContainerModal,
  ContainerNames,
  ContainerRight,
  ContainerStats,
  ContainerTypes,
  DescriptionDiv,
  GrapichStats,
  ImgIcon,
  LineStats,
  ModalWindow,
  SpanInfo,
  SpanName,
  SpanNameStats,
  SpanNumberStats,
  SpanType,
  StatsDiv,
} from "./Style";

import imgWeight from "../../assets/icon-weight.svg";
import imgRuler from "../../assets/icon-ruler.svg";
import closeImg from "../../assets/close.svg";
import Image from "../Helpers/Image";
import { ErrorImage } from "../Helpers/ErrorImage";

const Modal: React.FC<typePokemon> = ({ pokemon, modal, setModal }) => {
  const imgPoke =
    pokemon?.sprites.other.dream_world.front_default ||
    pokemon?.sprites.other["official-artwork"].front_default;

  return (
    <ContainerModal>
      <ModalWindow>
        <CloseModal
          src={closeImg}
          alt="Clique para fechar"
          onClick={() => setModal(!modal)}
        />
        <ContainerLeft>
          {imgPoke ? (
            <Image src={imgPoke} alt={pokemon?.name} className="pokeModal" />
          ) : (
            <ErrorImage className="modal" />
          )}

          <ContainerNames>
            <SpanName> {`#${pokemon?.id}`}</SpanName>
            <SpanName> {pokemon?.name}</SpanName>
          </ContainerNames>
          <ContainerTypes>
            {pokemon?.types.map((type) => (
              <SpanType key={type.type.name} className={type.type.name}>
                {type.type.name}
              </SpanType>
            ))}
          </ContainerTypes>
          <ContainerDescription>
            <DescriptionDiv>
              <ImgIcon src={imgRuler} alt="peso medida" />
              {pokemon?.height !== undefined && (
                <SpanInfo>{`Altura: ${pokemon?.height / 10} m`}</SpanInfo>
              )}
            </DescriptionDiv>
            <DescriptionDiv>
              <ImgIcon src={imgWeight} alt="Peso icon" />
              {pokemon?.weight !== undefined && (
                <SpanInfo>{`Peso: ${pokemon?.weight / 10} m`}</SpanInfo>
              )}
            </DescriptionDiv>
          </ContainerDescription>
        </ContainerLeft>
        <ContainerRight>
          <ContainerStats>
            {pokemon?.stats.map((stats) => {
              return (
                <StatsDiv key={stats.stat.name}>
                  <SpanNameStats>{stats.stat.name}</SpanNameStats>
                  <SpanNumberStats>{stats.base_stat}</SpanNumberStats>
                  <LineStats>
                    <GrapichStats base_stat={stats.base_stat}></GrapichStats>
                  </LineStats>
                </StatsDiv>
              );
            })}
          </ContainerStats>
        </ContainerRight>
      </ModalWindow>
    </ContainerModal>
  );
};

export default Modal;
