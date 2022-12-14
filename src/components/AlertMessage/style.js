import styled from 'styled-components'

export const AlertBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-cards);
  border-radius: 10px;
  padding: 3rem 2rem 1rem 2rem;

  width: 25rem;
  text-align: center;

  svg {
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`
