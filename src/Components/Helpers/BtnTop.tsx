import styled from "styled-components";

const ImgBtn = styled.img`
  width: 40px;
  position: fixed;
  bottom: 4px;
  right: 4px;
  border-radius: 3px;
  z-index: 10;
  cursor: pointer;
`;
import iconBtn from "../../assets/arrow-up.svg";
const BtnTop = () => {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <ImgBtn src={iconBtn} onClick={handleClick} />;
};

export default BtnTop;
