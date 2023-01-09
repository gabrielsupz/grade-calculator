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
  transform: translatey(100px);
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
  ul {
    width: 100%;
    height: 100%;
  }
  li {
    list-style: none;
  }

  width: 100%;
  background-color: var(--bg-cards);
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
    color: var(--response-color);
    border-color: var(--response-color);
    transition: 0.2s;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
    animation: ${fromBotton} 0.7s backwards;
    animation-delay: 1.4s;
  }
  #submitModelButton:active {
    color: var(--response-click-color);
    border-color: var(--response-click-color);
    background-color: var(--bg-active-button);
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
  min-height: 23.3rem;
  animation: ${fromLeft} 0.7s backwards;
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
