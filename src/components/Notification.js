import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
const style = {
  height: 65,
  width: '97%',
  marginTop: 20,
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(200,0,0,1)'
}
const style2 = {
  color: 'white',
  paddingTop: 23
}
class Notification extends Component {
  render () {
    return (
      <div>
        <Paper style={style} zDepth={3} rounded={false}>
          <div style={style2}><i className='fa fa-warning' style={{paddingRight: 5}} />Warning! Some movement has been detected!</div>
        </Paper>
      </div>
    )
  }
}

export default Notification
