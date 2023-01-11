import { useLocation, Link } from "react-router-dom";
import { ContainerNavViewsPage } from "./style";
import { pages } from "../../../../data/navigations";

export default function NavViewsPage() {
  const location = useLocation();

  return (
    <ContainerNavViewsPage>
      <nav>
        {pages.map((page) => (
          <Link
            key={page.to}
            to={page.to}
            style={location.pathname === page.to ? { fontWeight: "bold" } : {}}
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </ContainerNavViewsPage>
  );
}
