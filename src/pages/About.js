import React from "react";
import { withRouter } from "react-router-dom";
import Reveal from 'react-reveal/Reveal';

import Abouthome from '../components/Abouthome';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselteam from '../components/Carouselteam';
import Accomplish from '../components/Accomplish';
import Carouselprojects from '../components/Carouselprojects';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2 } from "../styles/effect.styles";


const About = ({ history }) => {

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      {/* <div className="jumbotron head"/> */}


      {/* <Reveal effect="fadeInUp">
        <section className='jumbotron imgtop'>
          <img
            src="./img/bgabout.jpg"
            className="img-fluid"
            alt="#"
          />
        </section>
      </Reveal> */}
      <br />
      <br />
      <Reveal effect="fadeInUp">
        <section className='container-fluid pb-0'>
        <div className='row m-2-hor'>
          <div className='col-md-11'>
            <div className='dflex-center'>
              <div className='col-home mt-md-0 mt-5'>
                <div className='heading'>We Are Aviha Group</div>
                <div className='content'>
                  We are a group of companies headquartered in Colombo, Sri Lanka, involved in
                  multi-dimensions of business interests. Since opening its doors a decade ago, subsidiaries
                  of AVIHA GROUP have become trustworthy and top-of-the-mind brands of all target
                  markets. We strive to promote a balance of science and art in developing solutions to
                  indulge the aspirations of the people of all the regions where our business is operated.
                  <br />
                  <br />
                  The
                  business interests of AVIHA GROUP cover all ethical and sustainable fields of business that
                  may range from the retail vending business of simple consumer goods to the provision of
                  sophisticated technological solutions. We envision to establish AVIHA GROUP and its
                  subsidiaries as an integral thread in the fabric of the region.
                </div>

              </div>
            </div>
            </div>
          </div>
        </section>
      </Reveal>


      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>


      <Reveal effect="fadeInUp">
        <section className='container-fluid pb-0'>
          <div className='row m-2-hor'>

            <div className='col-md-6'>
              <img
                src="./img/vision.jpg"
                className="img-fluid"
                alt="#"
              />
            </div>
            <div className='col-md-6'>
              <br />
              <br />
              <br />
              <br />
              <h1>Vision</h1>
              <div className='content'>"To ease the lives of people by providing simple yet complete and comprehensive solutions."</div>
            </div>
          </div>
        </section>
      </Reveal>
      <br />
      <br />
      <Reveal effect="fadeInUp">
        <section className='container-fluid pb-0'>
          <div className='row m-2-hor'>
            <div className='col-md-6'>
              <br />
              <br />
              <br />
              <h1>Mission</h1>
              <div className='content'>

                <ol>
                  At AVIHA we believe in simple yet complete, comprehensive, and user-friendly solutions in
                  designing and developing customer solutions. Thus, we always promote the power of
                  research knowledge and technology which has always assisted us to deviate from
                  convention.
                </ol>
              </div>
            </div>
            <div className='col-md-6'>
              <br />
              <img
                src="./img/mission.jpg"
                className="img-fluid"
                alt="#"
              />
            </div>

          </div>
        </section>
      </Reveal>


      <br />
      <br />

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Clients</div>

            </div>


          </div>

        </section>
      </Reveal>

      <section className='container-fluid bggray mt-5 pb-0'>
        <div className='row m-2-hor'>
          <div className='col-12'>
            <Carouselclient />
          </div>
        </div>
      </section>

      <section className='container-fluid bggray'>
        <div className='row m-2-hor'>
          <div className='col-12'>
            <Carouselclientb />
          </div>
        </div>
      </section>

      <br />
      <br />

      {/* <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal> */}

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Events</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects />
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

      <Footer />

    </div>

  );
};

export default withRouter(About);
