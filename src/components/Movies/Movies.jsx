import React, { useState, useEffect } from 'react'
import './Movies.scss'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'
import Hp from '../../assets/images/hp.jpg'
import Hobbit from '../../assets/images/hobbit.jpg'
import Cruella from '../../assets/images/cruella.jpg'
import Crepusculo from '../../assets/images/crepusculo.jpg'


import { Carousel } from 'antd';

const Movies = ({theme}) => {

   function onChange(a, b, c) {
      console.log(a, b, c);
   }

   const [content, setContent] = useState([])

   const MoviesApi = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/discover/movie?api_key=41d9ddfe3b759a336a299fb77a9c8312`
      )

      setContent(data.results)
      console.log(data);
   }

   useEffect(() => {
      MoviesApi()
   }, [])

   return (
      <div className={theme ? "movies-container lightmode" : "movies-container darkmode"}>
         <div className="banner">
            <Carousel autoplay afterChange={onChange} className="carousel">
               <div>
                  <img src={Hobbit} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={Hp} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={Cruella} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={Crepusculo} alt="Movie" className="carousel-image" />
               </div>
            </Carousel>
         </div>
         <h1>Filmes</h1>
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

export default Movies
