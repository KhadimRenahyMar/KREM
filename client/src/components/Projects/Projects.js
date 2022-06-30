import { useState, useEffect } from "react";
import axios from "axios";
import './Projects.scss';
import { Link } from "react-router-dom";

export default function Projects() {
    // console.log({projects});
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const fetchProjects = async () => {
            const data = await axios.get('/projects');
            // console.log(data.data);
            setProjects(data.data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="page page__projects">
            <section className="slider">
                {/* SlideJS  */}
            </section>
            <section className="projects__projectBx">
                <h3 className="projects__title">Tous mes projets</h3>
                <div className="techSlider">

                </div>
                <div className="projects__contentBx">
                    <div className="projects__legend">
                        <li className="projects__sizes">XS : composant</li>
                        <li className="projects__sizes">S : feature</li>
                        <li className="projects__sizes">M : petit projet</li>
                        <li className="projects__sizes">L : projet -2 sprints</li>
                        <li className="projects__sizes">XL : projet +2 sprints</li>
                    </div>
                    <ul className="projects__list">
                        {
                            projects.map((project) => (
                                <li className="project" key={project.id}>
                                    <Link
                                        className="project__link"
                                        to={`/projects/${project.id}`}
                                        state={{ project }}
                                    >
                                        <span className="project__card">
                                            <div className="project__imgBx">
                                                {/* <img className="projects__img" src={`/public/img/${project.cover}`} alt={`vue de la page d'acceuil d' ${project.title}`} /> */}
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
            </section>
        </div>
    );
}