import React ,{useEffect} from 'react'
import './Navbar'
import "./About.css"
import $ from 'jquery'

// function EasyPeasyParallax() {

//     var scrollPos = $(this).scrollTop();
//     $('#banner').css({
//         'background-position' : '50% ' + (-scrollPos/4)+"px"
//     });
//     $('#bannertext').css({
//         'margin-top': (scrollPos/4)+"px",
//         'opacity': 1-(scrollPos/250)
//     });
// }
// $(document).ready(function(){
//     $(window).scroll(function() {
//         EasyPeasyParallax();
//     });
// });

export default function About() {

    function EasyPeasyParallax() {

    var scrollPos = $(window).scrollTop();
    $('#banner').css({
        'background-position' : '50% ' + (-scrollPos/4)+"px"
    });
    $('#bannertext').css({
        'margin-top': (scrollPos/4)+"px",
        'opacity': 1-(scrollPos/250)
    });
    }
    $(window).on("load", function(){
    $(window).scrollLeft(function() {
        EasyPeasyParallax();
    });
});

  return (
    <>
    
    <div id="banner">
    <nav className="navbar navbar-light navbar-expand-sm   fixed-top">
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
        </nav>
    <div id="bannertext">
        <h1>PARAL &amp; LAX</h1>
        <p>Finest webdesign since 1870</p>
    </div>
</div> 

{/* <!-- about section -->  */}

<section className="about" id="about">
  <div className="container">
      <div className="heading text-center">
          <h2>ABOUT
              <span>US</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <br/>
              incididunt ut labore et dolore magna aliqua.
          </p>
      </div>
      <div className="row">
          <div className="col-lg-6">
              <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" className="img-fluid" width="100%"></img>
          </div>
          <div className="col-lg-6">
              <h3>Lorem ipsum dolor sit amet, consectetur </h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.</p>
              <div className="row">
                  <div className="col-md-6">
                      <h4>
                          <i className="far fa-star"></i>Awesome Design</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                          <i className="far fa-star"></i>
                          Creative Design</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                          <i className="far fa-star"></i>Better Client Service</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                          <i className="far fa-star"></i>
                          Digital Marketing & Branding</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                          <i className="far fa-star"></i>Creative Design</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                          <i className="far fa-star"></i>
                          Speed And Flexibility</h4>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>

{/* <!-- our team --> */}
<section id="team" className="team-area">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>Our <span>Team</span></h2>
                    <h4>Meet our awesome and expert team members</h4>
                </div>
            </div>
        </div>
            <div className="row team-items">
                <div className="col-md-4 single-item">
                    <div className="item">
                        <div className="thumb">
                            <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                            <div className="overlay">
                                <h4>Lorem Ipsum</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className="social">
                                    <ul>
                                        <li className="facebook">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                        <li className="instagram">
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <span className="message">
                                <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                            </span>
                            <h4>Lorem Ipsum</h4>
                            <span>Project Manager</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-item">
                    <div className="item">
                        <div className="thumb">
                            <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                            <div className="overlay">
                                <h4>Lorem Ipsum</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className="social">
                                    <ul>
                                        <li className="facebook">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                        <li className="instagram">
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <span className="message">
                                <a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                            </span>
                            <h4>Lorem Ipsum</h4>
                            <span>App Developer</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-item">
                    <div className="item">
                        <div className="thumb">
                            <img className="img-fluid" src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="Thumb"/>
                            <div className="overlay">
                                <h4>Lorem Ipsum</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <div className="social">
                                    <ul>
                                        <li className="facebook">
                                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li className="linkedin">
                                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                        <li className="instagram">
                                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <span className="message">
                                <a href="abc.html#"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
                            </span>
                            <h4>Lorem Ipsum</h4>
                            <span>Web designer</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>

{/*  contact us  */}
<section className="section-bg" data-scroll-index="7" id="contact">
    <div className="overlay1 pt-100 pb-100 ">
      <div className="container">
         <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                  <div className="contact-info">

                      <h2 className="contact-title">Have Any Questions?</h2>
                      <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design. The lorem ipsum text is usually a section of a Latin text by Cicero with words altered, added and removed to make it nonsensical.</p>
                      <ul className="contact-info">
                          <li>
                            <div className="info-left">
                                <i className="fa-solid fa-mobile-screen-button"></i>
                            </div>
                            <div className="info-right">
                                <h4>+11223344550</h4>
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
                                <h4>1243 Stree New Chandigarh, INDIA</h4>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                      <div className="contact-form">
                                  {/* <!--Contact Form--> */}
                                  <form id='contact-form' method='POST'><input type='hidden' name='form-name' value='contactForm' />
                                      <div className="row">
                                         <div className="col-md-12">
                                            <div className="form-group">
                                               <input type="text" name="name" className="form-control" id="first-name" placeholder="Enter Your Name *" required="required"/>
                                            </div>
                                         </div>
                                         <div className="col-md-12">
                                            <div className="form-group">
                                               <input type="email" name="email" className="form-control" id="email" placeholder="Enter Your Email *" required="required"/>
                                            </div>
                                         </div>

                                         <div className="col-md-12">
                                            <div className="form-group">
                                                 <textarea rows="4" name="message" className="form-control" id="description" placeholder="Enter Your Message *" required="required"></textarea>
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

   {/* google map  */}
  <div className="blank">
    <h2><i className="fa-solid fa-map-location-dot"></i>  Find us on <span>Maps!</span></h2>
    <p>(Hover over the spot)</p>
  </div>

  <main>
    
    
    
    <section className="google-map">   
        <div className="map-frame">
            <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7458389923017!2d72.87241691469963!3d19.206300287013324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1681285921275!5m2!1sen!2sin"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"  aria-hidden="false" tabindex="0"></iframe>
        </div>

    </section>
    
    
</main>
    </>
  )
}
