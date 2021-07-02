
import React, { Suspense} from 'react'


const S9 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{ font: 'Verdana' }}>
    <Suspense fallback="loading">
        <br />
    <h2>Suspense</h2> 
<br /> Suspense is React's feature to describe if actions (data loading for example) is ready or still in progress.
<br />

<br />
Suspense can be imported from "react" library (import React, &#10100; Suspense &#10101; from 'react')
<br />
Using Suspense is optional but keeps user better informed of actions' phase.
<br />
<br />
<div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
In this App Suspense is used in App.js like this:
<br />
return (
  &lt;div className="App"&#62;
  &lt;Suspense fallback="loading"&#62;
        ...
    
        &lt;Container&#62;
        &lt;Router&#62;
        ...
        &lt;Switch&#62;
        &lt;Route path="/home"&#62;
        ...
        &lt;/Suspense&#62;

</div>
    <p>	
</p> 
</Suspense>
  </div>
)
}
export default S9