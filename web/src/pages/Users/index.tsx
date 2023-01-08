import Header from "../../components/Header";
import UsersIcon from "../../assets/pessoa-usuaria-icon.svg";
import { HomeContainer, Main } from "./style";
import { Paragraph, Title } from "../../styles/GlobalComponentsStyles/components";
import Footer from "../../components/Footer";

export default function Users() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Main>
          <Title>Pessoa Usuária</Title>
          <Paragraph>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais
            de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
          </Paragraph>
        </Main>
        <div>
          <img src={UsersIcon} alt="Pessoas usando celular" />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}
