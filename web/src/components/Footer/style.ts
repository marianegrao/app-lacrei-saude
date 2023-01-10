import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 90vw;
  gap: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: 600px) {
    justify-content: space-between;
    gap: 2rem;
  }
`;

export const Divisor = styled.div`
  display: flex;

  width: 100%;
  border-top: 0.1rem solid ${THEME.COLORS.SECONDARY};
  margin-top: 3.5rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 600px) {
    margin-top: 2.2rem;
  }
`;

export const NavViewsPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    a {
      font-size: ${THEME.FONT_SIZE.TEXT_SM}rem;
      color: ${THEME.COLORS.SHAPE_700};
      text-decoration: none;
      :hover {
        opacity: 0.7;
      }
    }

    @media screen and (min-width: 600px) {
      flex-direction: row;
      gap: 4rem;
      a {
        font-size: ${THEME.FONT_SIZE.TEXT_BASE}rem;
      }
    }
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
