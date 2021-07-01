import React from 'react'
import {
  Button
} from '@material-ui/core'
import {
  Link
} from "react-router-dom"
const Footer = () => {
  // eslint-disable-next-line
  const footerStyle = {
    color: '#999999',
    fontStyle: 'italic',
    fontSize: 16,
    opacity: 0.9,
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  }
 

  return (
    <div style={footerStyle}>
    <table bgcolor='#000000' width='100%'>
      <tbody>
      <tr><td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/rwj"> 
      React with JSX
          </Button></td>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/rsm">
          React State Management
          </Button></td>
          <td width='30%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/ecwh">
          Enhancing Components with Hooks
          </Button></td>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/id">
          Incorporating Data
          </Button></td>
          <td width='10%'> <font size='2' >
         &copy; Osmo Leppäniemi
         </font>
         </td></tr>
          </tbody>
    </table>
    </div>
  )
}

export default Footer