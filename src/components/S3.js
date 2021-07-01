import React from 'react'
//import {useTranslation} from "react-i18next"


const S3 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>Functional Programming with JavaScript</h2> 
    <p>
		1. What It Means to Be Functional
		2. Imperative Versus Declarative
		3. Functional Concepts
			1. Immutability
			2. Pure Functions
			3. Data Transformations
			4. Higher-Order Functions
			5. Recursion
			6. Composition
			7. Putting It All Together

      <h3></h3>
      <b>In JavaScript (and React) variables can be functions, functions can be stored in arrays and functions can include another functions or return function.</b>
      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p><br />
            <b>Function returns function:</b>
            <br />
            const createScream = function(logger) &#10100;
            <br />
            return function(message) &#10100;
            <br />  logger(message.toUpperCase() + "!!!")
            <br /> &#10101;
            <br /> &#10101;

            <br /><br />
            <b>Array include function:</b>
            <br /><br />
            const messages = &#91;
            <br />"They can be inserted into arrays",
            <br />message =&#62; console.log(message),
            <br />"like variables",
            <br />message =&#62; console.log(message)
            <br />&#93;

            <br />messages[1](messages[0]); // They can be inserted into arrays
            <br />messages[3](messages[2]); // like variables

            <br />const scream = createScream(message =&#62; console.log(message));

            <br />scream("functions can be returned from other functions");
            <br />scream("createScream returns a function");
            <br />scream("scream invokes that returned function");
            <br />
            <br />
            <h3>Imperative and declarative </h3>
            <br />
            <b>Imperative:</b>
            <br />
            <br />const string = "Restaurants in Hanalei";
            <br />const urlFriendly = "";

            <br /><br />for (var i = 0; i &lt; string.length; i++) &#10100;
                <br />if (string[i] === " ") &#10100;
                  <br /> urlFriendly += "-";
                  <br />&#10101; else &#10100;
                    <br />urlFriendly += string[i];
                    <br />&#10101;
                    <br />&#10101;

                    <br />console.log(urlFriendly); // "Restaurants-in-Hanalei"
                    <br /><br /><br />
                    <b>Declarative:</b>
                    <br />const string = "Restaurants in Hanalei";
                    <br />const urlFriendly = string.replace(/ /g, "-");

                    <br />console.log(urlFriendly);
                    <br />
                    <br />
                    <b>Pure functions</b>
                    <br />

                    <br /><br />
                    <b>Filter</b>
                    <br />

                    <br /><br />

                    <b>Pop</b>
                    <br />
                    
                    <br /><br />
                    <b>Splice</b>
                    <br />
                    <br />
                    <b>Reduce</b>
                    <br />

                    <br /><br />
                    <b>Higher-Order functions</b>
                    <br />

                    <br /><br />
                    <b>Recursion</b>
                    <br />

                    <br /><br />
                    <b>Composition</b>
                    <br />
                    <br />
                    <br /><br />
                    <br />
                    <br />
                    <br />
                    </p>
        </div> 
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
export default S3