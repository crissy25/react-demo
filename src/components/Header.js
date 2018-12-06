import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MenuOptions from './MenuOptions'
class Header extends Component {
  render () {
    return (
      <div>
        <AppBar
          style={{backgroundColor: 'rgb(87, 87, 87)'}}
          showMenuIconButton={false}
          title='Monitoring High-Valued Trees'
          // iconElementRight={<MenuOptions updateTab={this.props.updateTab} />}
          />
      </div>
    )
  }
}

export default Header
