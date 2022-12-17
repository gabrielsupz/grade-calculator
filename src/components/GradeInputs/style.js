import styled from 'styled-components'

export const GradeInputBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  gap: 3rem;
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
  }
`

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const respH3 = styled.h3`
  font-size: 2.4rem;
  font-weight: 500;
  color: var(--response-color);
`

export const ResultDiv = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p.blue {
    color: var(--blue-response);
  }

  p.red {
    color: var(--red-response);
  }
`
