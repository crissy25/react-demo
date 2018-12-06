import React, { Component } from 'react'
import { RaisedButton } from 'material-ui'
class MenuOptions extends Component {
  render () {
    return (
      <div style={{paddingTop: '5px'}}>
        <RaisedButton label='Home' onClick={() => this.props.updateTab('Home')} />
        <RaisedButton label='Stats' onClick={() => this.props.updateTab('Stats')} />
      </div>
    )
  }
}

export default MenuOptions
