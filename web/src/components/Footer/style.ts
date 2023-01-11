import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 90%;
  gap: 1rem;
  padding-bottom: 1rem;
  padding-top: 4rem;
  border-top: 0.1rem solid ${THEME.COLORS.SECONDARY};

  @media screen and (min-width: 300px) {
    padding-top: 1rem;
    margin-top: 6rem;
  }

  @media screen and (min-width: 600px) {
    justify-content: space-between;
    gap: 2rem;
    padding-top: 2rem;
    margin-top: 2rem;
  }
`;

export const FooterSpan = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  span {
    color: ${THEME.COLORS.SHAPE_400};
    font-size: ${THEME.FONT_SIZE.TEXT_XS}rem;
  }
`;
