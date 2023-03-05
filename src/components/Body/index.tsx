import { ChangeEvent, FormEvent, useState } from 'react'
import { PlusCircle } from 'phosphor-react'
import { ContentList } from '../ContentList'
import {
  BodyContainer,
  HeaderInput,
  HeaderList,
  HeaderListItem,
} from './styles'
import { EmptyList } from '../EmptyList'

export function Body() {
  const [task, setTask] = useState([''])
  const [newTask, setNewTask] = useState('')

  function deleteTask(taskToDelete: string) {
    const taskWithoutDelete = task.filter((tasks) => {
      return tasks !== taskToDelete
    })

    setTask(taskWithoutDelete)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTask([...task, newTask])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  return (
    <BodyContainer>
      <HeaderInput>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
          />

          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
      </HeaderInput>

      <HeaderList>
        <HeaderListItem>
          <h2>Tarefas criadas</h2>
          <span>{task.length}</span>
        </HeaderListItem>
        <HeaderListItem>
          <h2 className="finished-h2">Concluídas</h2>
          <span className="finished-span">x de {task.length}</span>
        </HeaderListItem>
      </HeaderList>

      <div>
        {task.length === 0 && <EmptyList />}

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
