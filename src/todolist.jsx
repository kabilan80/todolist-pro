import { useState } from 'react'
import { Button, Container, Form, ListGroup } from 'react-bootstrap'
import Input from './input.jsx'
import ActiveTask from './activetask.jsx'
import CompletedTask from './completedtask.jsx'

function TodoList() {
  const [tasks, setTasks] = useState([])
  const [nextId, setNextId] = useState(5)
  const [filter, setFilter] = useState('all')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  function addTask(text) {
    setTasks([...tasks, { id: nextId, text: text, done: false }])
    setNextId(nextId + 1)
  }

  function toggleTask(id) {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)))
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function startEdit(task) {
    setEditingId(task.id)
    setEditText(task.text)
  }

  function saveEdit(id) {
    const newText = editText.trim()
    if (newText !== '') {
      setTasks(tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)))
    }
    setEditingId(null)
  }

  const activeTasks = tasks.filter((task) => !task.done)
  const completedTasks = tasks.filter((task) => task.done)

  function showTask(task) {
    const rowClass =
      'd-flex align-items-center gap-2 border-0 rounded-3 bg-body-tertiary list-group-item-action'

    const checkbox = (
      <Form.Check.Input
        type="checkbox"
        className="m-0 flex-shrink-0"
        checked={task.done}
        onChange={() => toggleTask(task.id)}
        aria-label="Mark task as done"
      />
    )

    if (task.id === editingId) {
      return (
        <ListGroup.Item as="li" key={task.id} className={rowClass}>
          {checkbox}
          <Form.Control
            size="sm"
            className="flex-fill"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <Button variant="primary" size="sm" onClick={() => saveEdit(task.id)}>
            Save
          </Button>
          <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
            Delete
          </Button>
        </ListGroup.Item>
      )
    }

    return (
      <ListGroup.Item as="li" key={task.id} className={rowClass}>
        {checkbox}
        <span
          className={
            task.done
              ? 'flex-fill text-decoration-line-through text-body-tertiary'
              : 'flex-fill'
          }
        >
          {task.text}
        </span>
        <Button variant="primary" size="sm" onClick={() => startEdit(task)}>
          Edit
        </Button>
        <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </ListGroup.Item>
    )
  }

  function filterButton(name, label) {
    return (
      <Button
        variant={filter === name ? 'primary' : 'outline-primary'}
        size="sm"
        className="flex-fill rounded-pill py-1"
        onClick={() => setFilter(name)}
      >
        {label}
      </Button>
    )
  }

  return (
    <Container className="bg-white rounded-4 shadow-sm p-3 w-100" style={{ maxWidth: 440 }}>
      <h1 className="text-center text-primary fs-3 fw-bold m-0">My Todo</h1>
      <p className="text-center text-secondary mt-1 mb-3 small"></p>

      <Input addTask={addTask} />
      <div className="d-flex gap-2 my-3">
        {filterButton('all', 'All Tasks')}
        {filterButton('active', 'Active Tasks')}
        {filterButton('completed', 'Completed Tasks')}
      </div>

      <div className="overflow-auto" style={{ maxHeight: 280 }}>
      {filter === 'all' && (
        <ListGroup className="gap-2">
          {tasks.length === 0 ? (
            <ListGroup.Item className="border-0 rounded-3 bg-body-tertiary">
              No tasks here.
            </ListGroup.Item>) 
            : 
            (tasks.map((task) => showTask(task)))}</ListGroup>)}
      {filter === 'active' && <ActiveTask activeTasks={activeTasks} renderTask={showTask} />}
      {filter === 'completed' && (
        <CompletedTask completedTasks={completedTasks} renderTask={showTask} />
      )}
      </div>
      <div className="d-flex justify-content-between border-top mt-3 pt-2 small">
        <span> Total: <b>{tasks.length}</b></span>
        <span>Active: <b>{activeTasks.length}</b></span>
        <span>Completed: <b>{completedTasks.length}</b></span>
      </div>
      <p className="text-center text-secondary mt-2 mb-0 small"></p>
    </Container>
  )
}

export default TodoList