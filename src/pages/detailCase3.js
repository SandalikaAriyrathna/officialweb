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
          <Hero className='mainhero' style={{ backgroundImage: "url('./img/projects/big/iftarbg.png')" }}>
              <div className='herocaption'>
                <BackButton className='backdetail'
                  onClick={() => this.setState({ toBack: true, hasBackground: false })}
                  toBack={this.state.toBack}
                  hasBackground={this.state.hasBackground}>
                  <BackArrow src="./img/back.png" alt="Back to Projects" />
                  <span>Back </span>
                </BackButton>
                {/* <ClientTag>INTERIOR</ClientTag> */}
                <Title>Iftar Celebration 2024</Title>
                <TechniqueTitle>
                Relive the heartwarming moments of the Iftar Celebration 2024, a delightful staff gathering.                </TechniqueTitle>
              </div>
          </Hero>
          </Reveal>

        <section className='container-fluid' id='detailproject'>
          <div className='row m-2-hor'>
          <div className='col-md-8'>
  <p className='content'>
    Step back into the heartwarming memories of the Iftar Celebration 2024, a cherished event organized by Aviha Group to honor the traditions of Ramadan. This special occasion was a testament to the power of unity and compassion as individuals from all walks of life gathered to break fast together.
  </p>
  <p className='content'>
    As the sun set and the sky turned ablaze with hues of orange and pink, attendees shared in the joy of breaking fast, savoring each moment of togetherness and gratitude. The Iftar Celebration 2024 was more than just a meal; it was a celebration of community, friendship, and the enduring spirit of Ramadan. Experience the warmth and joy of this memorable event, where colleagues from Aviha Group, along with its subsidiaries including Barista, Caregiver, and Jobdaddy_lk, came together to create lasting memories and embrace the values of compassion, generosity, and solidarity that define this sacred time of year.
  </p>
</div>

            <div className='col-md-4 sticky'>
              <ul className='detailproject'>
                <li>
                  <span className='tile'>Categories:</span>
                  <span>Religious/Cultural Event</span>
                </li>
                <li>
                  <span className='tile'>Held By:</span>
                  <span>Aviha Group</span>
                </li>
                <li>
                  <span className='tile'>Completed:</span>
                  <span>April 8, 2024</span>
                </li>
                <li>
                  <span className='tile'>Event type:</span>
                  <span>Celebration</span>
                </li>
              </ul>
            </div>
            <div className='col-md-12'>
             <div className='tags'>
              <span className='heading'>
               Tags :
              </span>
              <span className='content'>     
              staffcelebration
              </span>
              <span className='content'>     
              Iftar2024
              </span>
              <span className='content'>     
              Tradition
              </span>
              
             </div>
            </div>
            <div className='col-md-12'>
             <div className='share'>
              <span className='heading'>
               Share :
              </span>
              <span className='content'>   
              <a href="https://www.facebook.com/story.php?story_fbid=716744330670003&id=100070033276546&mibextid=qi2Omg&rdid=F1FzdWJYmN0RNqxI" target="_blank" rel="noopener noreferrer">
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
