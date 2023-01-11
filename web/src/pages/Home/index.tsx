import Header from "../../components/Header";
import HomeIcon from "../../assets/home-icon.svg";
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
