import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-light navbar-expand-sm  fixed-top">
    <div className="container">
    <Link to="/" className="navbar-brand text-light fw-bold">
    <i className="fa fa-solid fa-industry"></i> &nbsp;
    Company Name
    </Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>


    <div id="navbarCollapse" className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
            <Link to="/" className="nav-link active text-light">
                Home
            </Link>
        </li>
        <li className="nav-item ">
          <Link to="/About" className="nav-link active text-light">
              About
          </Link>
      </li>
        
    </ul>
    </div>
   </div>
   </nav>
    </>
  )
}

export default Navbar