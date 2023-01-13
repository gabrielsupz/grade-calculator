import styled from 'styled-components'

export const SocialBox = styled.div`
  width: 100%;
  border-radius: 4px;
  div.socialLinks {
    @media screen and (max-width: 1023px) {
      width: 30rem;
      height: 8rem;
    }
    @media screen and (max-width: 880px) {
      width: 28rem;
      height: 7rem;
    }
    @media screen and (max-width: 450px) {
      width: 25rem;
      height: 6rem;
    }
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: var(--bg-cards);
    padding: 1rem;
    align-items: center;
  }
  a:hover {
    scale: 1.2;
    transition: 0.5s;
  }

  a {
    transition: 0.5s;
    img {
      @media screen and (max-width: 1023px) {
        width: 40px;
        height: 40pxm;
      }
      @media screen and (max-width: 880px) {
        width: 35px;
        height: 35px;
      }
      @media screen and (max-width: 450px) {
        width: 30px;
        height: 30px;
      }
    }
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33px;
    width: 32px;
  }
`
