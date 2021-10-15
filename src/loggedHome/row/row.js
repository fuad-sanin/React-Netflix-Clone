import React, { useEffect, useState } from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import YouTube from "react-youtube";
import "./row.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "../../axios";
function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState("")
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data);
            setMovies (response.data.results)
        })
    }, )
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            }
        })


    }

  return (
    <div className="row">
      <h2 className="poster-title">{props.title}</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="poster">
          {movies.map((obj) => (
            <SwiperSlide>
              <img
                onClick={() => handleMovie(obj.id)}
                className={props.isSmall ? "small-poster" : "normal-poster"}
                src={`${imageUrl + obj.poster_path}`}
                alt="poster"
              />
            </SwiperSlide>
          ))}
        </div>

        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      </Swiper>
    </div>
  );
}

export default Rowpost;
