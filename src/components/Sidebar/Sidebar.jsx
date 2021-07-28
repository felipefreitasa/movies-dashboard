import React from 'react'
import { Link} from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = ({theme}) => {
   return (
      <div className={theme ? "sidebar lightmode" : "sidebar darkmode"}>
         <div className="sidebar-menu">
            <h2>MENU</h2>
               <nav>
                  <ul>
                     <li>
                        <Link to="/">
                           <span class="material-icons">
                              trending_up
                           </span>
                           Em alta
                        </Link>
                     </li>
                     <li><Link to="/filmes"><span class="material-icons">
                        local_movies
                     </span>Filmes</Link></li>
                     <li><a href="/series"><span class="material-icons">
                        movie_creation
                     </span>Séries</a></li>
                  </ul>
               </nav>
         </div>
         <div className="sidebar-social">
            <h2>SOCIAL</h2>

            <nav>
               <ul>
                  <li><a href="/"><span class="material-icons">
                     person
                  </span>Amigos</a></li>
                  <li><a href="/"><span class="material-icons">
                     groups
                  </span>Grupos</a></li>
                  <li><a href="/"><span class="material-icons">
                     subscriptions
                  </span>Galeria</a></li>
               </ul>
            </nav>
         </div>
         <div className="sidebar-general">
            <h2>GERAL</h2>
            <nav>
               <ul>
                  <li><a href="/"><span class="material-icons">
                     settings
                  </span>Config.</a></li>
                  <li><a href="/"><span class="material-icons">
                     logout
                  </span>Sair</a></li>
               </ul>
            </nav>
         </div>

      </div>
   )
}

export default Sidebar
