import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const ButtonFilled = styled.button`
  width: 70%;
  padding: 1rem 0rem;

  outline: 0;
  border: 0;
  cursor: pointer;

  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;

  font-weight: bold;
  font-size: ${THEME.FONT_SIZE.TEXT_LG}rem;
  font-family: ${THEME.FONT_FAMILY.NUNITO};

  background-color: ${THEME.COLORS.PRIMARY};
  color: ${THEME.COLORS.BACKGROUND};
  :hover {
    opacity: 0.7;
  }
`;

export const ButtonUnfilled = styled.button`
  width: 70%;
  padding: 1rem 0rem;
  border: 0;
  outline: 0.2rem solid ${THEME.COLORS.PRIMARY};

  cursor: pointer;

  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;

  font-weight: bold;
  font-size: ${THEME.FONT_SIZE.TEXT_LG}rem;
  font-family: ${THEME.FONT_FAMILY.NUNITO};

  background-color: ${THEME.COLORS.BACKGROUND};
  color: ${THEME.COLORS.PRIMARY};
  :hover {
    opacity: 0.7;
  }
`;
