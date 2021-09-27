// import React from 'react'
import Project from './components/Project'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/About"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'




function App() {
  return (
   <Router>
   <>
      <Header />
        <Route exact path="/" component={Project}/>
        <Route exact path="/About" component={AboutMe}/>
     
      <Footer />
    </>
    </Router>
  );
}

export default App;
