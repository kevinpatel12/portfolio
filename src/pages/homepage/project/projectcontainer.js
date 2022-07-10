import React from 'react';
import Project from './project';
import './style.css' 

const projectData = [{
    name:"Portfolio",
    description:"It's a project about myself, my work and my skills.",
    skills:['HTML','JavaScript','React'],
    github:"https://github.com/kevinpatel12/portfolio",
    linkedIn:"https://www.linkedin.com/"
},
{
    name:"Game",
    description:"It's a counter game.In this we have to Reach equal to 10.",
    skills:['HTML','JavaScript','React'],
    github:"https://replit.com/@KevinPatel19/Game#src/App.jsx",
    linkedIn:"https://www.linkedin.com/"
},
{
    name:"Fetch User",
    description:"We can fetch github user by user's name.",
    skills: ['HTML','JavaScript','React'],
    github:"https://replit.com/@KevinPatel19/User#src/App.jsx",
    linkedIn:"https://www.linkedin.com/"
}
];

const ProjectContainer = () => {
    return (
        <div className="projectContainer">
            {
                projectData.map(projectItem=>{
                    return <Project projectItem={projectItem}/>
                })
            }
        </div>
    )
}

export default ProjectContainer
