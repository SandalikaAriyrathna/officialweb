import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 5000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
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
                src="./img/projects/future.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              {/* <div className='tag'>BMICH</div> */}
              <div className='name'>Future Minds Expo 2024</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("/detailcase1", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={2}>
            <div className='bg'>
              <img
                src="./img/projects/surya.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              {/* <div className='tag'>Surya Mangalya - 2024</div> */}
              <div className='name'>Surya Mangalya 2024</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("/detailcase2", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={3}>
            <div className='bg'>
              <img
                src="./img/projects/iftar.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              {/* <div className='tag'>Staff iftar celebration</div> */}
              <div className='name'>Iftar Celebration 2024</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("/detailcase3", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

          <CustomSlide className='itm' index={4}>
            <div className='bg'>
              <img
                src="./img/projects/meet.png"
                className="img-fluid"
                alt="Imageteam"
              />
            </div>
            <div className='desc'>
              {/* <div className='tag'>Furniture</div> */}
              <div className='name'>Staff GetTogether March 2024</div>
            </div>
            <div className='icon'>
               <span onClick={()=> window.open("/detailcase4", "_self")}>
                View Project
              </span>
            </div>
          </CustomSlide>

        </Slider>
      </div>
    );
  }
}
