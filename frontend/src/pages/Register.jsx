import { Link, useNavigate } from "react-router-dom"
import Footer from '../components/Footer'
import { useState } from "react"
import axios from 'axios'
import {URL} from '../url'

const Register = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  const navigate=useNavigate()

  const handleRegister=async()=>{
    
    try{
      const res=await axios.post(URL+"/api/auth/register",{username,email,password})
      // console.log(res.data)
      setUsername(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      setError(false)
      navigate("/login")
    }catch(err){
      setError(true)
      console.log(err)
    }
  }
  return (
    <>
    <div className="flex items-center justify-between px-6 md:px-[200px]
    py-4 ">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
        <h3><Link to="/login">Login</Link></h3>
        </div>
    <div className="w-full flex justify-center itmes-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            <h1 className="text-xl font-bold text-left">Create an account</h1>
            <input onChange={e=>setUsername(e.target.value)} className="w-full px-4 py-2 rounded-lg border-2 border-gray-500 outline-1" type="text" placeholder="Enter your username"/>
            <input onChange={e=>setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg border-2 border-gray-500 outline-1" type="email" placeholder="Enter your email"/>
            <input onChange={e=>setPassword(e.target.value)} className="w-full px-4 rounded-lg py-2 border-2 border-gray-500 outline-1" type="password" placeholder="Enter your password"/>
            <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-blue-600 rounded-lg hover:drop-shadow-xl">Register</button>
            {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
            <div className="flex justify-center items-center space-x-4">
                <p>Already have an account?</p>
                <p className="text-blue-400 hover:text-blue-700"><Link to="/login">Log In</Link></p>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Register