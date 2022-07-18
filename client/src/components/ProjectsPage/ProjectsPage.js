import './ProjectsPage.scss';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import fakeCover from '../../ressources/landing-page-exemple-1.png';
import ProjectList from "./ProjectList/ProjectList";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [lastProjects, setLastProjects] = useState([]);
    let fetchCount = 0;
    
    useEffect(() => {
        const localProjects = JSON.parse(localStorage.getItem('projects'));
        // console.log('localProjects =', localProjects);

        if (localProjects === null) {
            const fetchprojectsFromAPI = async () => {
                console.log("fetch");
                fetchCount = 1;
                const data = await axios.get('/projects/all');
                fetchedProjects.push(...data.data);
                setProjects(fetchedProjects);
                localStorage.setItem('projects', JSON.stringify(fetchedProjects));
                fetchCount = 0;
            }
            const fetchedProjects = [];
            if (fetchCount === 0) {
                fetchprojectsFromAPI();
            }
        }
        else {
            console.log("storage");
            setProjects(localProjects);
        }
    }, []);

    useEffect(() => {
        const localProjects = JSON.parse(localStorage.getItem('projects'));
        if (localProjects === null) {
            const fetchedLastProjects = [];
            const fetchLastProjectsFromAPI = async () => {
                console.log('lasts');
                fetchCount = 1;
                const data = await axios.get('/projects/lasts');
                // console.log(data.data);
                fetchedLastProjects.push(...data.data);
                setLastProjects(fetchedLastProjects);
                fetchCount = 1;
                localStorage.setItem('lastProjects', JSON.stringify(fetchedLastProjects));
            }

            if (fetchCount === 0) {
                fetchLastProjectsFromAPI();
            }
        }
        else {
            console.log("storage");
            setLastProjects(localProjects);
        }
    }, [projects]);

    return (
        <div className="page page__projectsPage projectsPage">

            <section className="projectsPage__slides">
                <h2 className="projectsPage__slides__title" id="splide">Mes derniers projets</h2>
                <Splide hasTrack={false}
                    className="splide"
                    tag="section"
                    aria-label="My Favorite Images"
                    options={{
                        rewind: true,
                        type: 'loop',
                        width: '100%',
                        margin: '0 auto',
                        autoplay: true,
                        pauseOnHover: false,
                        perPage: 1,
                        drag: true,
                    }}
                >
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">
                            <p className="splide__arrow--text splide__arrow--text-left" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300"><span>&lt;</span></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                <g id="Groupe_792" data-name="Groupe 792">
                                    <path className="splide__arrow--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                </g>
                            </svg>
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <p className="splide__arrow--text" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300"><span>&lt;</span></p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                <g id="Groupe_792" data-name="Groupe 792">
                                    <path className="splide__arrow--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <SplideTrack>
                        {
                            lastProjects.map((project) => (
                                <SplideSlide key={project.name} className="slide">
                                    <Link 
                                    to={`/projects/${project.name}`} 
                                    className="slide__link"
                                    state={{ project }}
                                    >
                                        <img src={project.coverURL === undefined || project.coverURL === "" ? fakeCover : project.coverURL} className='slide__cover' alt={`image de couverture du projet ${project.title}`} />
                                        <div className="slide__sizeStampBx">
                                            <p className="slide__sizeStampBx--size" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">
                                                <span>{project.size}</span>
                                            </p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                                <g id="Groupe_792" data-name="Groupe 792">
                                                    <path className="slide__sizeStampBx--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="slide__descBx">
                                            <h2 className="slide__title">{project.name}</h2>
                                        </div>
                                        <div className="slide__layer"></div>
                                    </Link>
                                </SplideSlide>
                            ))
                        }
                    </SplideTrack>
                </Splide>

            </section>
            <section className="projects__projectBx">
                <ProjectList projects={projects} />
            </section>
        </div>
    );
}