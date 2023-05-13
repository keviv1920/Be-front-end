import React,{ useRef, useState} from 'react'
import "./Home.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    // const menutoggle= document.querySelector('.toggle')
    // const showcase = document.querySelector('.showcase')
    // https://purple-electrician-mdcmk.ineuron.app:8080/api/prediction/naturalgas
    // https://purple-electrician-mdcmk.ineuron.app:8080/api/prediction/coal
    // https://purple-electrician-mdcmk.ineuron.app:8080/api/prediction/petroleum
    const toggle = useRef();
    const showcase = useRef();
    const [Toggle,setToggle]= useState(false)
    const toggleHandler=()=>{
        if (!Toggle){
            console.log(toggle.current.classList)
            toggle.current.classList.add('active')
            showcase.current.classList.add('active')
            setToggle(prevValue=>!prevValue)
        }
        else{
            toggle.current.classList.remove("active")
            showcase.current.classList.remove("active")
            setToggle(prevValue=>!prevValue)
        }
        // console.log(toggle);
    }
        
  return (
    
    <div className="container">
        <section   ref={showcase} className="showcase">
            <header>
                <div className="logo">
                    CO2 Emission
                </div>
              
                <div onClick={toggleHandler}  ref={toggle} className="toggle"></div>
            </header>
            <video src="/factory gas.mp4" muted autoplay loop></video>
            <div className="overlay"></div>
            <div className="text">
                <h2>Stop!</h2>
                <h3>Our Planet deserves better.</h3>
                <p> We are dedicated to predicting and raising awareness about CO2 emissions! 
                    Our mission is to educate and inform individuals, businesses, and communities 
                    about the impact of CO2 emissions on the environment 
                    and the importance of reducing our carbon footprint. </p>
                <Link  to="/About" >About us<i className="fa fa-arrow-right"></i></Link>    
            </div>
            <ul className="socials">
                <li key={1} className="social"><a href=""><i className="fa-brands fa-facebook-square"></i></a></li>
                <li key={2} className="social"><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                <li key={3} className="social"><a href=""><i className="fa-brands fa-instagram"></i></a></li>
            </ul>
        </section>
        <div className= "menu">
        <ul>
        {/* style="" */}
                <li key={5} className='pred'>Prediction</li>
                <li key={6}><Link to="/Coal">Coal</Link></li>
                <li key={7}><Link to="/naturalgas">Natural Gas</Link></li>
                <li key={9}><Link to="/Petroleum">Petroleum</Link></li>
               
            </ul>
        </div>
    </div>
  )
}

export default Home