import { Link, useLocation, useNavigate } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import Menu from "./Menu";
const Navbar = () => {
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  // console.log(prompt)
    const showMenu=()=>{
      setMenu(!menu)
    }
    const {user}=useContext(UserContext)
   
  return (
    <div className="flex items-center justify-between px-6 bg-yellow-400 md:px-[200px]
    py-4 ">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market</Link></h1>
        {path==="/" &&<div className="flex bg-gray-300 rounded-lg px-4 py-2 justify-center items-center space-x-0">
            <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><BsSearch /></p>
            <input onChange={e=>setPrompt(e.target.value)} className=" bg-gray-300 outline-none px-3 py-1" placeholder="Search a post" type="text"/>
        </div>}
        <div className="hidden md:flex items-center justify-center space-x-4 
        md:space-x-4">
            {user?<div><h3 className="rounded-lg bg-blue-600 hover:shadow-lg text-white px-4 py-2"><Link to="/write">Write</Link></h3></div>   :   <div className="rounded-lg bg-blue-600 hover:shadow-lg text-white px-4 py-2"><h3><Link to="/login">Login</Link></h3></div>}
            {user?
            <div onClick={showMenu}>
              <p className="cursor-pointer relative"><FaBars /></p>
              {menu && <Menu/>}
            </div>  : 
            <div className="rounded-lg bg-blue-600 hover:shadow-lg text-white px-4 py-2"><h3><Link to="/register">Register</Link></h3></div>}
        </div>
        <div onClick={showMenu} className="md:hidden text-lg">
          <p className="cursor-pointer relative"><FaBars /></p>
          {menu && <Menu/>}
        </div>
    </div>
  )
}

export default Navbar