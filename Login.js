import React, { useState } from 'react'
import axios from 'axios';   
 
export default function Login() {

const [user, setUser] = useState({
 name:"",
  email:"",
password:"",
reEnterpassword:""
})

  const handleonchange = e => {
  const { name, value} = e.target
  setUser({
    ...user,
    [name]: value
  })
}

const Login =() => {
 const { name,email,password,reEnterpassword} =user
  if(name && email && password &&(password === reEnterpassword)){

  axios.post("http://localhost:8000/login",user)
.then( res => console.log(res))
  } else {
    alert("not suceesfully pls try again")
  }
}



  return (
    <div className='login'>
    <marque><h1>login</h1></marque>
      <input type="text" name='name' value={user.name} placeholder='enter your name' onChange={handleonchange}></input>
      <input type="email" name='email' value={user.email} placeholder='enter your email' onChange={handleonchange}></input>
      
      <input type="password" name='password' value={user.password} placeholder='enter your password' onChange={handleonchange}></input>
      <input type="password" name='reEnterpassword' value={user.reEnterpassword} placeholder='enter your reEnterpassword' onChange={handleonchange}></input>

      <div className='button' onClick={Login}>login</div>
      <div>or</div>
     <div className='button'>register</div>
    </div>
  )
}
