import React from "react";
import { withRouter } from "react-router-dom";
import emailjs from 'emailjs-com';
import Reveal from 'react-reveal/Reveal';

import SimpleMap from '../components/Map';
import Footer from '../components/Footer';

import { Efect, Efect1, Efect2  } from "../styles/effect.styles";
  

const Contact = ({ history }) => {

    function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs.sendForm('service_8rsgbct', 'template_jvmxcdk', e.target, 'wz3vCZNQP_9GUez8OBnoT')
      .then((result) => {
          console.log(result.text);
          success.classList.add('show');
          button.classList.add('show');
          failed.classList.remove('show');
      }, (error) => {
          console.log(error.text);
          failed.classList.add('show');
      });
  }  

  return (
    <div>
      <Efect/>
      <Efect1/>
      <Efect2/>

      {/* <div className="jumbotron head"/> */}

      <Reveal effect="fadeInUp">
       <section className='container'>
          <div className='row'>
            <div className='col-12'>
              <br/>
              <h1>Connect with us to unlock global opportunities and <br/>achieve your <span className='color'>career</span> aspirations</h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
       <section className='container pt-0'>
          <div className='row'>
            <div className='col-12'>
              <SimpleMap/>
            </div>
            <div className='col-md-6'>
            <div className="text-side">
              <h3 className="heading">Talk with our expert team </h3>
              <p>Our dedicated team is committed to providing the support and insights you need to succeed in your chosen field.</p>
              <div className='address'>
                <div className='heading'>Our Office</div>
                <div className='list'>
                  <i className="fa fa-map-marker"></i>
                  No.67, Walukarama Road, Colombo 03, Sri Lanka.
                </div>
                <div className='list'>
                  <i className="fa fa-envelope-o"></i>
                  <a href='mailto:contact_info@homekins.com' target='_blank' rel='noopener noreferrer'>
                    contact_info@aviha.com
                  </a>
                </div>
                <div className='list'>
                  <i className="fa fa-phone"></i>
                  (+94) 77 237 3019
                </div>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
            <div className="form-side">
              <form className="formcontact" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" required />
                <label>Email</label>
                <input type="email" name="user_email" required />
                <label>Message</label>
                <textarea name="message" required />
                <div id='success' className='hide'>Your message has been sent...</div>
                <div id='failed' className='hide'>Message failed...</div>
                <button type="submit" id='buttonsent'>
                  <span className="shine"></span>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>


          </div>
       </section>
      </Reveal>

      

      <Footer />

    </div>
    
  );
};

export default withRouter(Contact);
