import styled from 'styled-components'

export const SocialBox = styled.div`
  width: 100%;
  border-radius: 4px;
  div.socialLinks {
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: var(--bg-cards);
    padding: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33px;
    width: 32px;
  }
`
