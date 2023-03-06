import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useState } from 'react'
import { BodyContentList, ContentListItem } from './styles'

interface TaskProps {
  description: string
  isActive: () => void
  onDeleteTask: (description: string) => void
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
        <button onClick={handleOnChange} className="circle">
          {isCheckbox === false ? (
            <Circle size={24} className="circle" />
          ) : (
            <CheckCircle size={24} weight={'fill'} className="checkCircle" />
          )}
        </button>

        <p className={isCheckbox ? 'textScratch' : ''}>{description}</p>
        <button onClick={handleDeleteTask} title="Delete task">
          <Trash size={22} />
        </button>
      </ContentListItem>
    </BodyContentList>
  )
}
