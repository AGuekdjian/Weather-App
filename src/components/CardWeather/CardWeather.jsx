import React, { useRef } from 'react'
import './CardWeather.css'
import CardDefault from '../CardDefault/CardDefault'

const CardWeather = ({ getWeather, infWeather, status }) => {
    const ciudad = useRef(null)

    const send = (e) => {
        e.preventDefault()
        let city = ciudad.current.value
        if (city === "" || !city) return;

        getWeather(city)
    }

    return (
        <section className='card-container'>
            <form onSubmit={send}>
                <div className='search'>
                    <input ref={ciudad} type='text' placeholder='Ciudad' />
                    <button className='btn' type='submit'></button>
                </div>
            </form>
            {Object.keys(infWeather).length > 0 ?
                (status == 400 && <><h1 className='msj-error'>{infWeather.error.message}</h1></>) ||
                <>
                    <div className='camejo' >
                        <img src={infWeather.current.condition.icon} alt={`Icon of ${infWeather.current.condition.text}`} />
                        <h1>{`${infWeather.current.temp_c}°c`}</h1>
                        <h2>{`${infWeather.location.name}, ${infWeather.location.country}`}</h2>
                        <h6>{`${infWeather.current.last_updated}`}</h6>
                    </div>
                    <div className='info-container'>
                        <div>
                            <img src='https://proyecto-red-social.s3.sa-east-1.amazonaws.com/Img/humidity.png' alt='Icon of Humidity' />
                            <p>{`${infWeather.current.humidity}%`}<br />Humidity</p>
                        </div>
                        <div>
                            <img src='https://proyecto-red-social.s3.sa-east-1.amazonaws.com/Img/wind.png' alt='Icon of Wind' />
                            <p>{`${infWeather.current.wind_kph} km/h`}<br />Wind Speed</p>
                        </div>
                    </div>
                </>
                : <CardDefault />
            }

        </section>
    )
}

export default CardWeather
