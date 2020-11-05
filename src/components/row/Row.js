import movieTrailer from 'movie-trailer';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import axios from '../../shared/axios'
import './row.css'

const base_url = "https://image.tmdb.org/t/p/w500"
function Row({ title, fetchUrl, isLarge }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //snippet of code that runs in a specific condition
    //on the change of the variable passed [here] the function runs (if empty it runs once at the creation of the component)
    useEffect(() => {
        /*async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();*/
        axios.get(fetchUrl).then(response => setMovies(response.data.results));
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.original_name || movie?.title || "").then((url) => {
                const urlParams = new URL(url).searchParams;
                setTrailerUrl(urlParams.get("v"))
            }).catch(error => console.error(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLarge && "row_posterLarge"}`}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
