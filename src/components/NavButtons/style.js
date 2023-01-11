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
    background-color: var(--bg-active-button);
    transition: 1s;
  }
  button {
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
