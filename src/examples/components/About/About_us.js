import React from "react";
import '../About_us.css'
const About_us=()=>{
    return(
        <section className="about" id="about">
  <div className="container">
      <div className="heading text-center">
          <h2>ABOUT <span>US</span></h2>
          <p>Welcome to our website, which is devoted to offering data and tools to assist individuals as well as organisations
              <br/>
              in comprehending and reducing their carbon footprint.
          </p>
      </div>
      <div className="row">
          <div className="col-lg-6">
              <img src="https://i.ibb.co/qpz1hvM/About-us.jpg" alt="about" className="img-fluid" width="100%"></img>
          </div>
          <div className="col-lg-6">
              <h3>Purpose of our website </h3>
              <p>Carbon dioxide emissions are a leading cause of climate change, and it is critical that we take action to reduce them. Through our website, we aim to raise awareness 
                about the impacts of CO2 emissions and provide resources to help individuals and businesses make positive changes.</p>
              <div className="row">
                  <div className="col-md-6">
                      <h4>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Transparency and Accountability</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>
                          Advocating for Change</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Reduce Carbon Footprint</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>
                          Fostering Community</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>Providing Resources</h4>
                  </div>
                  <div className="col-md-6">
                      <h4>
                      <i class="fa-sharp fa-solid fa-circle-check"></i>
                          Monitoring Progress</h4>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
    )
}

export default About_us