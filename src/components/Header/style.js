import styled from 'styled-components'

export const StyleHeader = styled.header`
  background: rgb(44, 44, 49);
  background: radial-gradient(
    circle,
    rgba(44, 44, 49, 1) 7%,
    rgba(31, 31, 34, 1) 96%
  );
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2.6rem 3.8rem;
  align-items: center;
  border-radius: 4px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
