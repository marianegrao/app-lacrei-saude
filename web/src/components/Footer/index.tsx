import { FooterContainer } from "./style";
import { useLocation, Link } from "react-router-dom";
import NavSocialMedia from "../NavSocialMedia";

const links = [
  { label: "Home", to: "/" },
  { label: "Pessoa Usuária", to: "/pessoa-usuaria" },
  { label: "Profissional", to: "/profissional" },
];

export default function Footer() {
  const location = useLocation();
  return (
    <FooterContainer>
      <div></div>

      <nav>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={location.pathname === link.to ? { fontWeight: "bold" } : {}}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <NavSocialMedia />

      <span>Desafio Front-end Lacrei</span>
    </FooterContainer>
  );
}

// <InstagramLogo size={32} weight="light" />
