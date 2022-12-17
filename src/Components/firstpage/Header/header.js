import React from 'react'
import './header.css'
import Logo from '../../../Assets/images/logo.svg'
import Search from '../../../Assets/images/search.svg'
import Downarrow from '../../../Assets/images/downarrow.svg'

export default function header() {
  return (
    <div className='header-container'>

      <div className='logo'>
        <img src={Logo} width='90px' />
      </div>

      <div className='nav-container'>

        <div className='left-section'>
        <div className='nav-links active'>Home</div>
        <div className='nav-links'>Our Industries  <img src={Downarrow} width='15px' className='down-arrow' /></div>
        <div className='nav-links'>Our Companies  <img src={Downarrow} width='15px' className='down-arrow'/></div>
        </div>
        <div className='right-section'>
        <div className='nav-links'>Career</div>
        <div className='nav-links'>Contact</div>
        <div className='search-bar'><img src={Search} width='20px' /></div>
        </div>
      </div>


    </div>
  )
}
