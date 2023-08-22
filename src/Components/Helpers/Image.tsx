import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
`;

const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background: transparent;
  background-size: 200%;
  height: 150px;
  max-height: 150px;
  animation: skeleton 1.5s infinite linear;
  width: 150px;
  max-width: 150px;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;

const ImgCard = styled.img`
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  width: 150px;
  max-width: 150px;
  height: 150px;
  max-height: 150px;
`;

interface TypeAlt {
  src?: string;
  id?: string;
  key?: string | number;
  onClick?: () => void;
  className?: string;
  alt?: string;
}

const Image: React.FC<TypeAlt> = ({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  function handleLoad(event: React.ChangeEvent<HTMLImageElement>) {
    setIsLoading(false);
    event.target.style.opacity = "1";
  }

  return (
    <Wrapper>
      {isLoading && <Skeleton></Skeleton>}
      <ImgCard onLoad={handleLoad} src={src} alt={alt} {...props} />
    </Wrapper>
  );
};

export default Image;
