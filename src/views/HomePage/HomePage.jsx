import React from 'react'
import './HomePage.scss'
import TrendignMovies from '../../components/TrendingMovies/TrendingMovies'
import Movies from '../../components/Movies/Movies'
import Series from '../../components/Series/Series'
import { Route, Switch } from 'react-router-dom'

const HomePage = ({theme}) => {
   return (
      <div className="home-page">
         <Switch>
            <Route exact path="/">
               <TrendignMovies theme={theme}/>
            </Route>
            <Route path="/filmes">
               <Movies theme={theme}/>
            </Route>
            <Route path="/series">
               <Series theme={theme}/>
            </Route>
         </Switch>

      </div>
   )
}

export default HomePage
