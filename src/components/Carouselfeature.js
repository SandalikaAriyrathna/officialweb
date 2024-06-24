import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='slick slickproject'>
        <Slider {...settings}>


            <CustomSlide className='itm' index={1}>
              <div className='bg'>
                <img
                  src="./img/feature/barista.png"
                  className="img-fluid"
                  alt="Imageteam"
                />

              </div>
              <div className='desc'>
                <div className='name'>Colombo Bartender & Barista School</div>
                <div className='content'>
                  Welcome to Sri Lanka's leading Bartender & Barista School.We pride ourselves on 6+ years of training & mentoring Baristas & Bartenders, and beyond.
                  <br /><br /><br />
                </div>
              </div> 
              <div className='icon'>
               <span onClick={()=> window.open("https://barbaristaschool.com/", "_blank")}>
                View Site
              </span>
            </div>
            </CustomSlide>

         
          <CustomSlide className='itm' index={2}>
            <div className='bg'>
              <img
                src="./img/feature/care.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='name'>Colombo Caregiver School </div>
              <div className='content'>
                Sri Lanka’s premier institution for dedicated caregiver training.
                Only accredited ACA Franchise in Sri Lanka. Sri Lanka's exclusive provider of the National Caregiver Certificate Course (NCCC) USA.
                <br /><br /><br /><br /><br />
              </div>
            </div>
            <br /> 
            <div className='icon mb-4'>
               <span onClick={()=> window.open("https://www.ccsedu.lk/", "_blank")}>
                View Site
              </span>
            </div>
          </CustomSlide>
         
          <CustomSlide className='itm' index={3}>
            <div className='bg'>

              <img
                src="./img/feature/job.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='name'>
                JobDaddy.LK
              </div>
              <div className='content'>
              Empowering job seekers to find their dream careers, one opportunity at a time.
               
               <br/> <br/> <br/><br/><br/><br />
               
              </div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("https://jobdaddy.lk/", "_blank")}>
                View Site
              </span>
            </div>
          </CustomSlide>

          {/* <CustomSlide className='itm' index={4}>
            <div className='bg'>
              <img
                src="./img/feature/img4.jpg"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              <div className='name'>Furniture</div>
              <div className='content'>
                Make the most of compact spaces with space saving furniture 
                that are ingenuous and innovative. 
                Transform your living spaces with interior designs that make 
                optimal use of available space.
              </div>
            </div>
          </CustomSlide> */}

        </Slider>
      </div>
    );
  }
}
