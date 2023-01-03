import React from 'react'

const Countries = ({name,aqi}) => {
  return (
    <div className='countries' key={name}>
      <h2>{name}</h2>
      <p>Air quality :{aqi}</p>
    </div>
  )
}

export default Countries;