import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const ContainerSocialMediaNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  a {
    color: ${THEME.COLORS.SHAPE_700};
    text-decoration: none;
    :hover {
      opacity: 0.7;
    }
  }

  svg {
    color: ${THEME.COLORS.PRIMARY};
    width: 32px;
    height: 32px;
    :hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
