import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
const style = {
  height: 55,
  width: '97%',
  marginTop: 20,
  textAlign: 'center',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: 'rgba(200,0,0,1)',
  borderRadius: 4
}
const style2 = {
  color: 'white',
  paddingTop: 20
}

class Notification extends Component {
  render () {
    return (
      <div>
        {
              this.props.notifications.map((treeId) => {
                return (
                  <Paper style={style} zDepth={3} rounded>
                    <div style={style2}><i className='fa fa-warning' style={{paddingRight: 5}} />
                            Warning! Some movement has been detected on {treeId} !
                        </div>
                  </Paper>
                )
              })
          }
      </div>
    )
  }
}

export default Notification
