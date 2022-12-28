import styled from 'styled-components'

export const EverythingBox = styled.div`
  width: 100%;
  background-color: var(--bg-cards);
  border: none;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  justify-content: space-between;

  h2 {
    font-size: 3.2rem;
    font-weight: bold;
  }
  align-items: center;
  #submitModelButton {
    color: var(--response-color);
    border-color: var(--response-color);
  }
`

export const FormInputsBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h3 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--text-color);
    text-align: center;
  }

  label {
    font-size: 1.8rem;
    font-weight: 400;
  }
  width: 100%;
  input {
    border-radius: 4px;
    background-color: var(--bg-input);
  }

  select {
    background-color: #846a6a;
    border-radius: 4px;
    border: 1.5px solid var(--body-bg-color);
    padding-left: 1rem;
    font-size: 1.6rem;
  }
`
