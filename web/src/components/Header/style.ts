import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  padding: 1rem 0rem;
  margin-bottom: 2rem;

  background-color: ${THEME.COLORS.HEADER};

  h1 {
    color: ${THEME.COLORS.PRIMARY};
    font-size: ${THEME.FONT_SIZE.TEXT_3XLG}rem;
  }

  nav {
    display: flex;
    gap: 2rem;
  }

  a {
    text-decoration: none;
    color: ${THEME.COLORS.SHAPE_700};
    font-size: ${THEME.FONT_SIZE.TEXT_SM}rem;
    font-weight: bold;
    :hover {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: row;
    padding: 0.8rem 6.4rem;
    margin-bottom: 5rem;
    nav {
      gap: 4rem;
    }
    a {
      font-size: ${THEME.FONT_SIZE.TEXT_BASE}rem;
    }
  }
`;
