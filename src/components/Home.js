import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import { Chart } from 'react-charts'
import GifPlayer from 'react-gif-player'
const style = {
  width: '97%',
  height: '300px',
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
        <Paper style={style} zDepth={3} rounded={false} >
          <Chart
            data={[
              {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
              },
              {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
              }
            ]}
            series={{ type: 'bar' }}
            axes={[
          { primary: true, type: 'ordinal', position: 'bottom' },
          { position: 'left', type: 'linear', stacked: true }
            ]}
            primaryCursor
            secondaryCursor
            tooltip
    />
        </Paper>
        {/* <div style={{display: 'flex'}}>
          <Paper style={style2} zDepth={3} rounded={false}>
            <GifPlayer gif='/tenor.gif' autoplay />
          </Paper>
          <Paper style={style2} zDepth={3} rounded={false} />
          <Paper style={style2} zDepth={3} rounded={false} />
        </div> */}
      </div>
    )
  }
}

export default Home
