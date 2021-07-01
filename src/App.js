import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Left from './components/Left'
import Right from './components/Right'
import Footer from './components/Footer'
import Home from './components/Home'
import S1 from './components/S1'
import S2 from './components/S2'
import S3 from './components/S3'
import S4 from './components/S4'
import S5 from './components/S5'
import S6 from './components/S6'
import S7 from './components/S7'
import S8 from './components/S8'
import S9 from './components/S9'
import S10 from './components/S10'
import S11 from './components/S11'
import S12 from './components/S12'
import PokemonTable from './components/PokemonTable'
import React, { useState, useEffect, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
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
            <Home />
          </Route>
          <Route path="/jfr">
            <S2 />
          </Route>
          <Route path="/wtr">
            <S1 />
          </Route>
          <Route path="/fpwj">
            <S3/>
          </Route>
          <Route path="/hrw">
            <S4/>
          </Route>
          <Route path="/rwj">
            <S5/>
          </Route>
          <Route path="/rsm">
            <S6/>
          </Route>
          <Route path="/ecwh">
            <S7/>
          </Route>
          <Route path="/id">
            <S8/>
          </Route>
          <Route path="/sus">
            <S9 />
          </Route>
          <Route path="/rt">
            <S10/>
          </Route>
          <Route path="/rr">
            <S11/>
          </Route>
          <Route path="/rats">
            <S12/>
          </Route>
          <Route path="/pt">
            <PokemonTable/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          
          
          
        </Switch>
        <br /><br /><br /><br />
        
      </Router>
    </Container>
    </div>
    </Suspense>
      
    </div>
  );
}

export default App;
