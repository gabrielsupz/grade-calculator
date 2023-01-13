import styled from 'styled-components'

export const GradeBox = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  input {
    font-size: 2rem;
    width: 4.5rem;
    height: 3.5rem;
    border-radius: 4px;
    background: rgb(44, 44, 49);
    background: linear-gradient(
      54deg,
      rgba(44, 44, 49, 1) 0%,
      rgba(72, 72, 76, 1) 38%,
      rgba(108, 108, 111, 1) 100%
    );
    text-align: center;
    align-items: center;
    margin: auto;
  }
  label {
    font-size: 2rem;
    font-weight: 400;
  }
`
