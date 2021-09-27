import React, {useState} from 'react'
import ProjectInfo from './projectsinfo.json'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'



function Project() {
    const [data, setdata] = useState(ProjectInfo)

    return (
        <div className= 'container'>
            {data.map((d)=> (
                    <div className="jumbotron text-white jumbotron-image shadow" style= {{backgroundImage: `url("https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80")`}} >
                    <h2 className="mb-4 text-center" style= {{color: "green"}}>
                      {d.title}
                    </h2>
                    <p className="mb-4 text-center" style= {{color: "green"}}>
                      {d.description}
                    </p>
                    <div style = {{display: "flex", justifyContent: "center"}}>
                    <a href={d.app} className="custom-btn btn btn-primary">Deployed Application</a>
                    <a href={d.github} className="custom-btn btn btn-primary">Github Repository</a>
                    </div>
                  </div>
                    ))}
            
        </div>
    )
}

export default Project