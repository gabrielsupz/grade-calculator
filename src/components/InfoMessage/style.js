import styled from 'styled-components'

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background-color: var(--bg-cards);
  width: 22rem;
  border-radius: 10px;
  border: 2px solid var(--text-color);

  text-align: center;

  svg {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`
