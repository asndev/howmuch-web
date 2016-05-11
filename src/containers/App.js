import React, { PropTypes } from 'react'

class App extends React.Component {
  render () {
    const content = this.props.children

    return (
      <div>
        <h2>Container</h2>
        {content}
      </div>)
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
