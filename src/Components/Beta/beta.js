import React from 'react';
import './beta.css';

export default function beta(props) {
    const {imageLeft,imageRight,heading,para,effect} = props;
  return (
    <div className='beta-container'>
      <div className='beta-left'>
      <div className='beta-left-section'><img src={imageLeft} width='100px'/></div>
        <div className='beta-right-section'>
            <div className='heading-beta'>{heading}</div>
            <div className='para-beta'>{para}</div>
            <div className={`button-beta ${effect}`}>Read more</div>
        </div>
      </div>
      <div className='beta-right'><img src={imageRight} className='beta-right-img' /></div>
    </div>
  )
}
