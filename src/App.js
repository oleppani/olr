import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import Footer from './components/Footer'
import React, { useState, useEffect, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import {
  Container,
  Button,
  AppBar,
} from '@material-ui/core'
function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <div className="fill-window" id='all'  style={{ 
        width:'100%',
        height: '100%', 
        position: 'absolute', 
        left: '0px'
      }}>
    
    <Container>
      <Router>
        <AppBar position="static">
            <Header />
            <Left />
            <Right />
            <Footer />
            <div align='bottom' position='fixed' style={{right:'0px', height:'10px', backgroundColor: "#C4DFE6", color:"#C4DFE6"}}></div>
        </AppBar>
        <br />
        <Switch>
          <Route path="/home">
            </Route>
          <Route path="/login">
          </Route>
          <Route path="/login/:id">
           
          </Route>
          <Route path="/logout">
        
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
        <br /><br /><br /><br />
        
      </Router>
    </Container>
    </div>
    </Suspense>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          Osmo Learning React:
          <ul>
            <li>
            First you need to install Nodejs, Reactjs, Git, VS Code
            </li>
            <li>
            Registrate in GitHub, Heroku (and mongodb.com if you need DB)
          
            </li>
            <li>
            Create React App in Command prompt with "npx create-react-app AppName"
         
            </li>
            <li>
            You can edit your App details with command "npm init"
         
            </li>
            <li>
            Git is used with commands: "git init" (first time initialization), "git remote add name git@github.com:oleppani/daas.git" (connect to GitHub repository in first time of use) "git add ." (adding all changes), "git commit -m'details'" (describe what have been done), "git push repository master" (push changes in GitHub or Heroku)
            </li>

          </ul>
      </header>
    </div>
  );
}

export default App;
