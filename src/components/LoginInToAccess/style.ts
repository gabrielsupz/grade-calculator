import styled, { css } from 'styled-components'
interface LoginInToAccessProps {
  isVisible: boolean
}

export const loginInToAccess = styled.div<LoginInToAccessProps>`
  ${({ isVisible }) =>
    isVisible
      ? css`
          display: flex;
          pointer-events: auto;
          transform: translateX(0);
          transform: translateY(0px);
        `
      : css`
          display: none;
          pointer-events: none;
          transform: translateX(-50px);
        `}

  @media
    screen
    and
    (max-width: 785px) {
    min-height: 75rem;
  }
  position: absolute;

  width: max-content;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 10;
  backdrop-filter: blur(1.5px);

  .alertBox {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2.5rem;
    justify-content: center;
    width: 325px;
  }
  @media screen and (max-width: 600px) {
    .alertBox {
      margin-left: 0;
    }
  }

  .background {
    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: 300px;
    }
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    #oops {
      h2 {
        font-family: 'Roboto Mono', monospace;

        font-size: 3.4rem;
        font-weight: 400;
      }
      height: 270px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      opacity: 1;
      z-index: 100;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .absolute {
      position: absolute;
      width: 325px;
      height: 270px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      background-color: #cf2929;
      opacity: 0.65;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 270px;
    justify-content: space-around;
    font-size: 2rem;
    font-weight: 400;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .message {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 5rem 3rem 3rem 3rem;

    background: rgb(44, 44, 49);
    background: radial-gradient(
      circle,
      rgba(44, 44, 49, 1) 0%,
      rgba(47, 47, 52, 1) 34%,
      rgba(51, 51, 56, 1) 67%,
      rgba(56, 56, 61, 1) 83%,
      rgba(68, 68, 74, 1) 100%
    );
    width: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;

    button {
      font-size: 1.6rem;
      font-weight: 700;
      padding: 1.5rem 1rem;

      border-color: var(--text-color);
      border-radius: 40px;
      transition: all 1s;
      background: rgb(66, 66, 71);
      background: radial-gradient(
        circle,
        rgba(66, 66, 71, 1) 16%,
        rgba(44, 44, 49, 1) 76%
      );
      &.blue {
        color: rgb(71, 132, 221);
      }
      &.blue:hover {
        color: var(--text-color);

        background: rgb(86, 87, 209);
        background: linear-gradient(
          54deg,
          rgba(86, 87, 209, 1) 0%,
          rgba(0, 10, 115, 1) 100%
        );
        transition: all 0.5;
      }
      &.red {
        color: #f56a6a;
      }
      &.red:hover {
        color: var(--text-color);

        transition: 0.5s;
        background: rgb(221, 71, 71);
        background: linear-gradient(
          54deg,
          rgba(221, 71, 71, 1) 0%,
          rgba(213, 1, 1, 1) 100%
        );
        transition: all 0.5;
      }
    }
    p {
      color: var(--text-color);
      font-size: 2rem;
      text-align: center;
    }
  }
`
