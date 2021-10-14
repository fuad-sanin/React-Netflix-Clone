
import React, { useEffect,useState } from 'react'

import { actionMovies,imageUrl } from '../../constants/constants'
import axios from '../../axios'

import "./Banner.css"
import { LoggedHeaderContainer } from '../../containers/signinHeader'

function Banner() {
    const [movie,setMovie] = useState("")
   
    useEffect(() => {
    axios.get(actionMovies).then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[19])
    })
 
}, [])
 return (
    
        <div className="banner" style={{backgroundImage:`url(${imageUrl+movie.backdrop_path})`}}>
            <LoggedHeaderContainer/>  
            <div className="content">
                <h1 className="movie-name">{movie.name || movie.title}</h1>
                <div className="banner-button">
                    <button className="button">Play</button>
                    <button className="button">Watch List</button>
                </div>

                <div className="description">{movie.overview}</div>
            </div>
            <div className="fade"></div>
        </div>
        
    )
}
export default Banner
