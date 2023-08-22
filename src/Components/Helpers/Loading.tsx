import styled from "styled-components";
const PokeCenter = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Pokeball = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #fff;
  border: 10px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: fall 0.25s ease-in-out,
    shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }

    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }

    30% {
      transform: translate(10px, 0) rotate(20deg);
    }

    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }

    60% {
      transform: translate(10px, 0) rotate(10deg);
    }

    100% {
      transform: translate(0, 0) rotate(0);
    }
  }

  @keyframes fall {
    0% {
      top: -200px;
      opacity: 0.5;
    }

    60% {
      top: 0;
      opacity: 1;
    }

    80% {
      top: -20px;
    }

    100% {
      top: 0;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }
`;

const Pokeball_button = styled.div`
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  background: #7f8c8d;
  border: 10px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: blink 0.5s infinite;

  @keyframes blink {
    from {
      background: #eee;
    }

    to {
      background: #e74c3c;
    }
  }
`;

const Loading = () => {
  return (
    <PokeCenter>
      <Pokeball>
        <Pokeball_button></Pokeball_button>
      </Pokeball>
    </PokeCenter>
  );
};
export default Loading;
