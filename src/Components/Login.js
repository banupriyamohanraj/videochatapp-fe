import React, { useState,useContext } from 'react'
import { SocketContext } from '../Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    let [email,setemail] = useState("");
    let[password,setpassword] = useState("");
    const { setuserlist,setuserLoggedIn,setName} = useContext(SocketContext);
    toast.configure()

    let UserSubmit = async (e) => {
        e.preventDefault()
      
        await fetch('https://videochatapp-be.vercel.app/auth/login', {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => {
                return res.json();
            }).then((data) => {
              console.log(data)
              let mesg = data.message
              if(mesg === "Login Sucessfull"){
                setuserLoggedIn(true)
                setuserlist(data.data)
                setName(data.data.firstname)
                toast(mesg, { position: toast.POSITION.TOP_CENTER })
               }
             
            })

    }


  return (
    <div  className='container-fluid ' style={{color:"white"}}>
        <div className='row m-0 justify-content-center'>
            <div className='col-5 p-5'>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setemail(e.target.value)}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setpassword(e.target.value)}/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-dark" onClick={UserSubmit}>Submit</button>
</form>
            </div>
        </div>
      
    </div>
  )
}

export default Login
