import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function Input({ addTask }) {
  const [newTask, setNewTask] = useState('')

  function handleAdd() {
    const text = newTask.trim()
    if (text === '') return 
    addTask(text)
    setNewTask('')
  }

  return (
    <div className="d-flex gap-2">
      <Form.Control
        type="text"
        className="py-2 rounded-3"
        placeholder=""
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAdd()
        }}
      />
      <Button
        variant="primary"
        className="fs-4 lh-1 px-3 rounded-3"
        onClick={handleAdd}
        aria-label="Add task"
      > +</Button>
    </div>
  )
}

export default Input