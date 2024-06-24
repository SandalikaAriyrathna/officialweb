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
          <Hero className='mainhero' style={{ backgroundImage: "url('./img/projects/big/meetbg.png')" }}>
              <div className='herocaption'>
                <BackButton className='backdetail'
                  onClick={() => this.setState({ toBack: true, hasBackground: false })}
                  toBack={this.state.toBack}
                  hasBackground={this.state.hasBackground}>
                  <BackArrow src="./img/back.png" alt="Back to Projects" />
                  <span>Back </span>
                </BackButton>
                {/* <ClientTag>INTERIOR</ClientTag> */}
                <Title>Aviha Group (Pvt) Ltd Quarterly Meeting and Staff Get-Together - March 2024</Title>
                <TechniqueTitle>
                An unforgettable evening of camaraderie and celebration, where Aviha's team came together to honor achievements and share laughter
                </TechniqueTitle>
              </div>
          </Hero>
          </Reveal>

        <section className='container-fluid' id='detailproject'>
          <div className='row m-2-hor'>
            <div className='col-md-8'>
              <p className='content'>Step into the vibrant world of Aviha Group of Companies, where innovation meets compassion and excellence thrives. On the memorable evening of March 2024, the Aviha family came together for a heartwarming Staff Get-Together. Amidst the backdrop of camaraderie and unity, employees from Barista, Caregiver, and Jobdaddy_lk were treated to an unforgettable experience filled with presentations, an awarding ceremony honoring outstanding achievements, that set the perfect mood for celebration.</p>
              <p className='content'>
                  
                 The highlight of the evening was the awarding ceremony, and birthday celebrations where outstanding contributions were acknowledged, reinforcing our commitment to excellence and teamwork.
                As music filled the air, spontaneous dancing and heartfelt laughter filled the room, creating unforgettable moments of joy and camaraderie. 
                The evening culminated in a delightful dinner, where delicious food was enjoyed amidst the warmth and togetherness of the Aviha family.</p>
            </div>
            <div className='col-md-4 sticky'>
              <ul className='detailproject'>
                <li>
                  <span className='tile'>Categories:</span>
                  <span>Staff Get-Together</span>
                </li>
                <li>
                  <span className='tile'>Held By:</span>
                  <span>Aviha Group</span>
                </li>
                <li>
                  <span className='tile'>Completed:</span>
                  <span>March 25, 2024</span>
                </li>
                <li>
                  <span className='tile'>Event type:</span>
                  <span>Staff Meeting</span>
                </li>
              </ul>
            </div>
            <div className='col-md-12'>
             <div className='tags'>
              <span className='heading'>
               Tags :
              </span>
              <span className='content'>     
              StaffGetTogether 
              </span>
              <span className='content'>     
              QuarterlyMeeting 
              </span>
              <span className='content'>     
              AwardingCeremony 
              </span>
            
             
             </div>
            </div>
            <div className='col-md-12'>
             <div className='share'>
              <span className='heading'>
               Share :
              </span>
              <span className='content'>   
              <a href="https://www.facebook.com/story.php?story_fbid=708388684838901&id=100070033276546&mibextid=qi2Omg&rdid=ubsqF4vdypimvYsa" target="_blank" rel="noopener noreferrer">
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
