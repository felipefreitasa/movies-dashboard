import React from 'react'
import './MovieCard.scss'

const MovieCard = ({ id, poster, title, vote_average, theme}) => {
   const img_300 = "https://image.tmdb.org/t/p/w300"

   return (
      <div data-aos="fade-right" className={ theme ? "movie-card lightmode-txt" : "movie-card darkmode-txt"}>
         <img src={`${img_300}/${poster}`} alt="Movie poster" />
         <b>{title}</b>
         <div className="vote-average">
            {vote_average}
         </div>
      </div>
   )
}

export default MovieCard
