import { PlusCircle } from 'phosphor-react'
import {
  BodyContainer,
  HeaderInput,
  HeaderList,
  HeaderListItem,
  TodoBody,
} from './styles'

import clipboard from '../../assets/clipboard-icon.svg'

export function Body() {
  return (
    <BodyContainer>
      <HeaderInput>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </HeaderInput>

      <HeaderList>
        <HeaderListItem>
          <h2>Tarefas criadas</h2>
          <span>5</span>
        </HeaderListItem>
        <HeaderListItem>
          <h2 className="finished-h2">Concluídas</h2>
          <span className="finished-span">2 de 5</span>
        </HeaderListItem>
      </HeaderList>

      <TodoBody>
        <img src={clipboard} alt="" />
        <h2>Você ainda não tem tarefas cadastradas</h2>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </TodoBody>
    </BodyContainer>
  )
}
