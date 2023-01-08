import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.8rem 6.4rem;
  margin-bottom: 3.2rem;

  background-color: ${THEME.COLORS.HEADER};

  h1 {
    color: ${THEME.COLORS.PRIMARY};
    font-size: ${THEME.FONT_SIZE.TEXT_3XLG}rem;
  }

  nav {
    display: flex;
    gap: 4rem;
  }

  a {
    text-decoration: none;
    color: ${THEME.COLORS.SHAPE_700};
    font-weight: bold;
    :hover {
      opacity: 0.7;
    }
  }
`;
