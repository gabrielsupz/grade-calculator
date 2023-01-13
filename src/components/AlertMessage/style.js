import styled from 'styled-components'

export const Alert = styled.div`
  div:hover {
    scale: 1.05;
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`
export const AlertRetract = styled.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
`

export const AlertShow = styled.div`
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  border-radius: 10px;
  padding: 3rem 2rem 1rem 2rem;

  width: 25rem;
  text-align: center;

  svg {
    margin: 0 17rem 0 0;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`
