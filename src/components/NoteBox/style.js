import styled from 'styled-components'

export const NoteBox = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    font-size: 2rem;
    width: 4.5rem;
    height: 3.5rem;
    border-radius: 4px;
    background-color: var(--bg-input);
    text-align: center;
    align-items: center;
    margin: auto;
  }
  label {
    font-size: 2rem;
    font-weight: 400;
  }
`
