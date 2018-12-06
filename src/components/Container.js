import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Notification from './Notification'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 'Home',
      showNotification: false
    }
    this.updateTab = this.updateTab.bind(this)
  }

  componentDidMount () {
    setInterval(() => {
      fetch('https://safe-headland-89439.herokuapp.com/tree-in-danger',
        {method: 'GET', credentials: 'same-origin', headers: {'Content-Type': 'application/json; charset=utf-8'}})
      .then(response => response.json().then((data) => {
        if (data.treeInDanger) this.setState({showNotification: true})
      }))

    }, 10000)
  }

  updateTab (value) {
    this.setState({currentTab: value})
  }

  render () {
    return (
      <div style={{backgroundColor: 'rgba(154, 178, 151, 0.35)', height: '-webkit-fill-available'}}>
        <MuiThemeProvider>
          <div>
            <Header updateTab={this.updateTab} />
            {this.state.showNotification && <Notification />}
            <Content currentTab={this.state.currentTab} />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Container
