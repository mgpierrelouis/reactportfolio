// import React from 'react'
import Project from './components/Project'
import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/About"
import {Route, Switch, Link} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'




function App() {
  return (
   <HashRouter>
   <>
      <Header />
        <Route exact path="/" component={Project}/>
        <Route exact path="/About" component={AboutMe}/>
     
      <Footer />
    </>
    </HashRouter>
  );
}

export default App;
