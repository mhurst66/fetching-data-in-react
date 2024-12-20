import { useEffect, useState } from 'react'
import './App.css'
import * as weatherService from './services/weatherService'
import WeatherSearch from './components/WeatherSearch'
import WeatherDetails from './components/WeatherDetails'


const App = () => {
  const [weather, setWeather] = useState({})

  const fetchData = async (city) => {
    const data = await weatherService.show(city)
    console.log(data)
    const weatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    }
    setWeather(weatherState)
  }

  useEffect(() => {
    fetchData('Denver')
  }, [])

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails weather={weather} />
    </main>
  )
}



export default App
