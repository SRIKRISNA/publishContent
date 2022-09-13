import React, { useEffect, useState } from 'react'
import "./style.css"
import Main from './Main'
import axios from 'axios';
import Sidebar from './Sidebar';
const Posts = () => {
    const [data, setdata] = useState([])
    const [profilename, setprofilename] = useState("")
    const [get, setget] = useState(true)
    const authToken = localStorage.getItem("authorization");
    useEffect(() => {
        axios({
            url: "http://localhost:5000/posts",
            method: "GET",
            headers: {
                authorization: authToken
            },
            data: {}
        }).then((res) => {
            setdata(res.data[0].contact)
            setprofilename(res.data[0].userId.slice(0, 5))

        })
    }, [get])
    return (
        <div className='contact'>
            <div className='leftside'>
                <Sidebar />
            </div>
            <div className='rightside main'>
                {/* <Main data={data} setget = {setget} get ={get}/> */}
                
            </div>
        </div>
    )
}

export default Posts