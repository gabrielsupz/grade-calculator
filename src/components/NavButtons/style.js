import styled from 'styled-components'

export const NavButtons = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;

  button.active {
    border: 1px solid var(--text-color);
    background-color: var(--bg-active-button);
    transition: 1s;
  }
`
