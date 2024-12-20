const API_KEY = 'e0d8e6bfe0bd42d08c7231916241912'
const BASE_URL =  `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (city) => {
    try {
        const queryString = `&q=${city}`
        const res = await fetch(BASE_URL + queryString)
        // console.log(res)
        const data = await res.json()
        // console.log('Data', data)
        return data
    } catch (err) {
        console.log(err)
    }
}

export {
    show
}
