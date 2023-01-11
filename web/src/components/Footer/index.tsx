import { FooterContainer, FooterSpan } from "./style";
import NavSocialMedia from "./components/NavSocialMedia";
import NavViewsPage from "./components/NavViewsPages";

export default function Footer() {
  return (
    <FooterContainer>
      <NavViewsPage />
      <NavSocialMedia />
      <FooterSpan>
        <span>Desafio Front-end Lacrei</span>
      </FooterSpan>
    </FooterContainer>
  );
}
