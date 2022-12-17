import React from 'react';
import './body.css';
import Alpha from '../Alpha';
import Beta from '../Beta';

import Tech1 from '../../Assets/images/techimage1.svg';
import Tech2 from '../../Assets/images/techimage2.svg';
import Goods1 from '../../Assets/images/goodsimage1.svg';
import Goods2 from '../../Assets/images/goodsimage2.svg';
import Agri1 from '../../Assets/images/agrimage1.svg';
import Agri2 from '../../Assets/images/agrimage2.svg';

import Room1 from '../../Assets/images/room1.svg';
import Room2 from '../../Assets/images/room2.svg';
import Cart1 from '../../Assets/images/cart1.svg';
import Cart2 from '../../Assets/images/cart2.svg';
import App1 from '../../Assets/images/app1.svg';
import App2 from '../../Assets/images/app2.svg';

export default function body() {
  return (
    <div className='section-container'>
        <div className='main'>
          <div className='main-img-container'><img src='' className='main-img'/></div>
          <div className='main-body'>
            <div className='main-heading'>The Ramaera Expansion</div>
            <div className='main-para'>We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain including IT.</div>
          </div>
        </div>


      <div>
        <Alpha heading={`Unleashing the strength of`} heading2={`Technology`} para={`We believe in innovation and excellence hence , our approach in the field of technology is focused to relish incredible customer experience and stabilising business models for tomorrow.`} imageLeft={Tech1} imageRight={Tech2} effect={'tech'}/>
      </div>
      <div className='content-space'></div>
      <div>
        <Beta heading={`Making accommodations easier`} para={`Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices.`} imageLeft={Room2} imageRight={Room1}/>
      </div>
      <div className='content-space'></div>
      <div>
        <Alpha heading={`Packaging industry for`} heading2={` business growth`} para={`We provide packaging solutions to help your business flourish with boosted outreach. Ensuring the protection, containment, and communication of packaged projects is our foremost priority.`} imageLeft={Goods1} imageRight={Goods2} effect={'goods'}/>
      </div>
      <div className='content-space'></div>
      <div>
        <Beta heading={`Offering the best with FMCG industry`} para={`Ramaera FMCG industry has commenced an extensive range of FMCG to make your days more than ordinary. We plan to offer you nothing less than the best.`} imageLeft={Cart2} imageRight={Cart1}/>
      </div>
      <div className='content-space'></div>
      <div>
        <Alpha heading={`Agri-business to bestow`} heading2={`Nature's Love`} para={`Our Agri-business industry is established to get you fresh and organic fruits and vegetables with the blessed with the touch of nature`} imageLeft={Agri1} imageRight={Agri2} effect={'agri'}/>
      </div>
      <div className='content-space'></div>
      <div>
        <Beta heading={`Get all your essentials in one place`} para={`Ramaera Supermart is an online customer oriented marketplace to motivated to provide everything you need right at one place under the comfort of your homes.`} imageLeft={App2} imageRight={App1}/>
      </div>

    </div>
  )
}
