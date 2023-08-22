import { styled } from "styled-components";
const ContainerError = styled.div`
  display: flex;
`;
const SpanError = styled.span`
  width: 150px;
  height: 150px;
  background-image: linear-gradient(
    90deg,
    rgb(36, 41, 63) 0px,
    rgb(6, 11, 40) 50%,
    rgb(36, 41, 63) 100%
  );
  background-color: rgb(238, 238, 238);
  background-size: 200%;
  animation: 1.5s linear 0s infinite normal none running skeleton;
  border-radius: 50%;
`;
interface typeImage {
  className: string;
}
export const ErrorImage: React.FC<typeImage> = ({ className }) => {
  return (
    <ContainerError>
      <SpanError className={className}></SpanError>
    </ContainerError>
  );
};
