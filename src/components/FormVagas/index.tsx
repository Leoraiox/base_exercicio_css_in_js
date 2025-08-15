import { FormEvent, useState } from 'react'
import { BtnPesquisar, Campo, Form } from './FormVagas.module'

const FormVagas = () => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Pesquisar por:', termo)
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Form>
  )
}

export default FormVagas
