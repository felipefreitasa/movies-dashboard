import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './App.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './views/HomePage/HomePage';
import ScrollToTop from '../src/ScrollToTop'

function App() {

  useEffect(() => {
    Aos.init({ duration: 1200 })
  }, [])

  const [open, setOpen] = useState(false)


  const [theme, setTheme] = useState(false)

  function changeTheme() {
    setTheme(!theme)
  }

  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Navbar theme={theme} changeTheme={changeTheme} open={open} onClick={() => setOpen(!open)} />
        <Sidebar theme={theme} />
        <HomePage theme={theme} />
      </Router>
    </div>
  );
}

export default App;
