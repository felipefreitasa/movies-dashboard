import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { Switch, Drawer, Button } from 'antd';

const Navbar = ({ theme, changeTheme, open, onClick }) => {

   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
      setVisible(true);
   };
   const onClose = () => {
      setVisible(false);
   };
   return (
      <div className={theme ? "navbar lightmode" : "navbar darkmode"}>
         <div>
            <Button style={{ background: "#d22f27", borderColor: "#d22f27" }} type="primary" onClick={showDrawer} className="button-drawer">
               <span class="material-icons">
                  menu
               </span>
            </Button>
            <Drawer
               placement="left"
               closable={false}
               onClose={onClose}
               visible={visible}
            >
               <div className="drawer-container">


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
                           </span>Friends</a></li>
                           <li><a href="/"><span class="material-icons">
                              groups
                           </span>Parties</a></li>
                           <li><a href="/"><span class="material-icons">
                              subscriptions
                           </span>Media</a></li>
                        </ul>
                     </nav>
                  </div>
                  <div className="sidebar-general">
                     <h2>GENERAL</h2>
                     <nav>
                        <ul>
                           <li><a href="/"><span class="material-icons">
                              settings
                           </span>Setting</a></li>
                           <li><a href="/"><span class="material-icons">
                              logout
                           </span>Log out</a></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </Drawer>
         </div>
         <div>
            <Switch onChange={changeTheme} checkedChildren="☀️" unCheckedChildren="🌙" style={{ background: "#d22f27", borderColor: "#d22f27" }} />
         </div>
      </div>
   )
}

export default Navbar
