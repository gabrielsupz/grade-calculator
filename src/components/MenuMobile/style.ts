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
`

interface ShowMenuProps {
  isVisible: boolean | undefined
}

export const ShowMenu = styled.div<ShowMenuProps>`
  ${({ isVisible }) =>
    isVisible
      ? css`
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}

  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
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

  svg.closeMenu {
    position: absolute;
    top: 2rem;
    right: 2rem;
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
