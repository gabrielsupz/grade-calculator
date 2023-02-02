import styled from 'styled-components'

export const AsideMenu = styled.div`
  height: 100%;
  max-height: 67rem;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`
export const AsideTablet = styled.div`
  height: 100vh;
  width: 100%;
  display: none;
  align-items: center;

  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: flex-end;
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
    height: max-content;
  }
`

export const AsideFlex = styled.aside`
  #fakeButton {
    background: var(--bg-cards);
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
  @media screen and (max-width: 1065px) {
    max-width: 20rem;
    height: 67rem;
  }
  @media screen and (max-width: 600px) {
    height: max-content;
    width: 100vw;
  }

  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 67rem;
  justify-content: space-between;

  div {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    max-width: 24rem;
    width: 100%;
    align-items: center;
  }
  button:hover {
    color: var(--response-color);
    border: 1px solid var(--response-color);
    background-color: var(--bg-cards);
    transition: 0.5s;

    svg {
      transition: 0.5s;
      stroke: var(--googleIcon-hover);
    }
  }

  button {
    width: 100%;
    transition: 0.5s;
    svg {
      transition: 0.5s;
    }
  }

  img.userImage:hover {
    border-color: var(--response-color);

    transition: 0.5s;
  }
  img.userImage {
    transition: 0.5s;
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 100%;
    border: 2px solid var(--text-color);
  }
  a {
    width: 100%;
  }
`

export const NoticeDiv = styled.div`
  background-color: var(--bg-cards);
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

export const loginInToAccess = styled.div``
