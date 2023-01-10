import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;

    nav {
      display: flex;
      flex-direction: column;
      justify-content: center;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 2rem;
        a {
          width: 100%;
        }
      }
    }

    div {
      img {
        width: 35rem;
        height: 35rem;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 100%;

  p {
    padding-top: 3.2rem;
    padding-bottom: 6rem;
  }
`;
