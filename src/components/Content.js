import React, { Component } from 'react'
import Home from './Home'
import Stats from './Stats'
class Content extends Component {
  render () {
    let {currentTab} = this.props
    return (
      <div>
        {currentTab === 'Home' && <Home />}
        {currentTab === 'Stats' && <Stats />}
      </div>
    )
  }
}

export default Content
