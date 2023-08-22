import { BtnTypes, BtnsList, ContainerBtn } from "./Style";
import { btnType } from "../../Types/Type";

const BtnsType: React.FC<btnType> = ({ setTypeName }) => {
  const AllTypes = [
    { name: "bug" },
    { name: "dark" },
    { name: "dragon" },
    { name: "electric" },
    { name: "fairy" },
    { name: "fighting" },
    { name: "fire" },
    { name: "flying" },
    { name: "ghost" },
    { name: "grass" },
    { name: "ground" },
    { name: "ice" },
    { name: "normal" },
    { name: "poison" },
    { name: "psychic" },
    { name: "rock" },
    { name: "steel" },
    { name: "water" },
  ];

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = event.currentTarget;
    setTypeName(target.textContent || "");
  }

  return (
    <ContainerBtn>
      <BtnsList>
        {AllTypes.map((Type) => (
          <BtnTypes key={Type.name} onClick={handleClick} className={Type.name}>
            {Type.name}
          </BtnTypes>
        ))}
      </BtnsList>
    </ContainerBtn>
  );
};

export default BtnsType;
