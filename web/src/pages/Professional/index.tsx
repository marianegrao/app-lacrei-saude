import Header from "../../components/Header";
import ProfessionalIcon from "../../assets/profissional-icon.svg";
import { HomeContainer, Main } from "./style";
import { Paragraph, Title } from "../../styles/GlobalComponentsStyles/components";
import Footer from "../../components/Footer";

export default function Professional() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Main>
          <Title>Profissional</Title>
          <Paragraph>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais
            de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
          </Paragraph>
        </Main>
        <div>
          <img src={ProfessionalIcon} alt="Profissionais da saúde" />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}
