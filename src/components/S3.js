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
		
      
      <b>In JavaScript (and React) variables can be functions, functions can be stored in arrays and functions can include another functions or return function.</b>
      <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
            <p><br />
            <b>Function returns function:</b>
            <br />
            const pokemonList = function(pokemons) &#10100;
            <br />
            return function(pokemon) &#10100;
            <br />  pokemons("Pokemon name:" + pokemon.name)
            <br /> &#10101;
            <br /> &#10101;

            <br /><br />
            <b>Array include function:</b>
            <br /><br />
            const pokemons = &#91;
            <br />"Pikachu is little yellow pokemon",
            <br />pokemon =&#62; console.log(pokemon),
            <br />"with power of 56",
            <br />pokemon =&#62; console.log(pokemon)
            <br />&#93;

            <br />pokemons[1](pokemons[0]); // Pikachu is little yellow pokemon
            <br />pokemons[3](pokemons[2]); // with power of 56
            <br />
          
            <br />
            <h3>Imperative and declarative </h3>
            <br />
            <b>Imperative:</b>
            <br />
            Loop all chars individually.
            <br /><br />const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            <br />const fixed = ""

            <br /><br />for (let i = 0; i &lt; text.length; i++) &#10100;
                <br />if (text[i] === "o") &#10100;
                  <br /> fixed += "0";
                  <br />&#10101; else &#10100;
                    <br />fixed += text[i];
                    <br />&#10101;
                    <br />&#10101;

                    <br />console.log(fixed); // "L0rem ipsum d0l0r sit amet, c0nsectetur adipiscing elit, sed d0 eiusm0d temp0r incididunt ut lab0re et d0l0re magna aliqua. Ut enim ad minim veniam, quis n0strud exercitati0n ullamc0 lab0ris nisi ut aliquip ex ea c0mm0d0 c0nsequat. Duis aute irure d0l0r in reprehenderit in v0luptate velit esse cillum d0l0re eu fugiat nulla pariatur. Excepteur sint 0ccaecat cupidatat n0n pr0ident, sunt in culpa qui 0fficia deserunt m0llit anim id est lab0rum."
                    <br /><br /><br />
                    <b>Declarative:</b>
                    <br />const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
                    <br />const fixed = string.replace(/o/g, "0");

                    <br />console.log(fixed);
                    <br />

                    </p>
        </div> 
   
      
</p> 
  </div>
)
}
export default S3