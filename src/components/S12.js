import React from 'react'
//import {useTranslation} from "react-i18next"


const S12 = () => {
  // eslint-disable-next-line
  //const [t, i18n] = useTranslation('common')
  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>React and the server</h2> 
    <p>	
		<b>Isomorphic and Universal</b>
    <br />
    Isomorphic code can be rendered in multiple platforms, other platforms than browser
    <br />
    Universal code can be run in multiple environments with exactly same code.
    <br /><br />

    <b>Express server</b>
    <br />
    Express server is a simple node.js server.
    <br />
    Command to install express server: npm install express
    <br />

    Here is an example of server created with express. This server return static html (JavaScript) file index.html on every HTTP GET request.
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
    import express from "express"
    <br />
const app = express()
<br />const path = require("path")
<br />
app.use(express.static('public'))
<br />
app.get('*',(req,res)=&#62;&#10100;
<br />res.sendFile(path.resolve(__dirname,'public','index.html'))
<br />&#10101;)

<br />app.listen(&#10100; port: process.env.PORT || 3001&#10101;)
.then((&#10100; url, subscriptionsUrl &#10101;) =&#62; &#10100;
  console.log(`Server ready at $&#10100;url&#10101;`)
  console.log(`Subscriptions ready at $&#10100;subscriptionsUrl&#10101;`)
  &#10101;)

      </div>

      <br />

      Example of Server side package.json. Nodemon restarts server when code changes:
      <br />
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
      <br />"scripts": &#10100;
      <br />...
      <br />"dev:build-server": "NODE_ENV=development webpack --config webpack.server.js
      <br />--mode=development -w",
      <br />"start": "nodemon index.js",
      <br />"dev": "npm-run-all --parallel build dev:*"
      <br />&#10101;
      <br />&#10101;

    </div>
<br /><br /><br />
 Next.js and Gatsby are other frameworks for creating static React websites (and server side rendering) .

  <br />



    

</p> 
  </div>
)
}
export default S12