import React, { useState } from 'react'
import axios from 'axios'

function App() {
  // const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=dallas&appid=4c42be5a817769952f07dc6e780087c7'

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60F</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65F</p>
            <p>Feels like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
