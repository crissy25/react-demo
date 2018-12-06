import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MenuOptions from './MenuOptions'
class Header extends Component {
  render () {
    return (
      <div>
        <AppBar
          style={{backgroundColor: 'rgba(70, 123, 0, 1)'}}
          showMenuIconButton={false}
          title='Application Name'
          iconElementRight={<MenuOptions updateTab={this.props.updateTab} />} />
      </div>
    )
  }
}

export default Header
