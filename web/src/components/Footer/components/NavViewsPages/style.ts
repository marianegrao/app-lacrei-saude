import styled from "styled-components";
import { THEME } from "../../../../styles/theme";

export const ContainerNavViewsPage = styled.div`
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
