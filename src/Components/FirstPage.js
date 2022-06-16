import React from 'react'
import {useNavigate} from 'react-router';
import './FirstPage.css'
function FirstPage(props) {
  let navigate=useNavigate();
  return (
    <>
    <div className="first_page">
    <div className="head_area">
    Area he visited yesterday for marketing
    </div>
    <div>
        <input id="city_box" type="text" onChange={(e)=>{
            props.Changedata(e.target.value);
        }}/>
    </div>
    <div> 
        <button id="next_button" onClick={()=>{
        navigate("/next");     
    }}>Next</button>
    </div>
    </div>
    </>
   
  )
}

export default FirstPage