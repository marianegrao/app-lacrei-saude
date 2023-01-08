import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 6.4rem;
  padding-right: 6.4rem;
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
  a {
    width: 100%;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 40%;

  p {
    padding-top: 3.2rem;
    padding-bottom: 6rem;
  }
`;
