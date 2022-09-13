import React, { useEffect, useState } from 'react'
import './form.css';
import Left from '../assets/left.png';
import Right from '../assets/right.png';
import Dots from '../assets/dots.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'


const Login = () => {
    const Navigate = useNavigate();
    const [login, setLogin] = useState({
        userName: "",
        password: ""
    })
    const [show,setshow]=useState(false)
    useEffect(()=>{
        const authToken = localStorage.getItem("authorization");
        if(authToken){
            Navigate("/")
        }
    })

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        } else {
            setIcon(eyeOff);
            setType('password');
        }

    }

    const handleLogin = (e, ) => {
        e.preventDefault();
        if (login.userName === "" || login.password === "") {
            alert("username or password is missing");
        } else {
            axios({
                url: "http://localhost:5000/user/login",
                method: "POST",
                headers: {
                },
                data: login
            }).then((loginData) => {
                localStorage.setItem("authorization", loginData.data.AuthToken);
               Navigate("/posts");
            }).catch((err) => {
                setshow(!show)
                setTimeout(()=>{
                    setshow(!setshow)
                },2000)
                console.log(err)
            })
        }
        setLogin({userName:"",password:""})
    }
    const inputHandler = (e, id) => {
        if (id === "userName") {
            setLogin({ ...login, userName: e.target.value })
        } else if (id === "password") {
            setLogin({ ...login, password: e.target.value })
        }
    }
    return (
        <>
            <div className='left-img'>
                <img src={Left} alt='Eclipse' />
            </div>
            <div className='signup-container'>
                <div className='left-dots'>
                    <img src={Dots} alt='Circles' id='dots' />
                </div>
                <div className='myform'>
                    <div className='logo' style={{ "alignItems": "center" }}>
                        <h1 style={{ "color": "#7D8CC4", "fontWeight": "500" }} >Logo</h1>
                        <p>Enter your credentials to login account</p><br />
                    </div>
                    <form className='signup-form' onSubmit={(e) => handleLogin(e)}>
                        <input type="text field"  placeholder="Username" style={{marginBottom:"20px",border:"1px solid grey"}} value={login.userName} className="inputField field" onChange={(e) => inputHandler(e, "userName")} /><br />
                        <div className='input-pwd wrapper'>
                            <input type="password" style={{marginBottom:"20px",border:"1px solid grey"}} placeholder="Password" value={login.password} id='password' className="inputField field field" onChange={(e) => inputHandler(e, "password")} />
                            <span onClick={handleToggle} style={{ "display": "none" }}><Icon icon={icon} size={20} /></span><br/>
                            {show ? <span className='error'>Username And Password Does't Match</span> : ""}
                        </div> <br />
                        
                        <button type='submit' className='signup-btn field' >Log In</button><br />
                        <Link to="/signup"><span className='link-btn'>Sign Up</span></Link>
                    </form>
                </div>
                <div className='right-dots' >
                    <img src={Dots} alt='Circles' id='dots' />
                </div>
            </div>
            <div className='right-img'>
                <img src={Right} alt='Eclipse' />
            </div>
        </>
    )
};
export default Login;


// import React, { useState } from 'react'
// import './form.css';
// import Left from '../assets/left.png';
// import Right from '../assets/right.png';
// import Dots from '../assets/dots.png';
// //import { useNavigate } from 'react-router-dom';
// //import Eye from "../assets/eye.svg"
// import axios from "axios";
// import { Icon } from 'react-icons-kit'
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye'


// const Login = () => {

//     const [login, setLogin] = useState({
//         userName: "",
//         password: ""
//     })

//     const [type, setType] = useState('password');
//     const [icon, setIcon] = useState(eyeOff);

//     const handleToggle = () => {
//         if (type === 'password') {
//             setIcon(eye);
//             setType('text');
//         } else {
//             setIcon(eyeOff);
//             setType('password');
//         }

//     }

//     const handleLogin = () => {
//         // console.log(setLogin);
//         axios({
//             url: "http://localhost:5000/user/login",
//             method: "POST",
//             headers: {
//             },
//             data: { userName: login.userName, password: login.password }
//         }).then((loginData) => {
//             localStorage.setItem("authorization", loginData.data.authToken);
//             // Navigate("./home");
//             //console.log(loginData)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }

//     return (
//         <>
//             <div className='left-img'>
//                 <img src={Left} alt='Eclipse' />
//             </div>
//             <div className='signup-container'>
//                 <div className='left-dots'>
//                     <img src={Dots} alt='Circles' id='dots' />
//                 </div>
//                 <div className='myform'>
//                     <div className='logo' style={{ "alignItems": "center" }}>
//                         <h1 style={{ "color": "#7D8CC4", "fontWeight": "500" }} >Logo</h1>
//                         <p>Enter your credentials to login account</p><br />
//                     </div>
//                     <form className='signup-form'>
//                         <input type="text" placeholder="User ID" className="inputField" onChange={(e) => { setLogin({ ...login, userName: e.target.value }) }} /><br />
//                         <div className='input-pwd wrapper'>
//                             <input type={type} placeholder="Password" id='password' className="inputField" onChange={(e) => { setLogin({ ...login, password: e.target.value }) }} />
//                             <span onClick={handleToggle} style={{"display":"none"}}><Icon icon={icon} size={20} /></span>
//                         </div> <br />
//                         <button type='submit' className='signup-btn' onChange={handleLogin} >Log In</button><br />
//                         <a href='./signup' className='link-btn' >Sign Up</a>
//                     </form>
//                 </div>
//                 <div className='right-dots' >
//                     <img src={Dots} alt='Circles' id='dots' />
//                 </div>
//             </div>
//             <div className='right-img'>
//                 <img src={Right} alt='Eclipse' />
//             </div>
//         </>
//     )
// };
// export default Login;