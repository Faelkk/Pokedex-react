import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background: transparent;
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
  transition: transitin 0.3s ease;
  width: 150px;
  max-width: 150px;
  animation: skeleton 0.2s ease;
  @keyframes skeleton {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Image = (props: any) => {
  const [isLoading, SetIsLoading] = useState(true);

  function handleLoad(event: React.ChangeEvent<HTMLImageElement>) {
    SetIsLoading(false);
    event.target.style.opacity = "1";
  }
  return (
    <Wrapper>
      {isLoading && <Skeleton></Skeleton>}
      <ImgCard onLoad={handleLoad} {...props} />
    </Wrapper>
  );
};
export default Image;
