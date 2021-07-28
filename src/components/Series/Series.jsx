import React, { useState, useEffect } from 'react'
import './Series.scss'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'
import Vikings from '../../assets/images/vikings.jpg'
import ModernFamily from '../../assets/images/modernfamily.jpg'
import TheWalkingDead from '../../assets/images/thewalkingdead.jpg'
import VisAVis from '../../assets/images/visavis.png'


import { Carousel } from 'antd';

const Series = ({ theme }) => {

   function onChange(a, b, c) {
      console.log(a, b, c);
   }

   const [content, setContent] = useState([])

   const SeriesApi = async () => {
      const { data } = await axios.get(
         `https://api.themoviedb.org/3/discover/tv?api_key=41d9ddfe3b759a336a299fb77a9c8312`
      )

      setContent(data.results)
      console.log(data);
   }

   useEffect(() => {
      SeriesApi()
   }, [])

   return (
      <div className={theme ? "series-container lightmode" : "series-container darkmode"}>
         <div className="banner">
            <Carousel autoplay afterChange={onChange} className="carousel">
               <div>
                  <img src={VisAVis} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={Vikings} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={TheWalkingDead} alt="Movie" className="carousel-image" />
               </div>
               <div>
                  <img src={ModernFamily} alt="Movie" className="carousel-image" />
               </div>


            </Carousel>
         </div>
         <h1>Séries</h1>
         <div className="series">
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

export default Series
