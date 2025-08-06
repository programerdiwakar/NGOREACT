import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
  <div className="container-fluid  ">
        <a className="navbar-brand p-2" href="#"><img className='img' src="images/logo.png" alt="" style={{width:'11vh',}} /></a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{fontSize:'1rem',marginRight:"2rem"}}>
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse  " id="navbarNavAltMarkup"  >
      <div className="navbar-nav" style={{backgroundColor:"",borderRadius:"5px",textAlign:"center"}}>
        <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        <Link className="nav-link active" to="/about">About</Link>
        <Link className="nav-link active" to="/volunteer">Volunteer</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
