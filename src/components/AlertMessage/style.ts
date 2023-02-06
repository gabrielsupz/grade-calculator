import styled, { css } from 'styled-components'

export const Alert = styled.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`
export const AlertRetract = styled.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
  button {
    border: none;
    background: local;
  }
`

export const AlertShowDeskTop = styled.div`
  transition: 0.5s;
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  border-radius: 10px;
  padding: 3rem 2rem 1rem 2rem;
  gap: 1rem;
  width: 25rem;
  text-align: center;

  svg {
    width: 3rem;
    height: 3rem;
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`

export const AlertShowMobile = styled.div`
  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background: linear-gradient(
        0deg,
        rgba(236, 232, 232, 1) 0%,
        rgba(201, 198, 200, 1) 50%,
        rgba(77, 77, 86, 1) 100%
      );
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;

      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
  right: 17rem;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  border: 1px solid var(--text-color);
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  border-radius: 10px;
  padding: 3rem 2rem 1rem 2rem;
  height: max-content;
  width: 25rem;
  text-align: center;

  svg {
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`
