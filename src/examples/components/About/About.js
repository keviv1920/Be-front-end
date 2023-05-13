import React ,{useEffect} from 'react'
import Google_map from'./Google_map'
import Carousel from './Carousel'
import Navbar from '../Navbar'
import About_us from './About_us'
import Our_team from './Our_team'
import Contact from './Contact'
import '../Navbar'
import "../About.css"
import $ from 'jquery'

export default function About() {


  return (
    <>
    <div>
      <Navbar/>
    </div>
    
    {/* <nav className="navbar navbar-light navbar-expand-sm   fixed-top">
        <div className="container">
        <a href="/" className="navbar-brand " id="logo">
        <i className="fa fa-solid fa-industry"></i> &nbsp;
        Company Name
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="" className="nav-link ">
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link " id="s-about">
                    Blog
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link  " id="s-team">
                    About
                </a>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link" id="s-contact">
                    Contact
                </a>
            </li>
        </ul>
        </div>
    </div>
 </nav> */}
  <div className='mt-5'>
  <Carousel/>
  </div>
   <About_us/>

<Our_team/>
<Contact/>


{/* <Google_map/> */}
</>
  )
}
