import React from 'react'
import { Link } from 'react-router-dom'

import './commonStyles.css'
import './Header.css'

export const Header = props => {
  const {
    profile: { firstName },
    site: { title: siteTitle },
    rootPath,
    slash,
  } = props
  return (
    <header className='Header bgColor0'>
      <div className='Header__logo_div'>
        <Link to={`${rootPath}${slash}home`}>
          <img
            className='Header__logo'
            src='https://www.realtor.com/realtor-com.png'
            alt='logo'
          ></img>
        </Link>
      </div>
      <div className='Header__title color1'>{`Demo: Earthquake Zen Garden ver. 3.12.3`}</div>
      <Link to={`${rootPath}${slash}profile`}>
        <div className='Header__profile_link'>{`Welcome ${firstName}`}</div>
      </Link>
    </header>
  )
}
