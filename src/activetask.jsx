import { ListGroup } from 'react-bootstrap'

function ActiveTask({ activeTasks, renderTask }) {
  return (
    <ListGroup className="gap-2">
      {activeTasks.length === 0 ? (
        <ListGroup.Item className="border-0 rounded-3 bg-body-tertiary">
          No tasks here.
        </ListGroup.Item>
      ) : (
        activeTasks.map((task) => renderTask(task))
      )}
    </ListGroup>
  )
}

export default ActiveTask