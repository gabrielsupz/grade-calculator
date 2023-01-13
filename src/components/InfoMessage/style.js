import styled from 'styled-components'

export const Info = styled.div`
  div:hover {
    scale: 1.05;
    transition: 0.5s;
  }
  div {
    transition: 0.5s;
  }
`
export const InfoRetract = styled.div`
  display: none;
  @media screen and (max-width: 785px) {
    display: flex;
  }
`
export const InfoBox = styled.div`
  @media screen and (max-width: 785px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem 1rem 2rem;
  background: rgb(71, 71, 79);
  background: linear-gradient(
    306deg,
    rgba(71, 71, 79, 1) 0%,
    rgba(58, 58, 65, 1) 4%,
    rgba(35, 35, 39, 1) 94%,
    rgba(28, 28, 31, 1) 100%
  );
  width: 22rem;
  border-radius: 10px;
  border: 2px solid var(--text-color);

  text-align: center;

  svg {
    margin: 0 0 0 15rem;
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--text-color);
  }
`
