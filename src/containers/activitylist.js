import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { fetchActivityList, createActivity, deleteActivtyList } from '../actions'

class ActivityList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  resolveTitle (id) {
    let title = 'foo'
    this.props.activitylists.data.forEach(e => {
      if ('' + e._id === id) {
        title = e.name
      }
    })
    return title
  }

  componentWillMount () {
    const id = this.props.params.listid
    this.props.dispatch(fetchActivityList(id))
    this.setState({
      title: this.resolveTitle(id)
    })
  }

  createActivity () {
    this.props.dispatch(createActivity(this.props.params.listid))
  }

  deleteList () {
    this.props.dispatch(deleteActivtyList(this.props.params.listid))
    this.context.router.goBack()
  }

  render () {
    const activities =
      this.props.activitylists.activities[this.props.params.listid] || {}
    if (!activities || !activities.details) {
      return <h3>Loading ...</h3>
    }

    return (
      <div>
        <Button
          onClick={() => this.context.router.goBack()}>
          Back
        </Button>
        <Button
          onClick={this.createActivity.bind(this)}>
          Create Activity
        </Button>
        <Button
          onClick={this.deleteList.bind(this)}>
          Delete List
        </Button>
        <h3>{this.state.title}</h3>
        <div>
          Activities:
          <strong> {activities.details.activityCount} </strong>
          Average:
          <strong> {activities.details.averagePerDay}</strong>
        </div>
      </div>
    )
  }
}

ActivityList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  activitylists: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
}

ActivityList.contextTypes = {
  router: PropTypes.object.isRequired
}

function select (store) {
  const { activitylists } = store
  return {
    activitylists
  }
}

export default connect(select)(ActivityList)
