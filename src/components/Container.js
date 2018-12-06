import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Notification from './Notification'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const treeIds = []
for (var a = 1; a <= 15; a++) {
  treeIds.push(1100 + a)
}

function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTab: 'Home',
      showNotification: []
    }
    this.updateTab = this.updateTab.bind(this)
  }

  componentDidMount () {
    setInterval(() => {
      for (let i = 0; i < treeIds.length; i++) {
        fetch('https://safe-headland-89439.herokuapp.com/tree-in-danger?treeId=' + treeIds[i],
        {method: 'GET', mode: 'cors', credentials: 'same-origin', headers: {'Content-Type': 'application/json; charset=utf-8'}})
        .then(response => response.json().then((data) => {
          if (data.treeInDanger) {
            this.setState((state) => {
              state.showNotification.push(treeIds[i])
              state.showNotification = state.showNotification.filter(onlyUnique)
              return state
            })
          }
        }))
      }
    }, 1000)
  }

  updateTab (value) {
    this.setState({currentTab: value})
  }

  render () {
    return (
      <div style={{backgroundColor: 'rgba(103, 103, 103, 0.35)', height: '-webkit-fill-available'}}>
        <MuiThemeProvider>
          <div>
            <Header updateTab={this.updateTab} />
            <Notification notifications={this.state.showNotification} />
            <Content currentTab={this.state.currentTab} />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Container
