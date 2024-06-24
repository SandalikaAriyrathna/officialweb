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
          <Hero className='mainhero' style={{ backgroundImage: "url('./img/projects/big/suryabg.png')" }}>
              <div className='herocaption'>
                <BackButton className='backdetail'
                  onClick={() => this.setState({ toBack: true, hasBackground: false })}
                  toBack={this.state.toBack}
                  hasBackground={this.state.hasBackground}>
                  <BackArrow src="./img/back.png" alt="Back to Projects" />
                  <span>Back </span>
                </BackButton>
                {/* <ClientTag>INTERIOR</ClientTag> */}
                <Title>Surya Mangalya 2024</Title>

                <TechniqueTitle>
                Explore the festivities of Surya Mangalya 2024, a grand New Year event filled with joy, culture, and celebration. Join us as we welcome the dawn of a new year with traditional rituals, music, and dance performances, and an array of delightful culinary delights. Let's embrace the spirit of unity and happiness together!

                </TechniqueTitle>
              </div>
          </Hero>
          </Reveal>

        <section className='container-fluid' id='detailproject'>
          <div className='row m-2-hor'>
            <div className='col-md-8'>
            <div className='col-md-12'>
            <div className='col-md-12'>
  <p className='content'>
    Surya Mangalya 2024 was a momentous occasion where the Aviha Group of Companies came together to host a jubilant New Year celebration like no other. Jobdaddy, Caregiver School, and Barista School joined forces to create an unforgettable experience for attendees of all ages and interests.
  </p>
  <p className='content'>
    The event featured a diverse range of activities and festivities, including engaging games, interactive workshops, and live performances that showcased the rich cultural heritage of our community. From traditional dance performances to modern music showcases, there was something for everyone to enjoy. Guests had the opportunity to explore various stalls and indulge in culinary delights from around the world, with special discounts and exclusive offers adding to the excitement.
  </p>
  <p className='content'>
    Surya Mangalya 2024 was a celebration of unity, camaraderie, and boundless enthusiasm as we welcomed the New Year together. It was a memorable event that embodied the values of togetherness, diversity, and progress. Attendees came together to create cherished memories and usher in a year filled with hope, joy, and prosperity for all.
  </p>
</div>

</div>

            </div>
            <div className='col-md-4 sticky'>
              <ul className='detailproject'>
                <li>
                  <span className='tile'>Categories:</span>
                  <span>Community Event</span>
                </li>
                <li>
                  <span className='tile'>Held By:</span>
                  <span>Aviha Group</span>
                </li>
                <li>
                  <span className='tile'>Completed:</span>
                  <span>April 13, 2024</span>
                </li>
                <li>
                  <span className='tile'>Event type:</span>
                  <span>Cultural Celebration</span>
                </li>
              </ul>
            </div>
            <div className='col-md-12'>
             <div className='tags'>
              <span className='heading'>
               Tags :
              </span>
              <span className='content'>     
              NewYearCelebration
              </span>
              <span className='content'>     
              InteractiveWorkshops
              </span>
              
             </div>
            </div>
            <div className='col-md-12'>
             <div className='share'>
              <span className='heading'>
               Share :
              </span>
              <span className='content'>   
              <a href="https://www.facebook.com/story.php?story_fbid=719670730377363&id=100070033276546&mibextid=qi2Omg&rdid=SVEHEJoKSpAFjkU4" target="_blank" rel="noopener noreferrer">
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
