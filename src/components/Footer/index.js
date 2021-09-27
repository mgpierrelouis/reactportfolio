import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Footer() {
    return (
        <div className= "footer" style={{display: 'flex', justifyContent: 'center'}}>
            <div className= "container" style={{display: 'flex', justifyContent: 'center'}}>
                <div className= "row col-lg-12" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3 className="text-center">Contact</h3>
                        <ul className= "list-unstyled" style={{justifyContent: 'center'}}>
                            <li className="text-center">mgpierrelouis@gmail.com</li>
                            <li className="text-center">980.267.2600</li>
                        </ul>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4" style={{justifyContent: 'center'}}>
                        <h2 className="text-center">Michael Pierre-Louis</h2>
                        <p className= "text-center">© Copyright 2021 - Michael Pierre-Louis. All Rights Reserved</p>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3 className="text-center">Websites</h3>
                        <ul className= "list-unstyled" style={{justifyContent: 'center'}}>
                            <li className="text-center">
                                <a href = "https://github.com/mgpierrelouis/">Github</a>
                            </li>
                            <li className = "text-center">
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