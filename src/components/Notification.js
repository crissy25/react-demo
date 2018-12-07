import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import GifPlayer from 'react-gif-player'
const style = {
  height: 55,
  width: '100%',
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
      <div style={{display: 'flex', width: '100%', margin: 'auto'}}>
        {/* <div><GifPlayer gif='/tenor.gif' autoplay /></div> */}
        <div style={{width: '100%', margin: 'auto', maxHeight: '300px', overflowY: 'auto'}}>
          {
            this.props.notifications.map((treeId) => {
              return (
                <Paper style={style} zDepth={3} rounded key={treeId}>
                  <div style={style2}><i className='fa fa-warning' style={{paddingRight: 5}} />
                        Warning! Some movement has been detected on {treeId} !
                    </div>
                </Paper>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Notification
