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

    Here is a server code for this App. This server return static html (JavaScript) file index.html on every HTTP GET request.
    <div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
    <br />

    <br />const express=require('express')
    <br />const app=express()
    <br />const cors=require('cors')
    <br />const path = require('path')
    
    <br />const request = require('request')

    <br />app.use(cors())
    <br />app.use(express.static('public'))
    <br />app.get('*',(req,res)=&#62;&#10100;
    <br />res.sendFile(path.resolve(__dirname,'public','index.html'));
    <br />&#10101;)
    <br /><br />app.post('/api', async (req, res) =&#62; &#10100;
    
    <br />  await request(&#10100;
      <br />    method: 'GET',
      <br />     uri: req.headers.url,
      <br />     headers: &#10100;&#10101;
      <br />    &#10101;, function (error, response, body)&#10100;
      <br />      if(!error &amp;&amp; response.statusCode === 200)&#10100;
      <br />           console.log(body)
      <br />          res.json(body);
      <br />       &#10101;
      <br />       &#10101;)
    
      
      <br />    &#10101;)
    <br />
    <br />app.listen(&#10100; port: process.env.PORT || 3001&#10101;)

   
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