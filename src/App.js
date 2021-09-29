// import React from 'react'
import Project from './components/Project'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/About"
import {Switch, Route} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css'





  function App() {
    return (
      <>
        {/* <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/About">About</Link>
            </li>
          </ul>
        </nav> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Project />
          </Route>
          <Route exact path="/About">
            <AboutMe />
          </Route>
        </Switch>  
        <Footer />
      </>
    )
  }

export default App;
