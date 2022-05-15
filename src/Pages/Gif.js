import { React, useEffect, useState } from 'react'
import axios from 'axios';
import {Autocomplete,TextField,CustomSelect,CustomOptionGroup} from '@mui/material'
import Post from './Post';
function Gif() {
  const [data, setData] = useState([])
  const [options, setOptions] = useState('')


  useEffect(() => {
    getData()
  }, [])


  async function getData(id) {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=ALD8S0ZLmzG4MWlhectF6eYjrYPVRU9d&q=app&limit=100&offset=0&rating=g&lang=en`
  
    try {
      const item = await axios(URL)
      let fetchgif = await item
      if (fetchgif.status) {
        setData(fetchgif.data.data.url)
        console.log(fetchgif)
      }
    }
    catch (error) {
      if (error) throw error
      console.log("Something is Wrong");
    }
  }

  return (
    <>
     
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={()=>setOptions(data)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Gif" />}

    />
    </>
  )
}

export default Gif


