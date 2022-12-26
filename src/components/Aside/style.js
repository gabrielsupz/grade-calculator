import styled from 'styled-components'

export const AsideFlex = styled.aside`
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
  button {
    width: 100%;
  }

  img.userImage {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 100%;
    border: 2px solid var(--text-color);
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
