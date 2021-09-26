import React, {useState} from 'react'
import ProjectInfo from './projectsinfo.json'
import 'bootstrap/dist/css/bootstrap.css'



function Project() {
    const [data, setdata] = useState(ProjectInfo)

    return (
        <div className= 'container'>
            {data.map((d)=> (
                    <div className="jumbotron text-white jumbotron-image shadow" style= {{backgroundImage: `url("https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80")`}}>
                    <h2 className="mb-4" style= {{color: "orange"}}>
                      {d.title}
                    </h2>
                    <p className="mb-4" style= {{color: "magenta"}}>
                      {d.description}
                    </p>
                    <a href={d.app} className="btn btn-primary">Deployed Application</a>
                    <a href={d.github} className="btn btn-primary">Github Repository</a>
                  </div>
                    ))}
            
        </div>
    )
}

export default Project