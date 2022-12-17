import React from "react";
import Header from "./Header";
import './firstpage.css';
import Twitter from '../../Assets/images/twitter.svg';
import Insta from '../../Assets/images/insta.svg';
import Facebook from '../../Assets/images/facebook.svg';
import Caps from '../../Assets/images/caps.svg';

export default function firstpage() {
  return (
    <div className="firstpage-container">
      <Header />

      <div className="body-container">
        <div className="social-icons">
          <div>
            <img src={Twitter} width="15px" />
          </div>
          <div>
            <img src={Insta} width="15px" />
          </div>
          <div>
            <img src={Facebook} width="15px" />
          </div>
        </div>

        <div className="body-info">
          <div className="heading">Ramaera Industries</div>
          <div className="para">
            An incredible multi-industrial approach oriented towards financial
            independence, customer focus and serving the best quality to the
            people.
          </div>
          <div className="link-button"><a href='#' className="link-button-text">Explore more</a></div>
        </div>

        <div className="img-caps">
          <div><img src={Caps} width="10px" /></div>
          <div><img src={Caps} width="10px" /></div>
          <div><img src={Caps} width="10px" /></div>
        </div>
      </div>
    </div>
  );
}
