import { THEME } from "../theme";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${THEME.FONT_SIZE.TEXT_2XLG}rem;
  font-weight: bold;

  @media screen and (min-width: 600px) {
    font-size: ${THEME.FONT_SIZE.TEXT_3XLG}rem;
  }

  @media screen and (min-width: 1040px) {
    font-size: ${THEME.FONT_SIZE.TEXT_4XLG}rem;
  }
`;

export const Paragraph = styled.p`
  font-size: ${THEME.FONT_SIZE.TEXT_SM}rem;
  color: ${THEME.COLORS.SHAPE_400};

  @media screen and (min-width: 600px) {
    font-size: ${THEME.FONT_SIZE.TEXT_XLG}rem;
  }

  @media screen and (min-width: 1040px) {
    font-size: ${THEME.FONT_SIZE.TEXT_2XLG}rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;

    nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      width: 100%;
      margin: 6rem 0rem;
    }
  }

  @media screen and (min-width: 1040px) {
    main {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      section {
        display: flex;
        flex-direction: column;
        width: 40%;
        gap: 2rem;
      }
      nav {
        flex-direction: row;
        gap: 5rem;
        width: 90%;
      }
      img {
        min-width: 40rem;
        min-height: 40rem;
      }
    }
  }
`;

export const ParagraphContainer = styled.div`
  padding-top: 2rem;
  padding-bottom: 5rem;
  p {
    border-left: 0.5rem solid ${THEME.COLORS.PRIMARY};
    padding-left: 1.5rem;
  }
`;
