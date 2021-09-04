import { useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

export const UserItem = (props) => {
  const history = useHistory()
  return (
    <Card>
      <Card.Body>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Card.Text>
              {props.userData.userName}
            </Card.Text>
          </div>
          <div>
            <Button variant="warning" style={{ marginRight: 10 }} onClick={() => history.push(`/user/edit/${props.userData.id}`)}>
              Edit
            </Button>
            <Button variant="danger">
              Delete
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}