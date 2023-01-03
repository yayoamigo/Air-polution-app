import React from 'react'

const Countries = ({name,aqi}) => {
  return (
    <div className='countries' key={name}>
      <h3>{name}</h3>
      <p>Air quality :{aqi}</p>
    </div>
  )
}

export default Countries;