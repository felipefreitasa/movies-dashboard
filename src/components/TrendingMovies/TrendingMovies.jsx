import React, { useState, useEffect } from 'react'
import './TrendingMovies.scss'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'
import Movie from '../../assets/images/movie2.jpg'
import F9 from '../../assets/images/f9.jpg'
import LaCasaDePapel from '../../assets/images/lacasadepapel.jpg'
import GameOfThrones from '../../assets/images/gameofthrones.jpg'
import { Carousel } from 'antd';

const TrendingMovies = ({ theme }) => {

   function onChange(a, b, c) {
      console.log(a, b, c);
   }

   const [content, setContent] = useState([])

   const TrendingApi = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/trending/all/day?api_key=41d9ddfe3b759a336a299fb77a9c8312`
      )

      setContent(data.results)
      console.log(data);
   }

   useEffect(() => {
      TrendingApi()
   }, [])

   return (
      <div className={theme ? "trending-movies-container lightmode" : "trending-movies-container darkmode"}>
         <div className="banner">
            <Carousel autoplay afterChange={onChange} className="carousel">
               <div>
                  <img src={Movie} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={LaCasaDePapel} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={F9} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={GameOfThrones} alt="Movie" className="carousel-image" />
               </div>
            </Carousel>
         </div>
         <h1>Em alta</h1>
         <div className="trending-movies">
            {content && content.map((c) =>
               <MovieCard
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  vote_average={c.vote_average}
               />
            )}
         </div>

      </div>
   )
}

export default TrendingMovies
