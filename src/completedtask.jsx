import { ListGroup } from 'react-bootstrap'

function CompletedTask({ completedTasks, renderTask }) {
  return (
    <ListGroup className="gap-2">
      {completedTasks.length === 0 ? (
        <ListGroup.Item className="border-0 rounded-3 bg-body-tertiary">
          No tasks here.
        </ListGroup.Item>
      ) : (
        completedTasks.map((task) => renderTask(task))
      )}
    </ListGroup>
  )
}

export default CompletedTask