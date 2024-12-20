import { useState } from "react";

const WeatherSearch = (props) => {
    const { fetchData } = props
    const [city, setCity] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(city)
        setCity('')
    }

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city">Enter a City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </section>
    )
}

export default WeatherSearch