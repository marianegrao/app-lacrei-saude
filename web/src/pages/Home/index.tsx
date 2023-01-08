import Header from "../../components/Header";
import HomeIcon from "../../assets/home-icon.svg";
import { HomeContainer, Main } from "./style";
import Buttons from "../../components/Buttons";
import { Paragraph, Title } from "../../styles/GlobalComponentsStyles/components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Main>
          <Title>Boas vindas a Lacrei Saúde</Title>
          <Paragraph>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Paragraph>
          <nav>
            <Link to="/pessoa-usuaria">
              <Buttons filled={true} label="Pessoa Usuária" />
            </Link>
            <Link to="/profissional">
              <Buttons label="Profissional" />
            </Link>
          </nav>
        </Main>
        <div>
          <img src={HomeIcon} alt="Imagem de um profissional da saúde" />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}
