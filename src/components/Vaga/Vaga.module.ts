import styled from 'styled-components'

export const VagaItem = styled.li`
  background-color: var(--cor-secundaria);
  border: 1px solid var(--cor-principal);
  color: var(--cor-principal);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }

  h2 {
    margin-bottom: 8px;
    font-size: 20px;
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
    font-weight: bold;
  }
`

export const VagaLink = styled.a`
  border-color: var(--cor-principal);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
