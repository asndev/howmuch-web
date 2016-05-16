import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { createActivityList } from '../actions'

class NewList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleNameChange (e) {
    this.setState({name: e.target.value})
  }

  back () {
    this.context.router.goBack()
  }

  createNewList (e) {
    e.preventDefault()
    const { name } = this.state
    if (name) {
      this.props.dispatch(createActivityList(name))
      this.back()
    }
  }

  validate () {
    const name = this.state.name.length
    return name > 1 ? 'success' : 'error'
  }

  render () {
    return (
      <div>
        <h2>Create new List</h2>
        <form>
          <FormGroup
            controlId='createnewlistform'
            validationState={this.validate()}
          >
            <FormControl
              type='text'
              value={this.state.name}
              placeholder='name'
              onChange={this.handleNameChange.bind(this)}
            />
          </FormGroup>

          <Button type='submit' onClick={this.createNewList.bind(this)}>
            Submit
          </Button>
          <Button onClick={this.back.bind(this)}>
            Cancel
          </Button>
        </form>
      </div>
    )
  }
}

NewList.propTypes = {
  dispatch: PropTypes.func.isRequired
}

NewList.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect()(NewList)
