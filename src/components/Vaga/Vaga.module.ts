import styled from 'styled-components'

export const VagaItem = styled.div`
  background-color: var(--cor-secundaria);
  border: 1px solid var(--cor-principal);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;

  h2 {
    margin-bottom: 8px;
    font-size: 20px;
    color: var(--cor-principal);
  }

  p {
    margin-bottom: 8px;
  }

  ul {
    margin-bottom: 8px;
  }
`

export const VagaLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  color: var(--cor-principal);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
