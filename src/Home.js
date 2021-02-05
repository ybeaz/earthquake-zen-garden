import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './commonStyles.css'
import './Home.css'

export const Home = props => {
  const [data, setData] = useState({
    data: { features: [], metadata: { title: '' } },
    profile: { firstName: '' },
    site: { title: '' },
  })
  const [featuresState, setFeaturesState] = useState([])
  const [sortState, setSortState] = useState({
    titleSortState: false,
    magSortState: false,
    timeSortState: false,
  })

  useEffect(() => {
    if (props && props.data && props.data.data && props.data.data.features) {
      setData(props.data)
      const featureStateTmp = props.data.data.features.map(item => {
        const {
          id,
          properties: { place, mag, time },
        } = item
        return { id, place, mag, time }
      })
      setFeaturesState(featureStateTmp)
    }
  }, [props])

  const getArrSorted = (arrIn, prop, direction) => {
    return arrIn.sort((a, b) => {
      const aFeature = a[prop]
      const bFeature = b[prop]
      let output = 0

      if (aFeature < bFeature) {
        output = direction ? 1 : -1
      } else if (aFeature > bFeature) {
        output = direction ? -1 : 1
      } else {
        output = 0
      }
      return output
    })
  }

  const handleEvent = action => {
    const { type } = action
    switch (type) {
      case 'SORT_TITLE': {
        const { titleSortState, magSortState, timeSortState } = sortState
        const featuresNext = getArrSorted(
          featuresState,
          'place',
          titleSortState
        )
        setFeaturesState([...featuresNext])
        const sortStateNext = Object.assign(sortState, {
          titleSortState: !titleSortState,
          magSortState,
          timeSortState,
        })
        setSortState(sortStateNext)
        break
      }
      case 'SORT_MAGN': {
        const { titleSortState, magSortState, timeSortState } = sortState
        const featuresNext = getArrSorted(featuresState, 'place', magSortState)
        setFeaturesState([...featuresNext])
        const sortStateNext = Object.assign(sortState, {
          titleSortState,
          magSortState: !magSortState,
          timeSortState,
        })
        setSortState(sortStateNext)
        break
      }
      case 'SORT_TIME': {
        const { titleSortState, magSortState, timeSortState } = sortState
        const featuresNext = getArrSorted(featuresState, 'place', timeSortState)
        setFeaturesState([...featuresNext])
        const sortStateNext = Object.assign(sortState, {
          titleSortState,
          magSortState,
          timeSortState: !timeSortState,
        })
        setSortState(sortStateNext)
        break
      }
      default:
        console.info('Home > unexpected handleEvent type')
    }
  }

  const getRows = features => {
    return features.map(item => {
      const { id, place, mag, time } = item
      const dateTime = new Date(+time).toLocaleString()

      // console.info('Home [21]', { features, mag, dateTime })
      return (
        <div className='Home__table_row'>
          <div className='Home__table_cell_title'>
            <Link
              className='Home__table_cell_link'
              to={{ pathname: '/detail', linkPropId: id }}
            >
              {place}
            </Link>
          </div>
          <div className='Home__table_cell_magnitude'>{mag}</div>
          <div className='Home__table_cell_time'>{dateTime}</div>
        </div>
      )
    })
  }

  const {
    data: {
      metadata: { title: pageTitle },
    },
  } = data
  return (
    <div className='Home'>
      <div className='Home__body'>
        <div className='Home__body_left'></div>
        <div className='Home__body_center'>
          <div className='Home__page_title'>{pageTitle}</div>
          <section className='Home__table'>
            <header className='Home__table_header'>
              <div
                class='Home__table_header_cell_title'
                onClick={e => handleEvent({ type: 'SORT_TITLE' })}
              >
                Title
              </div>
              <div
                class='Home__table_header_cell_magnitude'
                onClick={e => handleEvent({ type: 'SORT_MAGN' })}
              >
                Magnitude
              </div>
              <div
                class='Home__table_header_cell_time'
                onClick={e => handleEvent({ type: 'SORT_TIME' })}
              >
                Time
              </div>
            </header>
            {getRows(featuresState)}
          </section>
        </div>
        <div className='Home__body_right'></div>
      </div>
    </div>
  )
}
