import Header from "../../components/Header";
import HomeIcon from "../../assets/home-icon.svg";
import { HomeContainer } from "./style";
import Buttons from "../../components/Buttons";
import { Container, Paragraph, Title } from "../../styles/GenericComponentsStyles/components";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <section>
          <Title>Boas vindas a Lacrei Saúde</Title>
          <Paragraph>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Paragraph>
          <nav>
            <Buttons filled={true} label="Pessoa Usuária" to="/pessoa-usuaria" />
            <Buttons label="Profissional" to="/profissional" />
          </nav>
        </section>
        <img src={HomeIcon} alt="Um profissional da saúde" />
      </main>
      <Footer />
    </Container>
  );
}

/*
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
*/
