import { createGlobalStyle } from "styled-components";
import { THEME } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: ${THEME.FONT_SIZE.TEXT_BASE}rem;
        font-family: ${THEME.FONT_FAMILY.NUNITO};
        background: ${THEME.COLORS.BACKGROUND};
    }
`;
