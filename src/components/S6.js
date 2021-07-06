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
  <div style={{ font: 'Verdana' }}>
    <br />
    <h2>React state management</h2> 
    <p>
<br />
<br />
Here are couple of examples using states:
<br />
<br />
In this example "count" is set on state "0" and every time minus button is clicked, state changes and former state decreased by one. By clicking plus button state increases by one. This state is used to print as many dollars as state "count" is. The printing of dollars is handled by using the effect. 
<br /><br />
        Count of dollars 
        <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setCount(count-1)}>-</Button>
      <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setCount(count+1)}>+</Button>
            <br />
  <br /> Dollars: {dollars}
  <br />
  <br />

  In this example you can set state "color" and it changes buttons color. Color is set "grey" as a default.
  <br /><br />

  Button color
          <Select labelId="color" id="color" value={color} onChange={({ target }) => setColor(target.value)}>
              <MenuItem value={'red'}>Red</MenuItem>
              <MenuItem value={'grey'}>Grey</MenuItem>
              <MenuItem value={'blue'}>Blue</MenuItem>
              <MenuItem value={'green'}>Green</MenuItem>
            </Select>
            <br /><br />


            In this example the lower button is disabled and by clicking the upper button you disable/enable the lower button. When the lower button is enabled and clicked, it causes action of alert.
            <br /><br />  

            <Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setSelected(!selected)}>{selected ? 'Deactivate other button below' : 'Activate other button below'}</Button>
            <br />
            <br /><Button style={{backgroundColor: color, color:"#C4DFE6",fontSize: "14px" }} type='submit'
              disabled={(!selected)} onClick={() => alert('You clicked me!!')} >Click me if you can!</Button>
        
        <br /><br />

        The code for these examples can be found below:
        <br />
        <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
        <br />
      import React,&#10100; useState, useEffect &#10101; from 'react'
      <br />import &#10100;
      <br /> Button,
      <br />Select,
      <br />MenuItem
      <br />&#10101; from '@material-ui/core'

      <br /><br />const S6 = () =&#62; &#10100;

      <br />const [color, setColor] = useState('grey')
      <br /> const [count, setCount] = useState(0)
      <br />const [dollars, setDollars] = useState('$$')
      <br /> const [selected, setSelected] = useState(false)

      <br /><br />  useEffect(() =&#62; &#10100;
      <br />if(Number.isInteger(count))&#10100;
      <br />console.log('toimii')
      <br />let dol = ''
      <br />for(let i=0;i&lt;count;i++)&#10100;
      <br />  dol = dol + '$'
      <br />  &#10101;
      <br />console.log(dol)
      <br />setDollars(dol)
      <br />&#10101;
      <br />&#10101;, [count])
  
      <br /><br />
  return(
    
<br />
<br />
<br />       Count of dollars 
<br />  &lt;Button style=&#10100;&#10100;backgroundColor: color, color:"#C4DFE6",fontSize: "14px" &#10101;&#10101; type='submit' onClick=&#10100;() =&#62; setCount(count-1)&#10101;&#62;-&lt;/Button&#62;
<br />  &lt;Button style=&#10100;&#10100;backgroundColor: color, color:"#C4DFE6",fontSize: "14px" &#10101;&#10101; type='submit' onClick=&#10100;() =&#62; setCount(count+1)&#10101;&#62;+&lt;/Button&#62;
            <br />
  <br /> Dollars: &#10100;dollars&#10101;
  <br />
  <br />

  <br />Button color
  <br />&lt;Select labelId="color" id="color" value=&#10100;color&#10101; onChange=&#10100;(&#10100; target &#10101;) =&#62; setColor(target.value)&#10101;&#62;
  <br />&lt;MenuItem value=&#10100;'red'&#10101;&#62;Red&lt;/MenuItem&#62;
  <br />&lt;MenuItem value=&#10100;'grey'&#10101;&#62;Grey&lt;/MenuItem&#62;
  <br />&lt;MenuItem value=&#10100;'blue'&#10101;&#62;Blue&lt;/MenuItem&#62;
  <br />            &lt;MenuItem value=&#10100;'green'&#10101;&#62;Green&lt;/MenuItem&#62;
  <br />            &lt;/Select&#62;
            <br /><br />



            <br />&lt;Button style=&#10100;&#10100;backgroundColor: color, color:"#C4DFE6",fontSize: "14px" &#10101;&#10101; type='submit' onClick=&#10100;() =&#62; setSelected(!selected)&#10101;&#62;&#10100;selected ? 'Deactivate other button below' : 'Activate other button below'&#10101;&lt;/Button&#62;
            <br />
            <br />&lt;Button style=&#10100;&#10100;backgroundColor: color, color:"#C4DFE6",fontSize: "14px" &#10101;&#10101; type='submit'
            <br />disabled=&#10100;(!selected)&#10101; onClick=&#10100;() =&#62; alert('You clicked me!!')&#10101; &#62;Click me if you can!&lt;/Button&#62;
        

      </div>
      
</p> 
  </div>
)
}
export default S6