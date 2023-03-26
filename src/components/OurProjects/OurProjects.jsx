import React from "react";
import "./OurProjects.css"
import {Carousel} from "./Carousel"

function OurProjects (){
    return(
        <Carousel>
            <div className="carousel-items"> 
                <div className="Carousel-box">
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-17.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-10.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-11.jpeg" alt="Our-Projects"/>
                </div>
                <div className="Carousel-box">
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-12.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-15.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-16.jpeg" alt="Our-Projects"/>
                </div>
                <div className="Carousel-box">
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-13.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-9.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-1.jpeg" alt="Our-Projects"/>
                </div>
            </div>
            <div className="carousel-items">
            <div className="Carousel-box">
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-7.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-2.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-4.jpeg" alt="Our-Projects"/>
                </div>
                <div className="Carousel-box">
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-6.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-8.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-14.jpeg" alt="Our-Projects"/>
                </div>
                <div className="Carousel-box">
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-3.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-20.jpeg" alt="Our-Projects"/>
                    <img className="carousel-item" src="https://gazifikaciya.kz/assets/img/portfolio/gazifikaciya-portfolio-21.jpeg" alt="Our-Projects"/>
                </div>
            </div>
        </Carousel>
    )
};

export default OurProjects;