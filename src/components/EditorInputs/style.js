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

  width: 100%;
  gap: 1rem;
  border: none;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  align-items: center;

  ul {
    p {
      display: flex;
      background-image: linear-gradient(
        320deg,
        rgba(148, 129, 141, 1) 8%,
        rgba(227, 126, 135, 1) 50%,
        rgba(221, 86, 93, 1) 82%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;
      width: 100%;
      font-size: 1.6rem;
      text-align: center;
      justify-content: center;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
    width: 100%;
    height: 100%;
    div button:nth-child(1) {
      animation-delay: 0.1s;
    }
    div:nth-child(2) {
      animation-delay: 0.2s;
    }
    div:nth-child(3) {
      animation-delay: 0.3s;
    }
    div:nth-child(4) {
      animation-delay: 0.4s;
    }
    div:nth-child(5) {
      animation-delay: 0.5s;
    }
    div:nth-child(6) {
      animation-delay: 0.6s;
    }
  }

  li {
    list-style: none;
  }

  div.pessoalModelInputs {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    align-items: center;
  }
  h3.closeAndNamePersonalModel {
    display: flex;
    background-image: linear-gradient(
      320deg,
      rgba(75, 75, 84, 1) 0%,
      rgba(114, 97, 104, 1) 0%,
      rgba(126, 104, 110, 1) 33%,
      rgba(145, 116, 120, 1) 44%,
      rgba(165, 128, 130, 1) 73%,
      rgba(194, 145, 145, 1) 100%
    );

    background-clip: text;
    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

    color: black;
    justify-content: space-around;
    width: 100%;
  }
  svg {
    color: var(--text-color);
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
export const ClosePersonalModel = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`

export const personalModel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;
  transition: 0.5s;

  svg {
    transition: 0.5s;
    animation: ${fromRight} 0.7s backwards;
    color: var(--text-color);

    background: rgb(26, 26, 29);
    background: linear-gradient(
      320deg,
      rgba(26, 26, 29, 1) 0%,
      rgba(64, 57, 62, 1) 33%,
      rgba(77, 68, 74, 1) 44%,
      rgba(88, 77, 84, 1) 54%,
      rgba(107, 93, 101, 1) 63%,
      rgba(127, 105, 111, 1) 69%,
      rgba(131, 107, 113, 1) 85%,
      rgba(165, 128, 130, 1) 99%
    );
    border-radius: 100%;
  }
  animation: ${fromLeft} 0.7s backwards;
  #selectPersonalModel {
    transition: 0.5s;

    gap: 1rem;
    justify-content: center;
    background: rgb(75, 75, 84);
    background: linear-gradient(
      320deg,
      rgba(75, 75, 84, 1) 3%,
      rgba(75, 75, 84, 1) 4%,
      rgba(58, 58, 65, 1) 11%,
      rgba(45, 45, 51, 1) 18%,
      rgba(40, 40, 46, 1) 24%,
      rgba(40, 40, 46, 1) 28%,
      rgba(41, 41, 47, 1) 37%,
      rgba(41, 41, 47, 1) 76%,
      rgba(63, 48, 48, 1) 91%,
      rgba(77, 52, 52, 1) 100%
    );
    width: 100%;
    padding: 1.2rem;
    font-size: 1.6rem;
    font-weight: 500;

    border-radius: 4px;
    border: 1px solid rgb(75, 75, 84);
  }
`
