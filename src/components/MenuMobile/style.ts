import styled, { css } from 'styled-components'
export const MenuMoBileBox = styled.div`
  display: none;

  img.userImage {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 100%;
    border: 2px solid var(--text-color);
  }
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: end;
  }

  transition: 0.5s;
`

interface ShowMenuProps {
  isVisible: boolean | undefined
}

export const ShowMenu = styled.div<ShowMenuProps>`
  transition: 0.8s;

  ${({ isVisible }) =>
    isVisible
      ? css`
          div {
            scale: 1;
            transition: all 0.5s;
          }

          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
          transform: translateY(0px);
        `
      : css`
          div {
            transition: all 0.5s;
            scale: 0.7;
          }

          opacity: 0;
          pointer-events: none;
          transform: translateX(-50px);
        `}

  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100vh;
  min-height: 768px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: rgb(77, 77, 86);
  background: linear-gradient(
    0deg,
    rgba(77, 77, 86, 1) 0%,
    rgba(55, 55, 62, 1) 22%,
    rgba(47, 47, 53, 1) 30%,
    rgba(43, 43, 49, 1) 34%,
    rgba(37, 37, 42, 1) 53%,
    rgba(18, 18, 20, 1) 85%
  );

  background-size: cover;

  div.contentMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  div {
    gap: 2rem;
  }

  button:hover {
    border: 1px solid var(--text-color);
    background-color: var(--bg-active-button);
    transition: 0.1s;
  }

  button {
    @media screen and (max-width: 1023px) {
      font-size: 2.2rem;
      width: 30rem;
      height: 8rem;
    }
    @media screen and (max-width: 880px) {
      font-size: 2.2rem;
      width: 28rem;
      height: 7rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 1.6rem;
      width: 25rem;
      height: 6rem;
    }
  }
  > svg.closeMenu:hover {
    transform: rotateY(90deg);
  }
  svg.closeMenu {
    position: absolute;
    top: 2rem;
    right: 2rem;

    transition: 0.7s;
  }
`
export const NoticeDiv = styled.div`
  @media screen and (max-width: 1023px) {
    font-size: 2.6rem;
  }
  @media screen and (max-width: 880px) {
    font-size: 2.4rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
  max-width: 25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.6rem 2.7rem;
  font-size: 2rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-shadow: 1px 1px 2px red, 0 0 1em var(--body-bg-color);
`
