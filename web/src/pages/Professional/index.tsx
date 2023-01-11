import Header from "../../components/Header";
import ProfessionalIcon from "../../assets/profissional-icon.svg";
import {
  Container,
  Paragraph,
  Title,
  ParagraphContainer,
} from "../../styles/GenericComponentsStyles/components";
import Footer from "../../components/Footer";

export default function Professional() {
  return (
    <Container>
      <Header />
      <main>
        <section>
          <Title>Profissional</Title>
          <ParagraphContainer>
            <Paragraph>
              Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se
              comprometam com o bem-estar da comunidade LGBTQIAPN+
            </Paragraph>
          </ParagraphContainer>
        </section>
        <img src={ProfessionalIcon} alt="Profissionais da saúde" />
      </main>
      <Footer />
    </Container>
  );
}
