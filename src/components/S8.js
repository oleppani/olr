import React,{ useState, useEffect } from 'react'
import {
  TextField,
  Button
} from '@material-ui/core'

const S8 = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  //const [fetching, setFetch] = useState(false)
  const [data, setData] = useState('')
  const [dataparsed, setDataparsed] = useState('')
  //const [dataparsedeka, setDataparsedeka] = useState('')
  //const [selected, setSelected] = useState(false)

  async function fetchingg(){
    let urli = 'https://osmolearningreact.herokuapp.com/api'
    try {
      console.log('testaus')
      let dat = await fetch(urli, {
        method: 'POST',
        headers: {'Content-Type':'application/json',
        'Access-Control-Allow-Origin': 'https://pokeapi.co/api/v2/pokemon', 'url':url },
        body: {'url': url}
      })
      let json = await dat.json();
    
      console.log(json)
      
      await setData(json)
      
      
    } catch (error) {
      console.error(error)
    }
        

  }
 

  useEffect(() => {
    if(data!==''){
      console.log(data)
      
     console.log(data)
     setDataparsed('')
    }
    if(data.results!==undefined){
      console.log(data.results)
    }
  }, [data])

  useEffect(() => {
    if(dataparsed.length>0){
      console.log(dataparsed[0])
      //setDataparsedeka(dataparsed[0])
    }
  }, [dataparsed])

  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>Incorporating data</h2> 
    <p>


<br />React developing is usually Front end developing and data can be gathered from many different Back ends. Requesting and transforming data is normally done by using HTTP and JSON.
<br />
<br />


<Button style={{backgroundColor: "red", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon')}>Pokemons</Button>
<Button style={{backgroundColor: "green", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setUrl('https://randomuser.me/api/')}>Random user API</Button>
<br />
Url to be fetched:    <TextField
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <br />

<br /><Button style={{backgroundColor: "blue", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => fetchingg()}>Fetch data from URL</Button>
          <br />
<br />
Result:
<br />
<br />
{data}

<br />

<br />
<br />

Data fetching from API is done by using this code:<br />
<div style={{backgroundColor:"#444444",color:"#C4DFE6",fontSize:"14px"}}>
  (Back end can be found from server section)<br />
  <b>Front end:</b>
  <br />
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  <br />
  const [data, setData] = useState('')
  <br />const [dataparsed, setDataparsed] = useState('')
  

  <br />async function fetchingg()&#10100;
  <br />  let urli = 'https://osmolearningreact.herokuapp.com/api'
  <br />  try &#10100;
    <br />    console.log('testaus')
    <br />    let dat = await fetch(urli, &#10100;
      <br />      method: 'POST',
      <br />      headers: &#10100;'Content-Type':'application/json',
      <br />      'Access-Control-Allow-Origin': 'https://pokeapi.co/api/v2/pokemon', 'url':url &#10101;,
      <br />      body: &#10100;'url': url&#10101;
      <br />    &#10101;)
      <br />    let json = await dat.json();
    
      <br />    console.log(json)
      
      <br />   await setData(json)
      
      
      <br />  &#10101; catch (error) &#10100;
        <br />    console.error(error)
        <br />  &#10101;
        

        <br />&#10101;
        </div>

<br />
      
      
</p> 
  </div>
)
}
export default S8