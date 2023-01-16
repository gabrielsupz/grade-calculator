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
`

export const AlertShowDeskTop = styled.div`
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

  width: 25rem;
  text-align: center;

  svg {
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`

interface ShowMenuProps {
  isVisible: boolean | undefined
}

export const AlertShowMobile = styled.div<ShowMenuProps>`
  ${({ isVisible }) =>
    isVisible
      ? css`
          @media screen and (max-width: 730px) {
            right: 15rem;
          }
          @media screen and (max-width: 685px) {
            right: 13rem;
          }
          @media screen and (max-width: 620px) {
            right: 10rem;
          }
          @media screen and (max-width: 620px) {
          }
          position: absolute;

          opacity: 1;
          pointer-events: auto;
        `
      : css`
          position: absolute;

          display: none;
          opacity: 0;
          pointer-events: none;
        `}
  right:17rem;
  @media screen and (max-width: 600px) {
    bottom: 3rem;
    right: 20%;
  }
  z-index: 3;
  display: flex;
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
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`