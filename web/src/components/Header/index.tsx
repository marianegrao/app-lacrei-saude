import { THEME } from "../../styles/theme";
import { HeaderContainer } from "./style";
import { useLocation, Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Pessoa Usuária", to: "/pessoa-usuaria" },
  { label: "Profissional", to: "/profissional" },
];

export default function Header() {
  const location = useLocation();
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Lacrei</h1>
      </Link>
      <nav>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={location.pathname === link.to ? { color: `${THEME.COLORS.PRIMARY}` } : {}}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </HeaderContainer>
  );
}
