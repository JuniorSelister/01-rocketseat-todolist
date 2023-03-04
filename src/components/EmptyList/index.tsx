import { TodoBody } from './styles'
import clipboard from '../../assets/clipboard-icon.svg'

export function EmptyList() {
  return (
    <TodoBody>
      <img src={clipboard} alt="" />
      <h2>Você ainda não tem tarefas cadastradas</h2>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </TodoBody>
  )
}
