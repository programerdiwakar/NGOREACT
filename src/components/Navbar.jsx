import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
  <div class="container-fluid  ">
        <a class="navbar-brand p-2" href="#"><img className='img' src="images/logo.png" alt="" style={{width:'11vh',}} /></a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{fontSize:'1rem',marginRight:"2rem"}}>
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse  " id="navbarNavAltMarkup"  >
      <div class="navbar-nav" style={{backgroundColor:"",borderRadius:"5px",textAlign:"center"}}>
        <Link class="nav-link active " aria-current="page" to="/">Home</Link>
        <Link class="nav-link active" to="/about">About</Link>
        <Link class="nav-link active" to="/volunteer">Volunteer</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
