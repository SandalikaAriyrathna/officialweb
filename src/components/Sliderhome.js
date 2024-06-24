import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';

const content = [
  {
    title: "Aviha Group",
    description:
      "Aviha Group is one of Sri Lanka's leading holding companies, encompassing three world-class brands.",
    button: "More Detail",
    link: "/about",
    image: "./img/bgaa.jpg"
  },
  {
    title: "Connecting Talent with Opportunity",
    description:
    "We connect you with exceptional opportunities through top-tier education and recruitment services.",
    button: "More Detail",
    link: "/contact",
    image: "./img/connect.jpg"
  },
  {
    title: "Your Success, Our Mission",
    description:
      "From skill development to job placement, our experts are here to guide you every step of the way.",
    button: "More Detail",
    link: "/work",
    image: "./img/success.jpg"
  }
];

const SliderComponent = () => (
  <Slider className="slider-wrapper" autoplay={2000}>
    {content.map((item, index) => (
      <div
        key={index}
        className="slider-content"
        style={{ background: `url('${item.image}') no-repeat center center` }}
      >
        <div className="inner">
          <h1>{item.title}</h1>
          {item.description && <p>{item.description}</p>}
            <button onClick={() => window.open(item.link, "_self")}>
              <span className="shine"></span>
              <span>{item.button}</span>
            </button>
          
        </div>
      </div>
    ))}
  </Slider>
);

export default SliderComponent;
