import React from 'react'
import {
  Button
} from '@material-ui/core'
import {
  Link
} from "react-router-dom"
const Left = () => {
  // eslint-disable-next-line
  const leftStyle = {
    color: '#999999',
    fontStyle: 'italic',
    fontSize: 16,
    opacity: 0.9,
    position: 'fixed',
    left: 0,
    top: 60,
    width: '5%',
    bottom: 60
  }
 

  return (
    <div style={leftStyle}>
    <table bgcolor='#000000' width='100%'>
      <tbody>
      <tr><td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/1"> 
      1 Welcome to React
          </Button></td></tr>
          <tr>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/2">
          2 JavaScript for React
          </Button></td></tr>
          <tr>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/3">
          3 Functional Programming with JavaScript
          </Button></td></tr>
          <tr>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/4">
          4 How React Works
          </Button></td></tr>
          <tr>
          <td width='20%'> <font size='2' >
         </font>
         </td></tr>
          </tbody>
    </table>
    </div>
  )
}

export default Left