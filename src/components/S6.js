import React,{ useState, useEffect } from 'react'
import {
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
<br />
<br />

      Count of dollars 
      <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setCount(count-1)}>-</Button>
    <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setCount(count+1)}>+</Button>
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

          <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setSelected(!selected)}>{selected ? 'Deactivate other button below' : 'Activate other button below'}</Button>
          <br />
          <br /><Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit'
            disabled={(!selected)} onClick={() => alert('You clicked me!!')} >Click me if you can!</Button>
      
    
    <ul>
      <li></li>
      <li></li>
      <li></li>

      </ul>
      
      <ul>
        <li></li>
        <li></li>
      </ul>
      
      <ul><li></li></ul>

      
      <ul><li></li></ul>
     

      
      <ul><li></li></ul>
      

      
      <ul><li></li></ul>
      
      
      <ul><li></li></ul>
      

      
      <ul><li></li></ul>
      
</p> 
  </div>
)
}
export default S6