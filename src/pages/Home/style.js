import styled from 'styled-components'

export const HomeStyled = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 2.6rem 2.6rem;
`

export const CalcAndSignIn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const asideFlex = styled.aside`
  display: flex;
  flex-direction: column;
  height: 63rem;
  justify-content: space-between;

  div {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    max-width: 24rem;
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
export const leftMessages = styled.div`
  min-height: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  max-width: 25rem;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
`
