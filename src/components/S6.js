import React,{ useState, useEffect } from 'react'
//import {useTranslation} from "react-i18next"
import {
  TextField,
  Button,
Select,
MenuItem
} from '@material-ui/core'

const S6 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  const [color, setColor] = useState('grey')
  const [count, setCount] = useState(0)
  const [dollars, setDollars] = useState('$$')
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if(Number.isInteger(count)){
      console.log('toimii')
      let dol = ''
      for(let i=0;i<count;i++){
        dol = dol + '$'
      }
      console.log(dol)
      setDollars(dol)
    }
  }, [count])
  

  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>React state management</h2> 
    <p>
		1. Building a Star Rating Component
		2. The useState Hook
		3. Refactoring for Advanced Reusability
		4. State in Component Trees
			1. Sending State Down a Component Tree
			2. Sending Interactions Back up a Component Tree
		5. Building Forms
			1. Using Refs
			2. Controlled Components
			3. Creating Custom Hooks
			4. Adding Colors to State
		6. React Context
			1. Placing Colors in Context
			2. Retrieving Colors with useContext
			3. Stateful Context Providers
			4. Custom Hooks with Context

<br />
<br />

      Count of dollars 
      <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={({ target }) => setCount(count-1)}>-</Button>
    <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={({ target }) => setCount(count+1)}>+</Button>
          <br />
<br /> Dollars: {dollars}
<br />
<br />

Button color
        <Select labelId="color" id="color" value={color} onChange={({ target }) => setColor(target.value)}>
            <MenuItem value={'red'}>Red</MenuItem>
            <MenuItem value={'grey'}>Grey</MenuItem>
            <MenuItem value={'blue'}>Blue</MenuItem>
            <MenuItem value={'green'}>Green</MenuItem>
          </Select>
          <br /><br />

          <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={({ target }) => setSelected(!selected)}>{selected ? 'Deactivate other button below' : 'Activate other button below'}</Button>
          <br />
          <br /><Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit'
            disabled={(!selected)} onClick={({ target }) => alert('You clicked me!!')} >Click me if you can!</Button>
      <h3></h3>
    
    <ul>
      <li></li>
      <li></li>
      <li></li>

      </ul>
      <h3></h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <h3></h3>
      <ul><li></li></ul>

      <h3></h3>
      <ul><li></li></ul>
     

      <h3></h3>
      <ul><li></li></ul>
      

      <h3></h3>
      <ul><li></li></ul>
      
      <h3></h3>
      <ul><li></li></ul>
      

      <h3></h3>
      <ul><li></li></ul>
      
</p> 
  </div>
)
}
export default S6