import './App.css';
import FirstPage from './Components/FirstPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SecondPage from './Components/SecondPage';
import { useState} from 'react';
function App() {
  const [city,setCity]=useState("");
  return (
    <>
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage Changedata={(city) => setCity(city)}/>}/>
          <Route path="/next" element={<SecondPage city={city}/>} />
        </Routes>
      </Router>
    </div>
    </>
    );
}

export default App;
