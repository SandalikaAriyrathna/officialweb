import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.png' alt='bg-footer'/>
  </div>
    <div className='row m-2-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2>About Us</h2>
          </div>
          <div className='content'>
             <p>We aim to deliver the highest ROI by connecting opportunities and people across the world through education and recruitment with a highly experienced and passionate team of professionals across multiple industries under one brand.
             </p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:support@Homekins.com", "_self")}>support@Aviha.com</div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Usefull link
          </div>
          <div className='content'>
             <div className='link'>Frequently Asked</div>
             <div className='link'>Terms & Conditions</div>
             <div className='link'>Help Center</div>
             <div className='link'>Contact Us</div>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Features
          </div>
          <div className='content'>
            <div className='link'>Career</div>
            <div className='link'>Brand Identity</div>
            <div className='link'>Investment</div>
            <div className='link'>Agency Patner</div>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>

        <div className='content'>
    <p>Explore thousands of inspiring Aviha Group, 
    from our best team here.
    </p>
    <div className='socialicon'>
        <span className="shine"></span>
        <a href="https://www.facebook.com/p/Aviha-Group-100070033276546/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook-f"></i>
        </a>
    </div>
    <div className='socialicon'>
        <span className="shine"></span>
        <a href="https://www.linkedin.com/company/aviha-group" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
        </a>
    </div>
    <div className='socialicon'>
        <span className="shine"></span>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
        </a>
    </div>
    <div className='socialicon'>
        <span className="shine"></span>
        <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
        </a>
    </div>
</div>


        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-2-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2024 Aviha Group All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
