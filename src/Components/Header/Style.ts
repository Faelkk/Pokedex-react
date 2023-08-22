import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;
export const TitleLogo = styled.h1`
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  letter-spacing: 0.1rem;
`;
export const MediaSocials = styled.ul`
  display: flex;
  gap: 1.2rem;
`;
export const IconLi = styled.a`
  &:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }
`;
export const IconSocial = styled.img`
  width: 25px;
`;
