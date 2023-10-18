import React, { useState } from 'react'
import axios from 'axios'

// const API_KEY = `${process.env.REACT_APP_WEATHER_API_KEY}`
// console.log('API: ', API_KEY)

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(url)
        .then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          // console.log(error.message)
          setError(error.message)
        })

      setLocation('')
      setError('')
      setData({})
      console.log(error)
    }
  }
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          // onKeyPress={searchLocation}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        {error === 'Request failed with status code 404' ? (
          <div className="error">
            {/* <p>{error}</p> */}
            <p>Location not found</p>
            <p className="small">Please check your spelling and try again.</p>
          </div>
        ) : (
          <div className="container">
            <div className="top">
              <div className="location">
                <p>{data.name}</p>
              </div>
              <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
              </div>
              <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                {data.weather ? (
                  <p className="desc">{data.weather[0].description}</p>
                ) : null}
              </div>
            </div>
            {data.name !== undefined && (
              <div className="bottom">
                <div className="feels">
                  {data.main ? (
                    <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                  ) : null}
                  <p>Feels like</p>
                </div>
                <div className=" humidity">
                  {data.main ? (
                    <p className="bold">{data.main.humidity}%</p>
                  ) : null}
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  {data.wind ? (
                    <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                  ) : null}
                  <p>Wind Speed</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
