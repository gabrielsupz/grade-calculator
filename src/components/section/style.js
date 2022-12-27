import styled from 'styled-components'

export const SectionStyled = styled.section`
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
    background-color: var(--bg-cards);

    height: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5rem 3.5rem 2rem 3.5rem;
  }
`
export const NoteBox = styled.div`
  input {
    width: 3rem;
  }
`
