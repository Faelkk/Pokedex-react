import styled from "styled-components";

export const ContainerModal = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
`;
export const ModalWindow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  max-width: 1030px;
  margin: 0 auto;
  align-items: center;
  background: rgb(18, 18, 18);
  padding: 25px;
  border-radius: 3px;
  position: relative;

  @media (max-width: 1120px) {
    flex-direction: column;
    width: 65%;
  }
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (max-width: 724px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    justify-content: center;

    background: rgb(18, 18, 18);
    padding: 0px;
  }
`;
export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerRight = styled.div`
  width: 65%;
  @media (max-width: 1120px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const ImagePoke = styled.img`
  width: 150px;
  height: 150px;
  max-height: 150px;
  max-width: 150px;
`;
export const ContainerNames = styled.span`
  margin-top: 1rem;
  font-size: 2rem;
  display: flex;
  gap: 1.2rem;
`;
export const SpanName = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
`;
export const ContainerTypes = styled.div`
  margin: 1.2rem 0px;
  display: flex;
  gap: 2rem;
`;
export const SpanType = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  padding: 5px;
  width: 6rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: capitalize;
  border-radius: 2px;
`;
export const ContainerDescription = styled.span`
  display: flex;
  gap: 2rem;
  margin: 1rem 0px;
  @media (max-width: 470px) {
    margin: 2rem 0px;
  }
`;
export const DescriptionDiv = styled.div`
  display: flex;
  gap: 0.2rem;
`;
export const ImgIcon = styled.img``;
export const SpanInfo = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  font-weight: bold;
`;
export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.4rem;
`;
export const StatsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem;
  padding: 0.2rem;
`;
export const SpanNameStats = styled.span`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  width: 80px;
  @media (max-width: 1110px) {
    width: 120px;
  }
`;
export const SpanNumberStats = styled.span`
  font-family: "Merriweather Sans", sans-serif;
  color: #fff;
  font-weight: bold;
  width: 40px;
  margin-left: 1rem;
  @media (max-width: 1120px) {
    margin: 0px 1.2rem;
  }
`;
export const LineStats = styled.span`
  display: flex;
  -webkit-box-pack: justify;
  align-items: center;
  margin: 0.2rem;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
  background: rgb(85, 85, 85);
  overflow: hidden;
`;
interface statsType {
  base_stat: number;
}
export const GrapichStats = styled.div<statsType>`
  height: 0.5rem;
  border-radius: 0.25rem;
  animation: statAnimation 2s forwards;
  transform: translate3d(-100%, 0, 0);
  width: ${(props) =>
    props.base_stat >= 100 ? "100%" : `${props.base_stat}%`};
  background: ${(props) => (props.base_stat >= 50 ? "#00ff08" : "#ff0000")};

  @keyframes statAnimation {
    to {
      transform: initial;
    }
  }
`;
export const CloseModal = styled.img`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 4px;
  @media (max-width: 500px) {
    top: 40px;
  }
`;
