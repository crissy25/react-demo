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
      var randomBoolean = Math.random() < 0.2
      if (randomBoolean) this.setState({showNotification: true})
    }, 1000)
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => console.log(response.json()))
  //   .then(json => console.log(json))
  }

  updateTab (value) {
    this.setState({currentTab: value})
  }

  render () {
    return (
      <div>
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
