import styled from "styled-components";

import iconBtnTop from "../../assets/arrow-up.svg";
import iconBtnBot from "../../assets/arrow_downward_alt_FILL0_wght400_GRAD0_opsz48.svg";
const ImgBtn = styled.img`
  width: 40px;
  border-radius: 3px;
  z-index: 10;
  cursor: pointer;
`;

const ContainerBtn = styled.div`
  display: flex;
  position: fixed;
  bottom: 4px;
  right: 4px;
  gap: 1rem;
`;
const BtnTop = () => {
  function handleTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleBot() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <ContainerBtn>
      <ImgBtn src={iconBtnTop} alt="Suba para o topo" onClick={handleTop} />
      <ImgBtn src={iconBtnBot} alt="Desça tudo" onClick={handleBot} />
    </ContainerBtn>
  );
};

export default BtnTop;
