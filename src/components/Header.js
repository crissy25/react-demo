import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MenuOptions from'./MenuOptions'
class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          title="Application Name"
          iconElementRight={<MenuOptions updateTab={this.props.updateTab}/>}>
        </AppBar>
      </div>
    );
  }
}

export default Header;