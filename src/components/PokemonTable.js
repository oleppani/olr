//import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'



const PokemonTable = () => {
  const pokemons =[
   {name: 'Pikachu', power: 50, id:1},
   {name: 'Bulbasaur', power: 89, id:2},
   {name: 'Rattata', power: 33, id:3}
  ]

 
    function PokeTable() {
      return React.createElement(
        "table",
        { className: "pokes" },
        React.createElement("td", null, "NAME"),
        React.createElement("td", null, "POWER"),
        
        pokemons.map(pokemon => (
          React.createElement("tr", null, 
            React.createElement("td", null, pokemon.name),
            React.createElement("td", null, pokemon.power)
          ) 
        ))
      )
      }
/***
 * 
 * return(
      ReactDOM.render(
        React.createElement(PokeTable, null, null),
          document.getElementById("root")
        )
    )
 */
      
    /*return(
      
        React.createElement(PokeTable, null, null),
          document.getElementById("root")
        )
    */
ReactDOM.render(
      React.createElement(PokeTable, null, null),
        document.getElementById("root")
      )

}
export default PokemonTable
