import styled from 'styled-components'

export const HomeStyled = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 2.6rem 2.6rem;

  @media screen and (max-width: 1065px) {
    height: 100%;
  }
  @media screen and (max-width: 785px) {
    min-height: 67rem;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 0;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
  }
`

export const leftMessages = styled.div`
  @media screen and (max-width: 875px) {
    display: none;
  }
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
