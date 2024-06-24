import React, { Component, createRef, Fragment } from "react";
import {
  Hero,
  Title,
  TechniqueTitle,
  ClientTag,
  CaseWrapper,
  BackButton,
  BackArrow
} from "../styles/Case.styles";

import Reveal from 'react-reveal/Reveal';
import { withRouter } from "react-router";
import Accomplish from '../components/Accomplish';
import Footer from '../components/Footer';
import { Efectr, Efectr1, Efectr2  } from "../styles/effect.styles";

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

class Case extends Component {
  constructor(props) {
    super(props);
    this.introRef = createRef();

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: ""
    };
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.setNavBackground(false);
        this.props.history.push("/work");
      }, 400);
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.setNavBackground(false);

        this.props.history.push(this.state.animateCase);
        window.scrollTo(0, 0);
      }, 400);
    }
  }


  render() {

    return (
      <Fragment>
      <Efectr/>
      <Efectr1/>
      <Efectr2/>
      <ScrollTop>
        <CaseWrapper>
        <Reveal effect="fadeIn">
        <Hero className='mainhero' style={{ backgroundImage: "url('./img/projects/big/futurebg.png')" }}>
          <div className='herocaption'>
            <BackButton className='backdetail'
              onClick={() => this.setState({ toBack: true, hasBackground: false })}
              toBack={this.state.toBack}
              hasBackground={this.state.hasBackground}>
              <BackArrow src="./img/back.png" alt="Back to Projects" />
              <span>Back</span>
            </BackButton>
            <Title>Future Minds Expo 2024</Title>
            <TechniqueTitle>
              Welcome to the Future Minds Expo 2024, where we unlock opportunities and shape futures. Our mission is to empower careers and inspire success stories by connecting talent globally. Join us as we bridge dreams and build brighter futures together.
            </TechniqueTitle>
          </div>
        </Hero>
      </Reveal>

        <section className='container-fluid' id='detailproject'>
          <div className='row m-2-hor'>
            <div className='col-md-8'>
            <p className='content'>
            We are thrilled to announce that Aviha Group, along with its esteemed subsidiaries including Jobdaddy, Caregiver School, and Barista School, made a remarkable debut at the Future Minds Expo 2024. The event witnessed a significant turnout, with eager job seekers flocking to our booth, demonstrating a strong interest in the diverse opportunities offered by our group of companies.            </p>

              <p className='content'>
              At Jobdaddy, we were delighted to engage with aspiring professionals and provide valuable insights into the job market. Our team was overwhelmed by the enthusiastic response from individuals seeking employment opportunities.
              </p>
              <p className='content'>
              Meanwhile, attendees visiting the Barista School and Caregiver School booths were greeted with exciting offers. Many special discounts were available for everyone who registered during the event, making it an opportune moment to embark on a journey towards a rewarding career in these fields.              </p>
              <p className='content'>
              We extend our heartfelt gratitude to all who visited us at the Future Minds Expo 2024. Your interest and enthusiasm inspire us to continue providing exceptional opportunities for personal and professional growth.                </p>
             
            </div>
            <div className='col-md-4 sticky'>
              <ul className='detailproject'>
                <li>
                  <span className='tile'>Categories:</span>
                  <span>Business & Career</span>
                </li>
                <li>
                  <span className='tile'>Held By:</span>
                  <span>Aviha Group</span>
                </li>
                <li>
                  <span className='tile'>Started:</span>
                  <span>
                    From: June 14, 2024</span>
                </li>
                <li>
                  <span className='tile'>Completed:</span>
                  <span>
                    To: June 16, 2024</span>
                </li>
                <li>
                  <span className='tile'>Event type:</span>
                  <span>Exhibition</span>
                </li>
              </ul>
            </div>
            <div className='col-md-12'>
             <div className='tags'>
              <span className='heading'>
               Tags :
              </span>
              <span className='content'>     
              Career
              </span>
              <span className='content'>     
              Education
              </span>
              <span className='content'>     
              Excellence
              </span>
              <span className='content'>     
              Empowerment
              </span>
             </div>
            </div>
            <div className='col-md-12'>
             <div className='share'>
              <span className='heading'>
               Share :
              </span>
              <span className='content'>   
              <a href="https://www.facebook.com/p/Aviha-Group-100070033276546/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook-f"></i>
                </a>
              </span>
              <span className='content'>   
              <a href="https://www.linkedin.com/company/aviha-group" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
                </a>
              </span>
              <span className='content'> 
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter"></i>
                </a>
              </span>
              <span className='content'>   
              <a href="#" target="_blank" rel="noopener noreferrer">  
                <i className="fa  fa-instagram"></i>
                </a>
              </span>
             </div>
            </div>
          </div>
        </section>         
        </CaseWrapper>

      </ScrollTop>

      {/* <Reveal effect="fadeInUp">
        <Accomplish className='pt-0'/>
      </Reveal> */}

      <Footer />

      </Fragment>
    );
  }
}

export default withRouter(Case);
