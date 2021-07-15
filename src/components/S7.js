import React from 'react'
//import {useTranslation} from "react-i18next"


const S7 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{
    font: 'Verdana'
  }}><br />
    <h2>Enhancing components with hooks</h2>
    <p>	
    Effect, state and alert are used in previous examples in section "React state management"

    <br /><br />
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
      <b>Effect and state:</b><br />
      import React,&#10100; useState, useEffect &#10101; from 'react'
      <br />...
      <br />const [dollars, setDollars] = useState('$$')
    
      <br />...<br />
    useEffect(() =&#62; &#10100;
    <br />if(Number.isInteger(count))&#10100;
    <br />console.log('toimii')
    <br />let dol = ''
    <br /> for(let i=0;i&lt;count;i++)&#10100;
    <br />   dol = dol + '$'
    <br />    &#10101;
    <br />  console.log(dol)
    <br />  setDollars(dol)
    <br />  &#10101;
    <br />  &#10101;, &#91;count&#93;)
    <br /><br />


    <b>Alert:</b><br />

    &lt;Button style=&#10100;&#10100;backgroundColor: color, color:"#C4DFE6",fontSize: "14px" &#10101;&#10101; type='submit'
              disabled=&#10100;(!selected)&#10101; onClick=&#10100;() =&#62; alert('You clicked me!!')&#10101; &#62;Click me if you can!&lt;/Button&#62;
    <br /><br />

    
    </div>
</p>
  </div>
)
}
export default S7