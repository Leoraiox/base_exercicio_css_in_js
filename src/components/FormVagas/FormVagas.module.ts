import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;
`

export const Campo = styled.input`
  flex: 1;
  padding: 8px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`

export const BtnPesquisar = styled.button`
  padding: 8px 24px;
  background-color: var(--cor-principal);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`
