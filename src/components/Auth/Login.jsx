import React, { useState } from 'react'

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    const 

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600'>
        <form 
        action=""
        onSubmit={(e)=>{
            SubmitHandler(e)
        }}
        className='flex flex-col gap-10 items-center justify-center p-20'>
            <input onChange={(e)=>{
                handleChange
                value = email
            }} required className='border-2 border-emerald-600 rounded-full py-3 px-5 outline-none text-xl' type="email" placeholder='Enter your email' />            
            <input onChange={(e)=>{
                handleChange
            }} required className='border-2 border-emerald-600 rounded-full py-3 px-5 outline-none text-xl' type="password" placeholder='Enter your password'/>  
            <button className='bg-emerald-600 rounded-full py-3 px-5 outline-none'>Login</button>          
        </form>
      </div>
    </div>
  )
}

export default Login
