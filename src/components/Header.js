import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MenuOptions from './MenuOptions'
class Header extends Component {
  render () {
    return (
      <div>
        <AppBar
          style={{backgroundColor: 'rgb(27, 71, 25)'}}
          showMenuIconButton={false}
          title='Monitoring High-Valued Trees'
          // iconElementRight={<MenuOptions updateTab={this.props.updateTab} />}
          />
      </div>
    )
  }
}

export default Header
