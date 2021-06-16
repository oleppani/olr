import React from 'react'
import {
  Button
} from '@material-ui/core'
import {
  Link
} from "react-router-dom"
const Right = () => {
  // eslint-disable-next-line
  const rightStyle = {
    color: '#999999',
    fontStyle: 'italic',
    fontSize: 16,
    opacity: 0.9,
    position: 'fixed',
    right: 30,
    top: 60,
    width: '5%',
    bottom: 60
  }
 

  return (
    <div style={rightStyle}>
    <table bgcolor='#000000' width='100%'>
      <tbody>
      <tr><td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/9"> 
      9 Suspense
          </Button></td></tr>
          <tr>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/10">
          10 React Testing
          </Button></td></tr>
          <tr>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/11">
          11 React Router
          </Button></td></tr>
          <tr>
          <td width='20%'><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/12">
          12 React and the Server
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

export default Right