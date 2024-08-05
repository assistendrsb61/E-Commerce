import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <span>Redux Toolkit</span>
        <div>
            <Link className='navLink' style={{fontWeight:"bolder"}} to={"/"}>Home</Link>
            <Link className='navLink' style={{marginRight:"10px",fontWeight:"bolder"}} to={"/cart"}>Cart</Link>
            <span style={{fontWeight:"bolder"}}>items : 0</span>
        </div>
    </div>
  )
}

export default Navbar
