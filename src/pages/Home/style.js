import styled from 'styled-components'

export const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  justify-content: space-between;

  div {
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
    max-width: 21rem;
  }
`
