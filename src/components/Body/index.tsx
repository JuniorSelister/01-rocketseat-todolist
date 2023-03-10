import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ContentList } from '../ContentList'
import { BodyContentList } from '../ContentList/styles'
import { EmptyList } from '../EmptyList'
import {
  BodyContainer,
  HeaderInput,
  HeaderList,
  HeaderListItem,
} from './styles'

export function Body() {
  const [task, setTask] = useState([]<String>)
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

  const isNewTaskEmpty = newTask.length === 0

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

          <button disabled={isNewTaskEmpty}>
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
          <span className="finished-span">
            {task.length} de {task.length}
          </span>
        </HeaderListItem>
      </HeaderList>
      <BodyContentList>
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
      </BodyContentList>
    </BodyContainer>
  )
}
