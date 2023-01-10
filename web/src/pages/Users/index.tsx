import Header from "../../components/Header";
import UsersIcon from "../../assets/pessoa-usuaria-icon.svg";
import { HomeContainer, Main } from "./style";
import { Container, Paragraph, Title } from "../../styles/GenericComponentsStyles/components";
import Footer from "../../components/Footer";

export default function Users() {
  return (
    <Container>
      <Header />
      <main>
        <section>
          <Title>Pessoa Usuária</Title>
          <Paragraph>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais
            de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
          </Paragraph>
        </section>
        <img src={UsersIcon} alt="Pessoas usando celular" />
      </main>
      <Footer />
    </Container>
  );
}
