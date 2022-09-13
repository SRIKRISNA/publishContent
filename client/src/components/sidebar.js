import React from 'react'
import { FiLogOut } from "react-icons/fi"
import { MdContacts } from "react-icons/md"
import "./style.css"
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const Navigate = useNavigate()
  const Logouthandler = ()=>{
    localStorage.setItem("authorization", "");
    Navigate("/")
  }
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-top">
          <h2>Logo</h2>
          <br />
          <Link to="/posts"><span className='link-btn'>Publish Content</span></Link>
          <Link to="/comments"><span className='link-btn'>Comments</span></Link>
          <Link to="/posts"><span className='link-btn'>History</span></Link>

          <br /><br />
          <button> <MdContacts size={"16px"} /> Total Contacts <b style={{ fontSize: "16px" }}>|</b></button>
        </div>
        <div className="sidebar-bottom">
          <span style={{"cursor":"pointer"}}> <FiLogOut size={"16px"}  onClick={(e)=>Logouthandler(e)} /> Log out</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar