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
const fromBotton = keyframes`
from {
  opacity: 0;
  transform: translatey(50px);
}
to {
  opacity: 1;
  transform: translatey(0);
}
`
const fromRight = keyframes`
from {
  opacity: 0;
  transform: translatex(100px);
}
to {
  opacity: 1;
  transform: translatex(0);
}
`

export const EverythingBox = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ul {
    width: 100%;
    height: 100%;
  }
  li {
    list-style: none;
  }

  div.pessoalModelInputs {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  width: 100%;

  border: none;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  align-items: center;

  h2 {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #submitModelButton {
    transition: 0.3s;
    color: var(--response-color);
    background: rgb(44, 44, 49);
    background: linear-gradient(
      54deg,
      rgba(44, 44, 49, 1) 8%,
      rgba(32, 32, 36, 1) 51%,
      rgba(18, 18, 20, 1) 100%
    );
    border-color: var(--response-color);
    transition: 0.2s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
    animation: ${fromBotton} 0.7s backwards;
    animation-delay: 1.4s;
  }
  #submitModelButton:active {
    transition: 0.3s;
    color: var(--text-color);
    border-color: var(--text-color);
    background: var(--bg-active-button);
    position: bottom;
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

  font-size: 1.8rem;
  font-weight: 400;
`

export const FormInputsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const GradeWeightBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 23.3rem;
  animation: ${fromLeft} 0.7s backwards;
  justify-content: center;
`
export const ModelAndName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  gap: 2rem;
  align-items: center;
  animation: ${fromRight} 0.7s backwards;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    font-size: 1.8rem;
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
    background: rgb(44, 44, 49);
    background: linear-gradient(
      317deg,
      rgba(44, 44, 49, 1) 0%,
      rgba(98, 46, 48, 1) 21%,
      rgba(119, 51, 51, 1) 100%
    );
    background-color: rgb(44, 44, 49);
    border-radius: 4px;
    border: 1.5px solid var(--body-bg-color);
    padding-left: 1rem;
    font-size: 1.6rem;
  }

  h3:nth-child(1) {
    animation: ${fromLeft} 0.7s backwards;
    animation-delay: 0.2s;
  }

  label:nth-child(5) {
    animation: ${fromLeft} 0.7s backwards;
    animation-delay: 0.4s;
  }
  label:nth-child(4) {
    animation: ${fromLeft} 0.7s backwards;
    animation-delay: 0.6s;
  }
  label:nth-child(3) {
    animation: ${fromLeft} 0.7s backwards;
    animation-delay: 0.8s;
  }
  label:nth-child(2) {
    animation: ${fromLeft} 0.7s backwards;
    animation-delay: 1s;
  }
  label:nth-child(1) {
    animation: ${fromLeft} 0.7s backwards;
    animation-delay: 1.2s;
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
  animation: ${fromRight} 0.7s backwards;
`
