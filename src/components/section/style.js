import styled from 'styled-components'

export const SectionStyled = styled.section`
  @media screen and (max-width: 1065px) {
    height: 67rem;
  }
  background-color: var(--body-bg-color);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;

  max-height: 67rem;

  h1 {
    font-size: 3.4rem;
    font-weight: 700;
  }

  div.divWithBackground {
    @media screen and (max-width: 610px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
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
