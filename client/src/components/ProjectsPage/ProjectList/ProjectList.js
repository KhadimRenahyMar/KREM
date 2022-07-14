import './ProjectList.scss';
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
import axios from 'axios';
import { useState, useEffect } from 'react';
import fakeCover from '../../../ressources/landing-page-exemple-1.png';

export default function ProjectsList({ projects }) {

    const [techs, setTechs] = useState([]);
    const [sortedProjects, setSortedProjects] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        console.log("search at Start", search);
        setSortedProjects(projects);

        const fetchTechs = async () => {
            const projects = JSON.parse(localStorage.getItem("projects"));

            if (projects) {
                const techs = JSON.parse(localStorage.getItem('techs'));
                // console.log(techs);
                if (techs === null) {
                    const data = await axios.post('/techs', {
                        data: projects,
                    });
                    localStorage.setItem('techs', JSON.stringify(data.data));
                    setTechs(data.data);
                }
                else {
                    // console.log(techs);
                    setTechs(techs);
                }
            }
        };
        fetchTechs();
    }, [projects]);


    const sortProjects = (e, techName) => {
        const button = e.currentTarget;
        const icon = button.childNodes[0].childNodes[0];

        const projectList = [];

        if (search.includes(techName)) {
            search.forEach((field) => console.log(field))
            const currentSearch = search.filter(fields => fields !== techName);
            setSearch(currentSearch);
            if (!currentSearch.includes(techName)) {
                const list = makeProjectList(currentSearch);
                projectList.push(...list);
            }
            icon.classList.remove('active');
            console.log(button);
        }
        else {
            search.push(techName);
            const list = makeProjectList(search);
            projectList.push(...list);
            icon.classList.add('active');
            console.log(button);
        }
        setSortedProjects(projectList);
    };

    function makeProjectList(currentSearch) {
        if (currentSearch.length > 0) {
            const projectList = [];
            for (const project of projects) {
                const match = currentSearch.every(searchField => {
                    return project.techs.includes(searchField);
                });
                if (match === true) {
                    projectList.push(project);
                }
            }
            return projectList;
        }
        else {
            return projects;
        }
    };

    return (
        <div className="projectList">
            <h3 className="projectList__title">Tous mes projets</h3>
            <TechSlider techs={techs} sortProjects={sortProjects} />
                <ul className="projectList__legend">
                    {/* //sortBySize ? */}
                    <li className="projectList__sizes">XS : composant</li>
                    <li className="projectList__sizes">S : feature</li>
                    <li className="projectList__sizes">M : petit projet</li>
                    <li className="projectList__sizes">L : projet -2 sprints</li>
                    <li className="projectList__sizes">XL : projet +2 sprints</li>
                </ul>
            <div className="projectList__contentBx">
                <ul className="projectList__list">
                    <div className="projectList__layer"></div>
                    {
                        sortedProjects.map((project) => (
                            <li key={project.name} className="projectList__project">
                                <Link
                                    className="projectList__project-link"
                                    to={`/projects/${project.name}`}
                                    state={{ project }}
                                >
                                    <div className="projectList__project-contentBx">
                                        <div className="projectList__project-imgBx">
                                            <img className="projectList__project-cover" src={project.coverURL === undefined || project.coverURL === "" ? fakeCover : project.coverURL} alt={`vue de la page d'acceuil d' ${project.title}`} />
                                            <div className="projectList__project-sizeStampBx">
                                                <p className="projectList__project-sizeStampBx--size" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">
                                                    <span >{project.size}</span>
                                                </p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                                    <g id="Groupe_792" data-name="Groupe 792">
                                                        <path className="projectList__project-sizeStampBx--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="projectList__project-textBx">
                                            <h3 className="projectList__project-title">{project.name}</h3>
                                            <div className="projectList__project--techBx">
                                                {/* <span className="projectList__project--tech">{project.techs[2].shortname}</span>
                                                <span className="projectList__project--tech">{project.techs[0].shortname}</span> */}
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