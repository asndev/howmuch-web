import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { browserHistory } from 'react-router'

import { fetchActivityLists } from '../actions'

class Dashboard extends React.Component {

  componentWillMount () {
    this.props.dispatch(fetchActivityLists())
  }

  render () {
    return (
      <div>
        <Button>Create new list</Button>
        <h3>your lists</h3>
        <ListGroup>
          {
            this.props.activitylists.data.map(e => {
              return (<ListGroupItem
                key={e._id}
                header={e.name}
                onClick={() => {
                  browserHistory.push(`/activitylist/${e._id}`)
                }}
                >
                <small>{e._id}</small>
              </ListGroupItem>)
            })
          }
        </ListGroup>
      </div>
    )
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activitylists: PropTypes.object.isRequired
}

function select (store) {
  const { activitylists } = store
  return {
    activitylists
  }
}

export default connect(select)(Dashboard)
