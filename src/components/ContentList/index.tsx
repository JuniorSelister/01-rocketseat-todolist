import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { BodyContentList, ContentListItem } from './styles'

interface TaskProps {
  description: string
  onDeleteTask: (description: string) => void
}

interface TaskControl {
  taskList: TaskProps
  quantity: number
  isActive: boolean
}

export function ContentList({ description, onDeleteTask }: TaskProps) {
  const [isCheckbox, setCheckbox] = useState(false)

  const handleOnChange = () => {
    setCheckbox(!isCheckbox)
  }

  function handleDeleteTask() {
    onDeleteTask(description)
  }

  return (
    <BodyContentList>
      <ContentListItem>
        <input
          type="checkbox"
          className="checkLayout"
          checked={isCheckbox}
          onChange={handleOnChange}
        />
        <p>{description}</p>
        <button onClick={handleDeleteTask} title="Delte task">
          <Trash size={22} />
        </button>
      </ContentListItem>
    </BodyContentList>
  )
}
