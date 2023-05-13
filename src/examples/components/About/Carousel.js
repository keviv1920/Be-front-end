import React from "react";
import '../Carousel.css'

const Carousel=()=>{
    return(
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-center mt-5">
                            <h1 className="display-1 fw-bold text-white fade-in">Mission</h1>
                            <p className="lead text-white fade-in"> To educate individuals and businesses about the impact of CO2 emissions on our environment and the steps we can take to reduce our carbon footprint.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-center mt-5 ">
                            <h1 className="display-1 fw-bold text-white fade-in">Vision</h1>
                            <p className="lead text-white fade-in">To be a leader in the fight against climate change, working towards a sustainable future for generations to come.</p>
                        </div>
                        </div>

                    </div>
                    </div>
                    <div className="carousel-item">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 text-center mt-5">
                            <h1 className="display-1 fw-bold text-white fade-in">Goal</h1>
                            <p className="lead text-white fade-in">To provide innovative solutions and technologies that promote sustainable living and reduce the amount of carbon emissions released into the atmosphere.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
    )
}

export default Carousel