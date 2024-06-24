import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';
import Slider from '../components/Sliderhome';
import Featurehome from '../components/Featurehome';
import Abouthome from '../components/Abouthome';
import Carouselfeature from '../components/Carouselfeature';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselprojects from '../components/Carouselprojects';
import Carouselteam from '../components/Carouselteam';
import Accomplish from '../components/Accomplish';
import Carouselnews from '../components/Carouselnews';
import Footer from '../components/Footer';
import { Efect, Efect1, Efect2  } from "../styles/effect.styles";

const Home = ({ history }) => {


  return (
    <div>

      <Efect/>
      <Efect1/>
      <Efect2/>

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
            <Slider />
        </section>
      </Reveal>
      
      {/* <Featurehome/> */}
      
      <Reveal effect="fadeInUp">
        {/* <Abouthome/> */}
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            
            <div className='col-md-6 pt-5'>
              <div className='col-home'>
                <div className='thumb'>
                  <img
                      src="./img/bgb.jpg"
                      className="img-fluid"
                      alt="#"
                    />
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='dflex-center'>
                <div className='col-home mt-md-0 mt-5'>
                  <div className='heading'>We Are Aviha Group</div>
                  <div className='content'>
                  Aviha Group is one of Sri Lanka's leading holding companies, encompassing three world-class brands: Colombo Bartender & Barista School, Colombo Caregiver School, and JobDaddy.
<br/>
<br/>
We aim to deliver the highest ROI by connecting opportunities and people across the world through education and recruitment with a highly experienced and passionate team of professionals across multiple industries under one brand.
                  </div>
                  <ul className='list-home'>
                  <li>Professional Training Programs</li>
              <li>International Recruitment Services</li>
              <li>Industry-Leading Certifications</li>
              <li>Comprehensive Career Guidance</li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Companies</div>
            </div>
            <div className='col-12'>
              <Carouselfeature/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
        <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Clients</div>
              <br/>
            <br/>
            </div>
            
            <div className='col-12'>
              <Carouselclient/>
            </div>
          </div>
         
        </section>
      </Reveal>
      
      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclientb/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Events</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Team</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className='container-fluid pt-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Latest News</div>
            </div>
            <div className='col-12'>
              <Carouselnews/>
            </div>
          </div>
        </section>
      </Reveal> */}

      <Footer />

    </div>
  );
};

export default withRouter(Home);
