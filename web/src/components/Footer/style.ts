import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 0.8rem 6.4rem;
  gap: 2.4rem;

  div {
    width: 100%;
    border-top: 0.1rem solid ${THEME.COLORS.SECONDARY};
    margin-top: 3.5rem;
  }

  nav {
    display: flex;
    gap: 4rem;
    a {
      color: ${THEME.COLORS.SHAPE_700};
      text-decoration: none;
      :hover {
        opacity: 0.7;
      }
    }
  }

  span {
    color: ${THEME.COLORS.SHAPE_400};
    font-size: ${THEME.FONT_SIZE.TEXT_XS}rem;
  }
`;
