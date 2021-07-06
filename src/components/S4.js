import React from 'react'
import {
  Link
} from "react-router-dom"
import {
  Button
} from '@material-ui/core'


const S4 = () => {
  
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>How React works</h2> 
    <p>
    <b>React and ReactDom are libraries that are used to render views on browser. The Document Object Model (DOM) is manipulated to get wanted views and actions. React enables Single-Page-Apps (SPA) that includes all the views in one App and views changing depending on user choices. </b>
    <br /><br />
    With code from module PokemonTable.js below, we can create table of Pokemons by modifying DOM. See results from here <Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" component={Link} to="/pt">
          Pokemon table
          </Button>:
    <br /><br />
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
import React from 'react'
<br />
import ReactDOM from 'react-dom'



<br />
const PokemonTable = () =&#62; &#10100;
<br />  const pokemons =&#91;
<br />
&#10100;name: 'Pikachu', power: 50, id:1&#10101;,
<br />
   &#10100;name: 'Bulbasaur', power: 89, id:2&#10101;,
   <br />
      &#10100;name: 'Rattata', power: 33, id:3&#10101;
      <br />
         &#93;

 
         <br />
            function PokeTable() &#10100;
            <br />
            return React.createElement(
              <br />
              "table",
              <br />
              &#10100; className: "pokes" &#10101;,
              <br />
              React.createElement("td", null, "NAME"),
              <br />
              React.createElement("td", null, "POWER"),
        
              <br />
                      pokemons.map(pokemon =&#62; (
                        <br />
                        React.createElement("tr", null, 
                        <br />
                        React.createElement("td", null, pokemon.name),
                        <br />
                        React.createElement("td", null, pokemon.power)
                        <br />) 
                        <br />
                        ))
                        <br />
                         )
                         <br />
                         &#10101;

                          <br /><br />
    return(
      <br />
    ReactDOM.render(
      <br /> React.createElement(PokeTable, null, null),
      <br /> document.getElementById("root")
      <br /> )
      <br />)

      &#10101;
      <br />
export default PokemonTable

</div>
<br />     
</p> 
  </div>
)
}
export default S4