import React from 'react'
import './SecondPage.css';
function SecondPage({city}) {
    console.log(city)
  return (
    <>
    <div className="second-page-head">
    Area he visited for marketing</div>
    <div className="cityname">
    {city} 
    </div>
      
    </>
  )
}

export default SecondPage