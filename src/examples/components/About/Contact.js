import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import '../Contact.css'

const Contact=()=>{
    const [name,setName] =useState()
    const [email,setEmail] =useState()
    const [msg,setMsg] =useState()

    const msgHandler=(e)=>{
        setMsg(e.target.value)
    }
    const nameHandler=(e)=>{
        setName(e.target.value)
    }
    const emailHandler=(e)=>{
        setEmail(e.target.value)
    }
    
    // const requestOptions = {
    //     mode: 'cors',

    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' },
    //     body: JSON.stringify( {
    //         "name":"SurajJJJ Pal",
    //         "email":"test@1234",
    //         "message": "hello how are you"
    //    })
    // };
    const feedbackHandler= async (e)=>{
        // https://purple-electrician-mdcmk.ineuron.app:8081/api/feedback
        e.preventDefault();
        try {
          let res = await axios.post("https://purple-electrician-mdcmk.ineuron.app:8081/api/feedback", {
          
              name: name,
              email: email,
              message: msg,
           
          });
        //   let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setEmail("");
            setMsg("");
            alert("feedBack Submitted")
          } else {
            setMessage("Some error occured");
          }
        } catch (err) {
          console.log(err);
        }
            
        }
   
    
    
    return(
    <section className="section-bg" data-scroll-index="7" id="contact">
    <div className="overlay1 pt-100 pb-100 ">
      <div className="container">
         <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                  <div className="contact-info">

                      <h2 className="contact-title">Have Any Questions?</h2>
                      <p>If you have any queries about our work, don't hesitate to leave us a message in your email or call us directly at the number <br/> or email provided.</p>
                      <ul className="contact-info">
                          <li>
                            <div className="info-left">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <div className="info-right">
                                <h4>+1122334XXXX</h4>
                            </div>
                          </li>
                          <li>
                            <div className="info-left">
                                <i className="fa fa-at"></i>
                            </div>
                            <div className="info-right">
                                <h4>info@example123.com</h4>
                            </div>
                          </li>
                          <li>
                            <div className="info-left">
                                <i className="fa-solid fa-map-pin"></i>
                            </div>
                            <div className="info-right">
                                <h4>1243 Mumbai, Maharashtra, INDIA</h4>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                      <div className="contact-form">
                                  {/* <!--Contact Form--> */}
                                  <form onSubmit={feedbackHandler} id='contact-form' method='POST' action="/About"><input type='hidden' name='form-name' value='contactForm' />
                                      <div className="row">
                                         <div className="col-md-12">
                                            <div className="form-group">
                                               <input type="text" name="name" value={name} onChange={nameHandler} className="form-control" id="first-name" placeholder="Enter Your Name *" required="required"/>
                                            </div>
                                         </div>
                                         <div className="col-md-12">
                                            <div className="form-group">
                                               <input type="email" name="email" value={email}  onChange={emailHandler} className="form-control" id="email" placeholder="Enter Your Email *" required="required"/>
                                            </div>
                                         </div>

                                         <div className="col-md-12">
                                            <div className="form-group">
                                                 <textarea rows="4"  name="message" onChange={msgHandler} value={msg} className="form-control" id="description" placeholder="Enter Your Message *" required="required"></textarea>
                                            </div>
                                         </div>
                                          <div className="col-md-12">
                                              {/* <!--contact button--> */}
                                              <button  className="btn-big btn btn-bg">
                                                  Send Us <i className="fa fa-arrow-right"></i>
                                              </button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
              </div>
         </div>
     </div>
        </div>
</section>
    )
}
export default Contact