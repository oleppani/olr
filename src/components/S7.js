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
    Effect and alert are used in previous examples in section "React state management"

    <br /><br />
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
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

    useLayoutEffect
    <br /><br />
    useReducer<br /><br />
    <br />

    <br />

    <br />
setState
    <br />

    <br />
    <br /><br /><br /><br />
    memo
    <br />

    shouldComponentUpdate and PureComponent
    <br />
    <br />
    <br />
    </div>
</p>
  </div>
)
}
export default S7