import React from 'react'
import './header.css'
import Logo from '../../../Assets/images/logo.svg'
import Search from '../../../Assets/images/search.svg'

export default function header() {
  return (
    <div className='header-container'>

      <div className='logo'>
        <img src={Logo} width='60px' />
      </div>

      <div className='nav-container'>

        <div className='left-section'>
        <div>Home</div>
        <div>Our Industries</div>
        <div>Our Companies</div>
        </div>
        <div className='right-section'>
        <div>Career</div>
        <div>Contact</div>
        <div><img src={Search} width='15px' /></div>
        </div>
      </div>


    </div>
  )
}
