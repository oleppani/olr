import React from 'react'
//import {useTranslation} from "react-i18next"


const S11 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>React router</h2> 
    <p>		1. Incorporating the Router
		2. Router Properties
			1. Nesting Routes
		3. Using Redirects
Routing Parameters
<h3></h3>
    </p>
<div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
<h3>Creating React router</h3>
<b>This App uses React router and moduls. App.js code is below. Sections of this "Osmo Learning React" are separate moduls. Modul S2 is "JavaScript for React", S3 is "Functional programming with JavaScript", S4 is "How React works" etc.
  <br />
  Relative paths in Route path parameter defines URL's and moduls included inside Route are opened when URL is chosen. You can try React Router by clicking sections button in this App. </b>  

App.js:
<br /><br />
import React from 'react'
<br />
import logo from './logo.svg'
<br />
import './App.css'
<br />
import Header from './components/Header'
<br />
import Left from './components/Left'
<br />
import Right from './components/Right'
<br />
import Footer from './components/Footer'
<br />
import Home from './components/Home'
<br />
import S1 from './components/S1'
<br />
import S2 from './components/S2'
<br />
import S3 from './components/S3'
<br />
import S4 from './components/S4'
<br />
import S5 from './components/S5'
<br />
import S6 from './components/S6'
<br />
import S7 from './components/S7'
<br />
import S8 from './components/S8'
<br />
import S9 from './components/S9'
<br />
import S10 from './components/S10'
<br />
import S11 from './components/S11'
<br />
import S12 from './components/S12'
<br />
import &#10100;
<br />
  BrowserRouter as Router,
  <br />
  Switch,
  <br />
  Route,
  <br />Redirect,
  <br />
  Link
  <br />
  &#10101; from "react-router-dom"

  <br />
  &lt;Router&#62;
        <br />
        &lt;Switch&#62;
        <br />
        &lt;Route path="/home"&#62;
        <br />
        <br />
        &lt;Home /&#62;
        <br />
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/jfr"&#62;
        <br />
        &lt;S2 /&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/wtr"&#62;
        <br />
        &lt;S1 /&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/fpwj"&#62;
        <br />
        &lt;S3/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/hrw"&#62;
        <br />
        &lt;S4/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/rwj"&#62;
        <br />
        &lt;S5/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/rsm"&#62;
        <br />
        &lt;S6/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/ecwh"&#62;
        <br />
        &lt;S7/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/id"&#62;
        <br />
        &lt;S8/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/sus"&#62;
        <br />
        &lt;S9 /&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/rt"&#62;
        <br />
        &lt;S10/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/rr"&#62;
        <br />
        &lt;S11/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/rats"&#62;
        <br />
        &lt;S12/&#62;
        <br />
        &lt;/Route&#62;
        <br />
        &lt;Route path="/"&#62;
        <br />
        &lt;Home/&#62;
        <br />
        &lt;/Route&#62;
          
          
        <br />  
        &lt;/Switch&#62;
        
        <br />
        &lt;/Router&#62;

        
  </div>
  </div>
)
}
export default S11