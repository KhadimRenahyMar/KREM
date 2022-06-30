import './ProjectList.scss';
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function ProjectsList({projects}) {

    const [techs, setTechs] = useState([]);

    useEffect(() => {
        const fetchTechs = async () => {
            const data = await axios.get('/techs');
            console.log(data.data);
            setTechs(data.data);
        };
        fetchTechs();
    }, []);


    const sortProjects = (e) => {
        console.log(e.currentTarget)
        const button = e.currentTarget;
        const techName = button.dataset.name;
        console.log(techName);
        
    };

    return (
        <div className="projectList">
            <h3 className="projectList__title">Tous mes projets</h3>
            <TechSlider techs={techs} sortProjects={sortProjects}/>
            <div className="projectList__contentBx">
                <div className="projectList__legend">
                    <li className="projectList__sizes">XS : composant</li>
                    <li className="projectList__sizes">S : feature</li>
                    <li className="projectList__sizes">M : petit projet</li>
                    <li className="projectList__sizes">L : projet -2 sprints</li>
                    <li className="projectList__sizes">XL : projet +2 sprints</li>
                </div>
                <ul className="projectList__list">
                    {
                        projects.map((project) => (
                            <li className="project" key={project.id}>
                                <Link
                                    className="project__link"
                                    to={`/projectList/${project.id}`}
                                    state={{ project }}
                                >
                                    <span className="project__card">
                                        <div className="project__imgBx">
                                            {/* <img className="projectList__img" src={`/public/img/${project.cover}`} alt={`vue de la page d'acceuil d' ${project.title}`} /> */}
                                            <div className="project__stamp">{project.projectSize}</div>
                                        </div>
                                        <div className="project__contentBx">
                                            {project.title}
                                            {project.techs[2].shortname}
                                            {project.techs[0].shortname}
                                        </div>
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}