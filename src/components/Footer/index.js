import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Footer() {
    return (
        <div className= "footer" style={{display: 'flex', justifyContent: 'center'}}>
            <div className= "container" style={{display: 'flex', justifyContent: 'center'}}>
                <div className= "row col-lg-12" tyle={{display: 'flex', justifyContent: 'center'}}>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3>Contact</h3>
                        <ul className= "list-unstyled">
                            <li>mgpierrelouis@gmail.com</li>
                            <li>980.267.2600</li>
                        </ul>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4" style={{justifyContent: 'center'}}>
                        <h2 style={{alignItems: 'center'}}>Michael Pierre-Louis</h2>
                        <ul className= "list-unstyled">
                            <li>© Copyright 2021 - Michael Pierre-Louis. All Rights Reserved</li>
                        </ul>                        
                    </div>
                    <div className= "col-lg-4 col-md-4 col-sm-4">
                        <h3>Websites</h3>
                        <ul className= "list-unstyled">
                            <li>
                                <a href = "https://github.com/mgpierrelouis/">Github</a>
                            </li>
                            <li>
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