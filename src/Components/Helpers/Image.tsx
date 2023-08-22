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
  animation: skeleton 1.5s infinite linear;

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

  &.pokeModal {
    width: 150px;
    max-width: 150px;
    height: 150px;
    max-height: 150px;
  }
  &.PokePreview {
    width: 360px;
    max-width: 360px;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(0 0 0.75rem rgb(57, 55, 56));

    @media (max-width: 1020px) {
      width: 300px;
      max-width: 300px;
    }

    @media (max-width: 624px) {
      width: 250px;
      max-width: 250px;
    }
  }
`;

interface TypeAlt {
  src?: string;
  id?: string;
  key?: string | number;
  onClick?: () => void;
  className?: string;
  alt?: string;
}

const Image: React.FC<TypeAlt> = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  function handleLoad(event: React.ChangeEvent<HTMLImageElement>) {
    setIsLoading(false);
    event.target.style.opacity = "1";
  }

  return (
    <Wrapper>
      {isLoading && <Skeleton></Skeleton>}
      <ImgCard
        className={className}
        onLoad={handleLoad}
        src={src}
        alt={alt}
        {...props}
      />
    </Wrapper>
  );
};

export default Image;
