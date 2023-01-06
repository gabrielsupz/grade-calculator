import styled from 'styled-components'

export const EverythingBox = styled.div`
  width: 100%;
  background-color: var(--bg-cards);
  border: none;
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  align-items: center;

  #submitModelButton {
    color: var(--response-color);
    border-color: var(--response-color);
    transition: 0.2s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  }
  #submitModelButton:active {
    color: var(--response-click-color);
    border-color: var(--response-click-color);
    background-color: var(--bg-active-button);
  }
`
export const GradeWeightLabel = styled.label`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    font-size: 2rem;
    width: 4rem;
    height: 3.5rem;
    border-radius: 10px;
    background-color: var(--bg-input);
    text-align: center;
    align-items: center;
    margin: auto;
  }

  font-size: 1.8rem;
  font-weight: 400;
`

export const FormInputsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const GradeWeightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const ModelAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  gap: 2rem;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`
export const FormBox = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  fieldset {
    width: 100%;
    height: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  legend {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }
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

  select {
    background-color: #846a6a;
    border-radius: 4px;
    border: 1.5px solid var(--body-bg-color);
    padding-left: 1rem;
    font-size: 1.6rem;
  }
`
export const NameInput = styled.input`
  border: 1px solid black;
  box-shadow: none;
  -webkit-box-shadow: 0 0 0px 1000px var(--bg-input) inset;
  -webkit-text-fill-color: var(--text-color);
  transition: background-color 5000s ease-in-out 0s;
  border-radius: 4px;
  width: 17rem;
  font-size: 1.6rem;
  color: var(--text-color);
  text-align: center;
  text-shadow: -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black,
    1px 0px 0px black;
  background-color: var(--bg-input);
  padding: 0.8rem 2rem;
`
