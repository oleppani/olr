import React,{ useState, useEffect } from 'react'
import {
  TextField,
  Button,
Select,
MenuItem
} from '@material-ui/core'

const S8 = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [fetching, setFetch] = useState(false)
  const [data, setData] = useState('')
  const [dataparsed, setDataparsed] = useState('')
  const [selected, setSelected] = useState(false)

  async function fetchingg(){
    
    try {
      let dat = await fetch(url, {
        crossDomain:true,
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          username: '',
          password: '',
        })
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
    }
  }, [data])

  return(
  <div style={{ 
    font: 'Verdana'
  }}><br />
    <h2>Incorporating data</h2> 
    <p>
		1. Requesting Data
			1. Sending Data with a Request
			2. Uploading Files with fetch
			3. Authorized Requests
			4. Saving Data Locally
			5. Handling Promise States
		2. Render Props
		3. Virtualized Lists
			1. Creating a Fetch Hook
			2. Creating a Fetch Component
			3. Handling Multiple Requests
			4. Memozing Values
			5. Waterfall Requests
			6. Throttling the Network Speed
			7. Parallel Requests
			8. Waiting for Values
			9. Canceling Requests
		4. Introducing GraphQL
			1. GitHub GraphQL API
			2. Making a GraphQL Request


<br />React developing is usually Front end developing and data can be gathered from many different Back ends. Requesting and transforming data is normally done by using HTTP and JSON.
<br />
<br />


<Button style={{backgroundColor: "red", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={({ target }) => setUrl('https://pokeapi.co/api/v2/pokemon')}>Pokemons</Button>
<Button style={{backgroundColor: "green", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={({ target }) => setUrl('https://api.github.com/users/oleppani')}>Osmo's Github info</Button>
<br />
Url to be fetched:    <TextField
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
            <br />

<br /><Button style={{backgroundColor: "blue", color:"#C4DFE6",fontSize: "14px" }} type='submit' onClick={({ target }) => fetchingg()}>Fetch data from URL</Button>
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

<br />

<br />

<br />

<br />

<br />
      <h3></h3>
    
    <ul>
      <li></li>
      <li></li>
      <li></li>

      </ul>
      <h3></h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
      <h3></h3>
      <ul><li></li></ul>

      <h3></h3>
      <ul><li></li></ul>
     

      <h3></h3>
      <ul><li></li></ul>
      

      <h3></h3>
      <ul><li></li></ul>
      
      <h3></h3>
      <ul><li></li></ul>
      

      <h3></h3>
      <ul><li></li></ul>
      
</p> 
  </div>
)
}
export default S8