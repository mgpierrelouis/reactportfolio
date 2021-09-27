import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Footer() {
    return (
        <div className= "footer" style={{display: 'flex', justifyContent: 'center'}}>
            <div className= "container" style={{display: 'flex', justifyContent: 'center'}}>
                <div className= "row col-lg-12" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3 className="text-center" style= {{color:'white'}}>Contact</h3>
                        <ul className= "list-unstyled" style={{justifyContent: 'center'}}>
                            <li className="text-center" style= {{color: 'white'}}>mgpierrelouis@gmail.com</li>
                            <li className="text-center"style= {{color: 'white'}}>980.267.2600</li>
                        </ul>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4" style={{justifyContent: 'center'}}>
                        <h2 className="text-center" style={{color: 'white'}}>Michael Pierre-Louis</h2>
                        <p className= "text-center" style={{color: 'white'}}>© Copyright 2021 - Michael Pierre-Louis. All Rights Reserved</p>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3 className="text-center" style={{color: 'white'}}>Websites</h3>
                        <ul className= "list-unstyled" style={{justifyContent: 'center'}}>
                            <li className="text-center" style= {{color: 'white'}}>
                                <a href = "https://github.com/mgpierrelouis/">Github</a>
                            </li>
                            <li className = "text-center" style= {{color: 'white'}}>
                                <a href = "https://www.linkedin.com/in/michael-pierre-louis-7163b2bb/">Linkedin</a>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Footer