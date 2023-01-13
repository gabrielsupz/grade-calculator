import styled from 'styled-components'

export const stylizedButton = styled.button`
  @media screen and (max-width: 1065px) {
  }
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  background: rgb(66, 66, 71);
  background: radial-gradient(
    circle,
    rgba(66, 66, 71, 1) 16%,
    rgba(44, 44, 49, 1) 76%
  );
  width: 22rem;
  padding: 1.5rem 5rem;
  font-size: 1.6rem;
  font-weight: 500;

  border-radius: 4px;
  border: 1px solid #121214;
`
