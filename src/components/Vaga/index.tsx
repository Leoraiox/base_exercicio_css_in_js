import { VagaItem, VagaLink } from './Vaga.module'

type Props = {
  titulo: string
  local: string
  salario: string
  descricao: string
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaItem>
    <h2>{props.titulo}</h2>
    <ul>
      <li>{props.local}</li>
      <li>{props.salario}</li>
      <li>{props.descricao}</li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaItem>
)

export default Vaga
