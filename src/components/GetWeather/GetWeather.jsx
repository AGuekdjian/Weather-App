import React, { useState } from 'react'
import CardWeather from '../CardWeather/CardWeather'

export default function GetWeather() {
    // url de la api
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=d07df994f39a4b0f9f9154719232503`
    const cityUrl = "&q="
    const [weather, setWeather] = useState({})
    const [status, setStatus] = useState()

    const getWeather = async(loc) => {
        try {
            const res = await fetch(`${apiUrl}${cityUrl}${loc}`)
            const data = await res.json()
            setStatus(res.status)
            setWeather(data)
        } finally {}
    }

    return (
        <>
            <CardWeather 
                status={status}
                getWeather={getWeather}
                infWeather={weather}
            />
        </>
    )
}

