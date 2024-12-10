import React, { useEffect, useState } from 'react';
import './Footer.css'; // External CSS for styling

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="footer">
      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Column */}
          <div className="col-md-12 text-center">
            <center>
              <img
                style={{ maxWidth: '200px' }}
                src="https://s3.amazonaws.com/www.lucidtravel.com/assets/img/logo-white-small.png"
                alt="Lucid Travel"
              />
            </center>

            <p style={{ marginTop: '5px', fontWeight: 550 }}>Team Travel Simplified.</p>

            {/* Footer Social Links */}
            <ul className="footer_social">
              <li>
                <a target="_blank" href="https://www.instagram.com/lucidtravel/" rel="noopener noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.facebook.com/Lucid-Travel-1647217445532489/?ref=hl" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://twitter.com/Lucid_Travel" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a target="_blank" href="https://www.linkedin.com/company/lucid-travel" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>

            {/* Live Chat Link */}
            <a
              style={{ marginTop: '30px' }}
              href="http://docs.drift.com/"
              className="micro-header-w scrool drift-open-chat"
            >
              <i className="fa fa-circle" style={{ color: '#A7FB67', fontSize: '11px' }}></i> Live Chat
            </a>
            <br />

            {/* Footer Text with Dynamic Year */}
            <p style={{ marginTop: '20px' }}>
              {currentYear} © Lucid Travel &nbsp;&nbsp;
              <a href="https://www.hotelplanner.com/Privacy.htm" target="_blank" rel="noopener noreferrer">Privacy</a> |{' '}
              <a href="https://www.hotelplanner.com/Terms.htm" target="_blank" rel="noopener noreferrer">Terms</a>
            </p>
          </div>
          {/* End Column */}
        </div>
        {/* End Row */}
      </div>
      {/* End Container */}
    </div>
  );
};

export default Footer;
