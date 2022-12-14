import styled from 'styled-components'

export const GradeInputBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`

export const respH3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`
export const ResponseBox = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  width: 4.5rem;
  height: 3.5rem;
  background-color: var(--bg-input);
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const ResultDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
