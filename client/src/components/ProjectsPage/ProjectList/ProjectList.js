import './ProjectList.scss';
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import { API_URL } from '../../App/App';

import loadingImg from '../../../assets/bg/loading2.webp';
import noScreenshot from '../../../assets/bg/noScreenshots2.webp';

export default function ProjectsList({ projects, isMobile, isLoading }) {
    const cards = useRef([]);
    const [techs, setTechs] = useState([]);
    const [sortedProjects, setSortedProjects] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        console.log("projectList useEffect", projects.length);
        if (projects.length > 0) {
            setSortedProjects(projects);

            const techs = JSON.parse(localStorage.getItem('techs'));
            if (techs === null) {
                const fetchTechs = async () => {
                    const data = await axios.post(`${API_URL}/techs`, {
                        data: projects,
                    });
                    setTechs(data.data);
                    localStorage.setItem('techs', JSON.stringify(data.data));
                }
                fetchTechs();
            }
            else {
                setTechs(techs);
            };
        }
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
        }
        else {
            search.push(techName);
            const list = makeProjectList(search);
            projectList.push(...list);
            icon.classList.add('active');
        }
        setSortedProjects(projectList);
    };

    function makeProjectList(currentSearch) {
        if (currentSearch.length > 0) {
            const projectList = [];
            for (const project of projects) {
                for (const tech of project.techs) {
                    const match = currentSearch.every(searchField => {
                        return tech.name === searchField;
                    });
                    if (match === true) {
                        projectList.push(project);
                    }
                }
            }
            return projectList;
        }
        else {
            return projects;
        }
    };

    const getRef = (card) => {
        cards.current.push(card);
        return card;
    };

    return (
        <div className="projectList">
            <h3 className="projectList__title">Tous mes projets</h3>
            <TechSlider techs={techs} sortProjects={sortProjects} isMobile={isMobile}/>
            <ul className="projectList__legend">
                {/* //sortBySize ? */}
                <li className="projectList__sizes">XS : composant</li>
                <li className="projectList__sizes">S : feature</li>
                <li className="projectList__sizes">M : petit projet</li>
                <li className="projectList__sizes">L : projet -2 sprints</li>
                <li className="projectList__sizes">XL : projet +2 sprints</li>
            </ul>
            <div className="projectList__contentBx">
                <div className="projectList__layer"></div>
                <span className='projectList__resultCount'>{sortedProjects.length} projet(s) trouvé(s) !</span>
                <ul className="projectList__list">
                    {
                        sortedProjects.map((project) => (
                            <li key={project.name} className="projectList__project" ref={getRef}>
                                <Link
                                    className="projectList__project-link"
                                    to={`/projects/${project.name}`}
                                    state={{ project }}
                                >
                                    {
                                        isLoading ? (
                                            <div className="projectList__project-imgBx">
                                                <img rel="preload" src={loadingImg} className='slide__cover' alt={`couverture en cours de chargement, merci de patienter`} />
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
                                        ) : (
                                            <div className="projectList__project-imgBx">
                                                {
                                                    project.coverURL !== 'undefined' ? (
                                                        <img rel="preload" fetchpriority="high" src={project.coverURL} className='slide__cover' alt={`couverture du projet ${project.name}`} width={cards.current.offsetWidth} />
                                                    ) : (
                                                        <img src={noScreenshot} className='slide__cover' alt={`couverture du projet ${project.name}`} width={cards.current.offsetWidth} />
                                                    )
                                                }
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
                                        )
                                    }
                                    <div className="projectList__project-textBx">
                                        <h3 className="projectList__project-title">{project.name}</h3>
                                        <div className="projectList__project--techBx">
                                            <span className="projectList__project--tech">{project.techs[0].name}</span>
                                            <span className="projectList__project--tech">{project.techs[1].name}</span>
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