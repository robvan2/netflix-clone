import React, { useEffect, useState } from 'react'
import axios from '../../shared/axios'
import requests from '../../shared/requests'
import './banner.css'

const base_url = "https://image.tmdb.org/t/p/original"

function truncate(str, size) {
    return str?.length > size ? str.substr(0, size - 1) + "..." : str
}
function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`${requests.fetchNetflixOriginals}`).then(response => {
            const movies = response.data.results;
            setMovie(
                movies[Math.floor(Math.random() * movies.length - 1)]
            )
        })
    }, [])

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {
                        movie?.name || movie?.title || movie?.original_name
                    }
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 255)}
                </h1>
            </div>
            <div className="banner--fadeButtom">

            </div>
        </header>
    )
}

export default Banner
