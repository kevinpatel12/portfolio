import React from 'react'

const Project = ({projectItem}) => {
    const {name, description, skills, github, linkedIn} = projectItem;
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="skillContainer">
                {skills.map(skill=>(
                  <span className="skills">{skill}</span>
                ))}
            </div>
            <span className="projectLink">
                <a href={github} target='blank'>Github</a>
            </span>            
            <span>
                <a href={linkedIn} target='blank'>LinkedIn</a>
            </span>
        </div>
    )
}

export default Project
