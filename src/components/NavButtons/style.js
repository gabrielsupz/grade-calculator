import styled from 'styled-components'

export const NavButtons = styled.div`
  @media screen and (max-width: 320px) {
    max-width: 31rem;
  }
  display: flex;
  width: 100%;

  justify-content: space-between;

  button.active {
    border: 1px solid var(--text-color);

    background: rgb(66, 66, 71);
    background: radial-gradient(
      circle,
      rgba(66, 66, 71, 1) 16%,
      rgba(44, 44, 49, 1) 76%
    );
    transition: 0.7s;
  }
  button {
    background: rgb(44, 44, 49);
    background: radial-gradient(
      circle,
      rgba(44, 44, 49, 1) 7%,
      rgba(31, 31, 34, 1) 96%
    );
    @media screen and (max-width: 320px) {
      width: 15rem;
      padding: 1.5rem 1rem;
    }
    @media screen and (max-width: 450px) {
      width: 20rem;
      padding: 1.5rem 1rem;
    }
    @media screen and (max-width: 425px) {
      width: 18rem;
      padding: 1.5rem 2rem;
    }

    @media screen and (max-width: 375px) {
      width: 16rem;
      padding: 1.5rem 2rem;
    }
    @media screen and (max-width: 325px) {
      width: 15rem;
      padding: 1.5rem 2rem;
    }
  }
`
