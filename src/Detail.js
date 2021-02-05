import React from 'react'

import './commonStyles.css'
import './Detail.css'

export const Detail = props => {
  const getRows = (features = [], id = null) => {
    const feature = features.filter(item => item.id === id)[0]
    let properties =
      features && features[0] && features[0].properties
        ? features[0].properties
        : {}

    const {
      title = '',
      mag = 0,
      time = 0,
      status = '',
      tsunami = 0,
      type = '',
    } = properties
    let entries = []
    entries.push(
      { name: 'Title', value: title },
      { name: 'Magnitude', value: mag },
      { name: 'Time', value: new Date(+time).toLocaleString() },
      { name: 'Status', value: status },
      { name: 'Tsunami', value: tsunami },
      { name: 'Type', value: type }
    )

    return entries.map(item => {
      const { name, value } = item
      return (
        <div className='Detail__table_row'>
          <div className='Detail__table_cell_param'>{name}</div>
          <div className='Detail__table_cell_value'>{value}</div>
        </div>
      )
    })
  }

  const {
    data: {
      data: { features },
    },
    routeProps: {
      location: { linkPropId: id },
    },
  } = props
  return (
    <div className='Detail'>
      <div className='Detail__body'>
        <div className='Detail__body_left'></div>
        <div className='Detail__body_center'>
          <div className='Detail__page_title'>{'pageTitle'}</div>
          <section className='Detail__table'>{getRows(features, id)}</section>
        </div>
        <div className='Detail__body_right'></div>
      </div>
    </div>
  )
}
