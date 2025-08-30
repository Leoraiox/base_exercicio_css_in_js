import { useState } from 'react'
import FormVagas from '../../components/FormVagas'

import Vaga from '../../components/Vaga'

import { ListagemVagas } from './ListaVagas.module'

type Vaga = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Remoto',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 2,
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 3,
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'Remoto',
    nivel: 'Pleno',
    modalidade: 'PJ',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 4,
    titulo: 'Designer de interfaces',
    localizacao: 'Remoto',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 5,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'CLT',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 6,
    titulo: 'Desenvolvedor front-end para projeto internacional',
    localizacao: 'Remoto',
    nivel: 'Senior',
    modalidade: 'PJ',
    salarioMin: 12000,
    salarioMax: 15000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: 7,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'Junior',
    modalidade: 'CLT',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <ListagemVagas>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            local={vag.localizacao}
            salario={`R$ ${vag.salarioMin} - R$ ${vag.salarioMax}`}
            descricao={`${vag.nivel} - ${vag.modalidade}`}
            requisitos={vag.requisitos}
          />
        ))}
      </ListagemVagas>
    </div>
  )
}

export default ListaVagas
