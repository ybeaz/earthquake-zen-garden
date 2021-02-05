import React from 'react'

import './commonStyles.css'
import './Profile.css'

export const Profile = props => {
  const getRows = profile => {
    const {
      firstName = '',
      lastName = '',
      phone = '',
      email = '',
      bio = '',
    } = profile
    let entries = []
    entries.push(
      { name: 'First name', value: firstName },
      { name: 'Last name', value: lastName },
      { name: 'Phone', value: phone },
      { name: 'Email', value: email },
      { name: 'Bio', value: bio }
    )

    return entries.map(item => {
      const { name, value } = item
      return (
        <div className='Profile__table_row'>
          <div className='Profile__table_cell_param'>{name}</div>
          <div className='Profile__table_cell_value'>{value}</div>
        </div>
      )
    })
  }

  const {
    data: { profile },
  } = props
  const { avatarImage } = profile
  return (
    <div className='Profile'>
      <div className='Profile__body'>
        <div className='Profile__body_left'></div>
        <div className='Profile__body_center'>
          <div className='Profile__page_title'>{'Profile'}</div>
          <section className='Profile__content'>
            <div className='Profile__picture'>
              <img
                className='Profile__picture_img'
                src={avatarImage}
                alt='photo'
              />
            </div>
            <div className='Profile__table'>{getRows(profile)}</div>
          </section>
        </div>
        <div className='Profile__body_right'></div>
      </div>
    </div>
  )
}
