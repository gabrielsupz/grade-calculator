import styled from 'styled-components'

export const SectionStyled = styled.section`
  @media screen and (max-width: 1065px) {
    height: 67rem;
  }

  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  max-height: 67rem;

  h1 {
    font-size: 3.4rem;
    font-weight: 700;
  }
  @media screen and (max-width: 500px) {
    max-width: 45rem;
  }
  @media screen and (max-width: 425px) {
    max-width: 40rem;
  }
  @media screen and (max-width: 400px) {
    max-width: 37rem;
  }
  @media screen and (max-width: 375px) {
    max-width: 35rem;
  }
  @media screen and (max-width: 350px) {
    max-width: 31rem;
  }

  div.divWithBackground {
    @media screen and (max-width: 375px) {
      padding: 5rem 1.5rem 2rem 1.5rem;
    }
    background-color: var(--bg-cards);

    height: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5rem 4.5rem 2rem 4.5rem;
  }
`
export const NoteBox = styled.div`
  input {
    width: 3rem;
  }
`
