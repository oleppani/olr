import React,{ useState, useEffect } from 'react'
import {
  TextField,
  Button
} from '@material-ui/core'

const S8 = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [fetching, setFetch] = useState(false)
  const [data, setData] = useState('')
  const [dataparsed, setDataparsed] = useState('')
  //const [selected, setSelected] = useState(false)

  async function fetchingg(){
    
    try {
      let dat = await fetch(url, {
        crossDomain:true,
        method: 'GET',
        headers: {'Content-Type':'application/json',
        'Access-Control-Allow-Origin': 'https://api.github.com/users/oleppani' },
      })
      setData(dat)
      console.log(dat)
    } catch (error) {
      console.error(error)
    }
        

  }
  useEffect(() => {
    if(fetching){
      setFetch(false)
      try {
        setData(fetch(url))
        //const userData = dat.json()
        //console.log(userData)
      } catch (error) {
        console.error(error)
      }
    }
  }, [fetching,url])


  useEffect(() => {
    if(data.data!==undefined){
      console.log(data)
      setDataparsed(data.data)
    }
  }, [data])

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
<Button style={{backgroundColor: "green", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setUrl('https://api.github.com/users/oleppani')}>Osmo Github info</Button>
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
{dataparsed}
<br />

<br />
<br />
<br />
<h3>GraphQL</h3>
<br />
<Button style={{backgroundColor: "red", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon')}>Pokemons</Button>
<Button style={{backgroundColor: "green", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => setUrl('https://api.github.com/users/oleppani')}>Github GraphQL interface</Button>
<br />
Url to be fetched with GraphQL:    <TextField
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <br />

<br /><Button style={{ backgroundColor: "blue", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={() => fetchingg()}>Fetch data with GraphQL</Button>
          <br />
<br />

<br />

<br />

<br />
      
      
</p> 
  </div>
)
}
export default S8