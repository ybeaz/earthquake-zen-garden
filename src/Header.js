import React from 'react'
import { Link } from 'react-router-dom'

import './commonStyles.css'
import './Header.css'

export const Header = props => {
  const {
    profile: { firstName },
    site: { title: siteTitle },
  } = props
  return (
    <header className='Header bgColor0'>
      <div className='Header__logo_div'>
        <Link to='/home'>
          <img
            className='Header__logo'
            src='https://www.realtor.com/realtor-com.png'
            alt='logo'
          ></img>
        </Link>
      </div>
      <div className='Header__title color1'>{siteTitle}</div>
      <Link to='/profile'>
        <div className='Header__profile_link'>{`Welcome ${firstName}`}</div>
      </Link>
    </header>
  )
}
