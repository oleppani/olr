import React from 'react'
//import {useTranslation} from "react-i18next"


const S2 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2><font color='black'>JavaScript for React</font></h2> 
    
    <p>
    <h3>Declaring variables</h3>
    Variable types:
    <ul>
      <li>Const - immutable = set value only once</li>
      <li>Let - mutable = can be changed</li>
      <li>Var - mutable = can changed, old type of variable</li>
      <br />
      React detects variable data types automatically.
      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
        <b>const</b>
        <br />
        const test = 'Hello world!'
        <br />
        test = "Hello moon!" //error because const is immutable
        <br />
        <br />
        <b>let</b>
        <br />
        let testing = test + " Here we are!"
        <br />
        console.log(testing) // prints "Hello world! Here we are!" to console
        <br />
        testing = 'Bye bye moon!' // no errors, because let is mutable
        <br />
         </div>
      </ul>
      <h3>For and while loops</h3>
      <ul>
        <li>For</li>
        </ul>
        <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>for(let i=0;i=i&#43;1;i&lt;10)&#10100;
              <br />
              console.log(i)
              <br />
              &#10101;
              <br />
            // prints "0123456789" in console
            </p>
        </div>
        <ul>
        <li>While</li>
        <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p><br />
            let i = 0<br />
              while(i&lt;10)&#10100;
              <br />
              console.log(i)
              <br />
              i = i+1
              <br />
              &#10101;
              <br />
            // prints "0123456789" in console
            </p>
        </div>    
      </ul>
      <h3>Functions, arguments</h3>
      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p><br />
            function printing(place='Pori', age=7)&#10100;
              <br />
              console.log('I live in ' &#43; place &#43; ' and I am ' &#43; age &#43; ' years old')
            &#10101;
            printing()  // prints "I live in Pori and I am 7 years old" in console, because no arguments are given to function and default values are used.
            <br / >
            printing('Tampere', 30)  // prints "I live in Tampere and I am 30 years old" in console, because arguments are given and used.
            </p>
        </div> 
        <b>Function returns</b>
        <br />
        <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p><br />
            Functions can use 'return' statement if we want to return something after processing in function.
            <br /><br />
            function after(years, age)&#10100;
              <br />
              return(years+age)
            &#10101;
            <br />
            const howold = after(19, 33)
            <br />
            console.log(howold)  //prints 52 in console
            </p>
        </div>   

        <b>Arrow functions</b>
        <br />
        Arrow functions can be used since ES6 version. It simplifies functions.
        <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p><br />
            const printing = (place, age) =&#62; 'I live in $&#10100;place&#10101; and I am $&#10100;age &#10101; years old'
            <br />
            console.log(printing('Pori', 7)) // prints "I live in Pori and I am 7 years old" in console.
            </p>
        </div>   
      <ul><li></li></ul>

      <h3>Objects</h3>

      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>
            Object are declared like this:
              <br />
              const pokemon = 
              <br />
              &#10100;
              <br />
              name: 'pikachu',
              <br />
              age: 100,
              <br />
              power: 50
              <br />
              &#10101;
              <br />

              const &#10100; name &#10101; = pokemon
              <br />

              console.log(name) //print "pikachu" in console
              <br /> 
              console.log(pokemon.name) //print "pikachu" in console
            </p>
        </div>

        <h3>Arrays</h3>

      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>
            Arrays are declared like this:
              <br />
              const pokemon = 
              <br />
              &#91;'pikachu','bulbasaur', 'rattata'
              &#93;
              <br />
              
              <br />
              Arrays can contain objects or arrays:
              <br />
              const pokemon = 
              <br />
              &#91;
              <br />
              &#10100;
              <br />
              name: 'pikachu',
              <br />
              age: 100,
              <br />
              power: 50
              <br />
              &#10101;
              ,
              &#10100;
              <br />
              name: 'bulbasaur',
              <br />
              age: 200,
              <br />
              power: 70
              <br />
              &#10101;
              ,
              &#10100;
              <br />
              name: 'rattata',
              <br />
              age: 10,
              <br />
              power: 20
              <br />
              &#10101;
              <br />
              &#93;
              <br />
              <br />
              or arrays:
              <br />
              const pokemon = 
              <br />
              &#91;
              <br />
              &#91;'pikachu','bulbasaur', 'rattata'
              &#93;,
              &#91;'1','2', '3'
              &#93;,
              &#91;'a','b', 'c'
              &#93;
              <br />
              &#93;
            </p>
        </div>
      <ul><li></li></ul>
     

      <h3>Spread</h3>
      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>
            Arrays are declared like this:
              <br />
              Spread operator three dots "..." can combine arrays or describe remaining parts of array
              <br />
              const labels =['a','b','c']
              const nums = [1,2,3]
              <br />
              const labnum = [..labels, ...nums]
              <br />
              console.log(labnum)  //print abc123 in console
              <br />

              const [first, ...last] = labels
              <br />
              console.log(last)  //print bc in console
            </p>
        </div>
      <ul><li></li></ul>
      

      <h3>Asynchronous</h3>
      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>
            React (JavaScript) can be used asynchronously. If we want to wait for some actions to be completed before we do next step, we can use then or async/await:
            <br />
            Then:
            <br />
            fetch("https://api.query.com").then(res =&#62;
              console.log(res.json()) // print fetched JSON in console after fetch is completed
            )
            <br />
            <br />
            <br />
            Async/await:
            <br />
            const query = async () =&#62; &#10100;
            <br />
              try &#10100;
              <br />
                let res = await fetch(https://api.query.com")
                <br />
                let &#10100; results &#10101; = res.json()
                <br />
                console.log(results) // print fetched JSON in console after fetch is completed
                <br />
                &#10101; catch (error) &#10100; 
                <br />
                console.error(error) // print in console if error is occurred
                <br />
                &#10101;
                <br />
            &#10101;
            <br /><br />
          query()
            </p>
        </div>

      <ul><li></li></ul>
      
      <h3>Classes</h3>

      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>
            Classes can be used since ES2015.
            <br /><br />
            
            With function: <br />
            function Pokemon(name, power) &#10100;  
            <br />
            this.name = name
            <br />
            this.power = power
            <br />
            &#10101;
            <br />
            Pokemon.prototype.consoling = function() &#10100;  
            <br />
            console.log("Pokemon named " + this.name + " has " + this.power + " power")
            <br />
            &#10101;
            <br />
            const pikachu = new Pokemon("Pikachu", 50)
            <br />
            pikachu.consoling(); // prints "Pokemon named Pikachu has 50 power"
            <br />
            <br /><br />
            Same thing with class:
            <br /><br />
            class Pokemon &#10100;
            <br />
              constructor(name, power) &#10100;
              <br />
                this.name = name
                <br />
                  this.power = power
                  <br />
                  &#10101;

                  <br />
                  consoling() &#10100;
                  <br />
                  console.log('Pokemon named $&#10100;this.name&#10101; has $&#10100;this.length&#10101; power')
                  <br />
                  &#10101;
                  <br />
                  &#10101;
                  <br />
                  const pikachu = new Pokemon("Pikachu", 50)
                  <br />
                  pikachu.consoling() // prints "Pokemon named Pikachu has 50 power"
            </p>
        </div>
      <ul><li></li></ul>
      

      <h3>Modules</h3>
      <div style={{backgroundColor: "#444444", color:"#C4DFE6",fontSize: "14px" }}>
            <p>
            With modules you can reuse same code in different places.
            <br /><br />
            File Comp.js includes exported component Pokemons:
            <br /> <br />
           import React from 'react'
            <br />
            <br />
            const Pokemons = () =&#62; &#10100;
            <br />
            const pokes = ['pikachu', 'bulbasaur', 'rattata']
            <br />
            
             
            <br />
            return (&#10100;pokes.map(poke =&#62; (
              <br />
                Pokemon name: &#10100;poke.name&#10101;, power: &#10100;poke.power&#10101;
                <br />
                ))&#10101;
                <br />
                )
            <br />
            &#10101;
            <br />
            export default Pokemons
            <br />
            __________________________
            <br />
            In other file (App.js for example) you import module and use exported functions:
            <br />
            <br />
            import Pokemons as po from "./Comp.js"
            <br />
            
            <br />
            const App = () =&#62; &#10100;
            <br /><br />
            
            <br />
              return(
              <br />
              &lt;po /&#62;
                <br />
                  
                  <br />
                  )
                  <br />
                  &#10101;
                  <br />
                export default App
                  <br />
                  
                  <br />
                  
                  <br />
                  
                  <br />
                  
                  <br />
                  
                  <br />
                  
            </p>
        </div>
        </p>
  </div>
)
}
export default S2