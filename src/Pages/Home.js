import React, { useEffect, useState } from 'react'
import { Box, TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';
function Home(props) {

    const [data, setData] = useState('')
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const [btn, setBtn] =useState(false)

    const textChange = (e) => {
        setData(e.target.value)
    }

    function formSubmit(e) {
        if (!data) {
        } else {
            setItems(datas => {
                return [...datas, data]
            })
            setData('')
        }
    }
    const deleteitem = (id) => {
        console.log("deleted")
        setItems((old) => {
            return old.filter((arr, index) => {
                return index !== id;
            })

        })
    }

    return (
        <>
            <div className='main'>
                <div className='form'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField autoComplete="data" value={data} variant="standard" required id="data" color="primary" label="Write somthing here " onChange={e => textChange(e)} />
                    </Box> <br />
                    <button className='gifbtn' type="button" onClick={() => {setBtn(true) }}>GIF</button>
                    <Button variant="contained" onClick={e => formSubmit(e)} color="primary">POST </Button>
                    
                    <Popup trigger={btn} setTrigger={setBtn}>
                    </Popup>
                    
                </div>
                {
                    items.map((item, i) => 
                         <>
                         <select>
                             
                         </select>
                            <ol key={i} className='ol'>
                                <Post text={item} />
                                
                            </ol>

                        </>
                    )
                }

            </div>
        </>
    )
}

export default Home