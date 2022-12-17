import React from 'react';
import './alpha.css';

export default function alpha(props) {
        const {imageLeft,imageRight,heading,heading2,para,effect} = props;
        const nameClass = () => {
          if (effect === 'tech'){
            return 'col1';
          }else if(effect === `goods`){
            return 'col2';
          }else{
            return `col3`;
          }
        }
    return (
    <div className='alpha-container'>
      <div className='alpha-left'><img src={imageLeft} className='alpha-left-img'/></div>
      <div className='alpha-right'>
        <div className='alpha-left-section'>
            <div className='heading-alpha'>
            <div>{heading}</div>
            <div className={nameClass()}>{heading2}</div>
            </div>
            <div className='para-alpha'>{para}</div>
            <div className={`button-alpha ${effect}`}><div className='button-text'>Read more</div></div>
        </div>
        <div className='alpha-right-section'><img src={imageRight} width='100px'/></div>
      </div>
    </div>
  )
}
