import './ProjectList.scss';
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import { API_URL } from '../../App/App';
import loadingImg from '../../../assets/bg/loading2.webp';
import noScreenshot from '../../../assets/bg/noScreenshots2.webp';
import lozad from 'lozad';
import PropTypes from 'prop-types';

export default function ProjectsList({ projects, isMobile, techIsLoading, setTechIsLoading, isLoading }) {
    const observer = lozad();
    observer.observe();

    const cards = useRef([]);
    const [techs, setTechs] = useState([]);
    const [sortedProjects, setSortedProjects] = useState([]);
    const [search, setSearch] = useState([]);
    const [sizeSearch, setSizeSearch] = useState([]);

    useEffect(() => {
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
                    setTechIsLoading(false);
                }
                fetchTechs();
            }
            else {
                setTechs(techs);
                setTechIsLoading(false);
            };
        }
    }, [projects]);

    const sortProjects = (e, type, data) => {
        const button = e.currentTarget;
        const icon = button.childNodes[0].childNodes[0];

        const projectList = [];
        if (search.includes(data) || sizeSearch.includes(data)) {
            let currentSearch = search;
            let currentSizeSearch = sizeSearch;

            if (search.length > 0 && type === 'tech') {
                currentSearch = search.filter(fields => fields !== data);
                setSearch(currentSearch);
                icon.classList.remove('active');
            }

            if (sizeSearch.length > 0 && type === 'size') {
                currentSizeSearch = sizeSearch.filter(fields => fields !== data);
                setSizeSearch(currentSizeSearch);
                button.classList.remove('active');
            }

            if (!currentSearch.includes(data) || !currentSizeSearch.includes(data)) {
                const list = makeProjectList(currentSearch, currentSizeSearch);
                projectList.push(...list);
            }
        }
        else {
            if (type === "tech") {
                search.push(data);
                icon.classList.add('active');
            }
            else {
                sizeSearch.push(data)
                button.classList.add('active');
            }
            const list = makeProjectList(search, sizeSearch);
            projectList.push(...list);
        }
        setSortedProjects(projectList);
    };

    function makeProjectList(search, sizeSearch) {
        if (search.length > 0 || sizeSearch.length > 0) {

            const projectList = [];
            for (const project of projects) {

                if (search.length > 0 && sizeSearch.length === 0) {
                    const techList = [];
                    for (let tech of project.techs) {
                        if (!techList.includes(tech.name)) {
                            techList.push(tech.name);
                        }
                    }
                    const match = search.every((searchField) => techList.includes(searchField))

                    if (match === true && !projectList.includes(project)) {
                        projectList.push(project);
                    }
                }
                else if (sizeSearch.length > 0 && search.length === 0) {
                    const match = sizeSearch.some(searchField => {
                        return project.size === searchField;
                    });
                    if (match === true) {
                        projectList.push(project);
                    }
                }
                else if (sizeSearch.length > 0 && search.length > 0) {
                    const test = () => {
                        const size = sizeSearch.some(searchField => project.size === searchField);

                        const test = search.every((searchField) => project.techs.some((tech) => tech.name === searchField))

                        if (test === true && size === true) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    const match = test();
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
        observer.observe(card);
        return card;
    };

    return (
        <div className="projectList">
            {
                techIsLoading ? (
                    <div className="utils__loader">
                        <Dimmer active>
                            <Loader size='massive' className='utils__loader--text'>Loading</Loader>
                        </Dimmer>
                    </div>
                ) : (
                    <div className="projectList__contentBx">
                        <h3 className="projectList__title">Tous mes projets</h3>
                        <TechSlider techs={techs} sortProjects={sortProjects} isMobile={isMobile} />
                        <ul className="projectList__legend">
                            <li className="projectList__sizes" onClick={(e) => sortProjects(e, "size", "XS")}>XS : composant</li>
                            <li className="projectList__sizes" onClick={(e) => sortProjects(e, "size", "S")}>S : feature</li>
                            <li className="projectList__sizes" onClick={(e) => sortProjects(e, "size", "M")}>M : petit projet</li>
                            <li className="projectList__sizes" onClick={(e) => sortProjects(e, "size", "L")}>L : projet -2 sprints</li>
                            <li className="projectList__sizes" onClick={(e) => sortProjects(e, "size", "XL")}>XL : projet +2 sprints</li>
                        </ul>
                        <div className="projectList__contentBx">
                            <div className="projectList__layer utils--layer"></div>
                            <span className='projectList__resultCount'>
                                {sortedProjects.length} projet(s) trouvé(s) !</span>
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
                                                        </div>
                                                    ) : (
                                                        <div className="projectList__project-imgBx">
                                                            {
                                                                project?.coverURL !== undefined ? (
                                                                    <img rel="preload" fetchpriority="high" src={project.coverURL.url} className='slide__cover lozad' alt={`couverture du projet ${project.name}`} width={cards.current.offsetWidth} />
                                                                ) : (
                                                                    <img src={noScreenshot} className='slide__cover' alt={`le project ${project.name} n'a pas d'aperçu`} width={cards.current.offsetWidth} />
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
                                                        {
                                                            project?.descTechs.map((tech) => (
                                                                <span key={tech} className="projectList__project--tech">{tech}</span>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div >
                )
            }
        </div >
    )
}

ProjectsList.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    techIsLoading: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    setTechIsLoading: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
}