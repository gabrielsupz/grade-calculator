import styled, { css } from 'styled-components'

export const Info = styled.div`
  div:hover {
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`
export const InfoRetract = styled.div`
  @media screen and (max-width: 785px) {
    display: flex;
  }

  button {
    background: local;

    border: none;
  }
`
export const InfoBox = styled.div`
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 2px solid var(--text-color);

  text-align: center;

  img {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`

export const InfoShow = styled.div`
  #arrow1 {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: ' ';
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;

      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow1 {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }

  right: 17rem;
  z-index: 4;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(44, 44, 49);
  background: linear-gradient(
    54deg,
    rgba(44, 44, 49, 1) 8%,
    rgba(32, 32, 36, 1) 51%,
    rgba(18, 18, 20, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 1px solid var(--text-color);

  text-align: center;

  img {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`
