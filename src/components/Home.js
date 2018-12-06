import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
const style = {
  height: 200,
  width: '97%',
  marginTop: 20,
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}
const style2 = {
  height: 200,
  width: '30%',
  marginTop: 20,
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}
class Home extends Component {
  render () {
    return (
      <div>
        <Paper style={style} zDepth={3} rounded={false} />
        <div style={{display: 'flex'}}>
          <Paper style={style2} zDepth={3} rounded={false} />
          <Paper style={style2} zDepth={3} rounded={false} />
          <Paper style={style2} zDepth={3} rounded={false} />
        </div>
      </div>
    )
  }
}

export default Home
