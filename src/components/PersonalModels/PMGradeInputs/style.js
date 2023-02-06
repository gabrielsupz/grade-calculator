import styled, { keyframes } from 'styled-components'

const fromLeft = keyframes`
from {
  opacity: 0;
  transform: translatex(-100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`
export const GradeInputBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  div {
    animation: ${fromLeft} 0.7s backwards;
  }
  div:nth-child(2) {
    animation-delay: 1.5s;
  }
`

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    animation: ${fromLeft} 0.7s backwards;
  }

  div:nth-child(5) {
    animation-delay: 0.2s;
  }

  div:nth-child(4) {
    animation-delay: 0.6s;
  }
  div:nth-child(3) {
    animation-delay: 0.9s;
  }
  div:nth-child(2) {
    animation-delay: 1.2s;
  }
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
