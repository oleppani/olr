import React from 'react'
//import {useTranslation} from "react-i18next"
import struct from '../pics/structure.png'

const S5 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>React with JSX</h2> 
    <p>		1. React Elements as JSX
			1. JSX Tips
			2. Mapping Arrays with JSX
		2. Babel
		3. Recipes as JSX
		4. React Fragments
		5. Intro to webpack
			1. Creating the Project
			2. Loading the Bundle
			3. Source Mapping
			4. Create React App
      <h3>JSX</h3>
    JSX is combination of JavaScript and XML. Curly braces are used to set values from variables or functions.
    <br />
    JavaScript need to be compiled by browsers but latest features cannot be compiled by browsers and need to use other compiler. Babel is one of the most used JavaScript compilers.
    
    <h3>Webpacks</h3>
    Custom webpacks can be used when you want configure how your App's code is compiled before release.
    <br />
    With webpack you can handle modularity, minification, code splitting and consistency, for example.

    <h3>Create React App</h3>
    <b></b>
    <ul>
      <li>Installing Create React App globally to use anywhere on your computer use command "npm install -g create-react-app"</li>
      <li>To create new React project, use "create-react-app appName" command. It creates folders and install needed libraries.</li>
      <li>Or without installing create-react-app globally use command "npx create-react-app my-project"</li>
      <li>package.json file in your App's root folder configurates Apps dependencies and other feature</li>
      <li>Running command "npm start" starts App by using configuration defined in package.json--&#62;scripts--&#62;start</li>
      <li>Usually there are scripts build (to compile and minimizing code) and test (to testing App). To run scripts you can use commands "npm run scriptname", for example "npm run build"</li>
      <li></li>
    </ul>
    
    <br />
    
    <br />
    This "Osmo Learning React" App is divided in modules are imported to App.js. Modules are included to Router and used when chosen URL's are chosen.
    <br />
    Structure of this App is shown on figure below.
    <br />
    <img src={struct} alt='Osmo Learning React'/>
    <br />
    Examples are in React Router section.


    
      
</p> 
  </div>
)
}
export default S5