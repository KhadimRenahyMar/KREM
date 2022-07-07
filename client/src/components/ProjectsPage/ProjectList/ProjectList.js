import './ProjectList.scss';
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
import axios from 'axios';
import { useState, useEffect } from 'react';
import fakeCover from '../../../ressources/landing-page-exemple-1.png';

export default function ProjectsList({ projects }) {

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
        // TODO logique sortProject on project.techs.fullname === techName
    };

    return (
        <div className="projectList">
            <h3 className="projectList__title">Tous mes projets</h3>
            <TechSlider techs={techs} sortProjects={sortProjects} />
            <div className="projectList__contentBx">
                <div className="projectList__legend">
                    {/* //sortBySize ? */}
                    <li className="projectList__sizes">XS : composant</li>
                    <li className="projectList__sizes">S : feature</li>
                    <li className="projectList__sizes">M : petit projet</li>
                    <li className="projectList__sizes">L : projet -2 sprints</li>
                    <li className="projectList__sizes">XL : projet +2 sprints</li>
                </div>
                <ul className="projectList__list">
                    <div className="projectList__layer"></div>
                    {
                        projects.map((project) => (
                            <li className="projectList__project" key={project.id}>
                                <Link
                                    className="projectList__project-link"
                                    to={`/projects/${project.id}`}
                                    state={{ project }}
                                >
                                    <div className="projectList__project-contentBx">
                                        <div className="projectList__project-imgBx">
                                            <img className="projectList__project-cover" src={fakeCover} alt={`vue de la page d'acceuil d' ${project.title}`} />
                                            <div className="projectList__project-sizeStampBx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                                    <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                                                        <path className="projectList__project-sizeStampBx--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" transform="translate(436.5 581.34)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                                        <text className="projectList__project-sizeStampBx--size" id="_" data-name="&lt;" transform="translate(449 616)" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">
                                                            <tspan x="6" y="-3">{project.projectSize}</tspan>
                                                        </text>
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="projectList__project-textBx">
                                            <h3 className="projectList__project-title">{project.title}</h3>
                                            <div className="projectList__project--techBx">
                                                <span className="projectList__project--tech">{project.techs[2].shortname}</span>
                                                <span className="projectList__project--tech">{project.techs[0].shortname}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}