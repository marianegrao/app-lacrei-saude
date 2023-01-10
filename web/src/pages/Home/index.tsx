import Header from "../../components/Header";
import HomeIcon from "../../assets/home-icon.svg";
import { HomeContainer, Main } from "./style";
import Buttons from "../../components/Buttons";
import { Paragraph, Title } from "../../styles/GlobalComponentsStyles/components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <section>
        <Main>
          <Title>Boas vindas a Lacrei Saúde</Title>
          <Paragraph>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Paragraph>
          <nav>
            <div>
              <Link to="/pessoa-usuaria">
                <Buttons filled={true} label="Pessoa Usuária" />
              </Link>
              <Link to="/profissional">
                <Buttons label="Profissional" />
              </Link>
            </div>
          </nav>
        </Main>
        <div>
          <img src={HomeIcon} alt="Um profissional da saúde" />
        </div>
      </section>
      <Footer />
    </HomeContainer>
  );
}
