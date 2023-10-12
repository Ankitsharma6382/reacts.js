import React from 'react'

export default function Register() {
  return (
    
         <div className='login'>
    <marque><h1>login</h1></marque>
      <input type="text" name='name' placeholder='enter your name'/> 
      <input type="email" name='email'placeholder='enter your email'/> 
      
      <input type="password" name='password' placeholder='enter your password'/> 
      <input type="password" name='reEnterpassword'  placeholder='enter your reEnterpassword'/>  

      <div className='button'>login</div>
      <div>or</div>
     <div className='button'>register</div>
    
    </div>
  )
}
