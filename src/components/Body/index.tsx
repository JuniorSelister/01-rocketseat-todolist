import { PlusCircle } from 'phosphor-react'
import { useState } from 'react'
import { ContentList } from '../ContentList'
import {
  BodyContainer,
  HeaderInput,
  HeaderList,
  HeaderListItem,
} from './styles'

export function Body() {
  const [task, setTask] = useState([''])
  function deleteTask(taskToDelete: string) {
    const taskWithoutDelete = task.filter((tasks) => {
      return tasks !== taskToDelete
    })

    setTask(taskWithoutDelete)
  }

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

      <div>
        {task.map((tasks) => {
          return (
            <ContentList
              key={tasks}
              description={tasks}
              onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    </BodyContainer>
  )
}
