import styled from 'styled-components'

export const SectionStyled = styled.section`
  background-color: var(--body-bg-color);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100%;
  max-height: 67rem;
  header {
    background-color: var(--bg-cards);
    display: flex;
    flex-direction: row;
    gap: 2rem;
    padding: 2.6rem 3.8rem;
    align-items: center;
    border-radius: 4px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  h1 {
    font-size: 3.4rem;
    font-weight: 700;
  }

  #buttonSpace {
    display: flex;
    width: 100%;

    justify-content: space-between;

    button.active {
      border: 1px solid var(--text-color);
      background-color: var(--bg-active-button);
      transition: 0.5s;
    }
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
