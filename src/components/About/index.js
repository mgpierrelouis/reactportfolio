import React from 'react'
import { Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import headshot from './headshot.jpeg'


function AboutMe (){

    return (
        <div className='container'>
            <h1 style = {{color: 'white', fontSize: "72px"}}>About Me</h1>
            <p className="text-left" style = {{color: 'white', fontSize: "18px"}}>My name is Michael Pierre-Louis. I am a student in the UNCC Web Development Bootcamp looking to make a career as a web developer. 
                As some who grew up in the internet age, I've long had a surface level knowledge of some of the machinations behind the websites and 
                apps that we depend on. Anyone who ever mad a MySpace profile is at least familiar with HTML, and I'd played around with the inspect 
                tool to grab elements from webpages that were unavailable on the client side, but that was essentially the extent of my knowledge and
                interest in th subject until starting in the UNCC Bootcamp. I eventually became interested in web develpment as a career during the 2020
                pandemic, when I began to search for something more in a career than what I'm currently doing. The field of web development is certainly
                challenging, but it's fulfilling in a way that's hard to find. The ability to marry my passion for creativy and technology
                is what appealed to me most, and I look forward to making this my full time career. 
            </p>
            <p></p>
            <div style= {{justifyContent: 'center', display: 'flex'}}>
                <Image src= {headshot} roundedCircle></Image>
            </div>



        </div>
    )
}

export default AboutMe