import './ProjectsPage.scss';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import axios from "axios";
import ProjectList from "./ProjectList/ProjectList";

import { API_URL } from '../App/App';
import loadingImg from '../../assets/bg/loading2.webp';
import noScreenshot from '../../assets/bg/noScreenshots2.webp';

import { cld } from "../App/App";
import { dpr, format, quality } from "@cloudinary/url-gen/actions/delivery";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { autoBest } from "@cloudinary/url-gen/qualifiers/quality";

import lozad from 'lozad';
import PropTypes from 'prop-types';

export default function Projects({ isMobile }) {
    const observer = lozad();
    observer.observe();
    const imgBx = useRef([]);

    const makeRef = (img) => {
        if (!imgBx.current.includes(img) && img !== null) {
            imgBx.current.push(img);
            observer.observe(img);
            return img;
        }
    };

    const splide = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    const [lastProjects, setLastProjects] = useState([]);
    const [techIsLoading, setTechIsLoading] = useState(true);

    useEffect(() => {
        const width = splide.current.offsetWidth;
        const localProjects = JSON.parse(localStorage.getItem('projects'));

        if (localProjects === null) {
            const fetchedProjects = [];
            const fetchprojectsFromAPI = async () => {
                const data = await axios.get(`${API_URL}/projects/all`);
                fetchedProjects.push(...data.data);
                for (let project of fetchedProjects) {
                    if (project.coverURL !== undefined) {
                        const responsiveURL = cld.image(`${project.coverURL.path}`)
                            .resize(scale().width(width))
                            .setVersion(project.coverURL.version)
                            .delivery(format(auto()))
                            .delivery(dpr(2.0))
                            .delivery(quality(autoBest()));
                        project.coverURL.url = responsiveURL.toURL();
                    }
                    else {
                        project.coverURL = undefined;
                    }
                }
                setProjects(fetchedProjects);
                setIsLoading(false);
                localStorage.setItem('projects', JSON.stringify(fetchedProjects));
            }
            fetchprojectsFromAPI();
        }
        else {
            setProjects(localProjects);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const lastProjectsStorage = JSON.parse(localStorage.getItem('lastProjects'));
        if (lastProjectsStorage === null) {
            if (projects.length > 0) {
                const width = splide.current.offsetWidth;
                const sortedProjects = projects.sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 5);
                for (let project of sortedProjects) {
                    if (project.coverURL !== undefined) {
                        const responsiveURL = cld.image(`${project.coverURL.path}`)
                            .resize(scale().width(width))
                            .setVersion(project.version)
                            .delivery(format(auto()))
                            .delivery(dpr(2.0))
                            .delivery(quality(autoBest()));
                        project.coverURL.url = responsiveURL.toURL();
                    }
                    else {
                        project.coverURL = undefined;
                    }
                }
                setLastProjects(sortedProjects);
                localStorage.setItem('lastProjects', JSON.stringify(sortedProjects));
            }
        }
        else {
            setLastProjects(lastProjectsStorage);
        }
    }, [projects]);
    
    return (
        <div className="page page__projectsPage projectsPage">

            <section className="projectsPage__slides" ref={splide}>
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
                    {
                        isLoading ? (
                            <SplideTrack>
                                <SplideSlide key='loading' className="slide">
                                    <div className="slide__link">
                                        <img rel="preload" src={loadingImg} className='slide__cover' alt={`couverture en cours de chargement, merci de patienter`} />
                                    </div>
                                </SplideSlide>
                            </SplideTrack>
                        ) : (
                            <SplideTrack>
                                {
                                    lastProjects.map((project) => (
                                        <SplideSlide key={project.name} className="slide">
                                            <Link
                                                to={`/projects/${project.name}`}
                                                className="slide__link"
                                                state={{ project }}
                                            >
                                                {
                                                    project.coverURL !== undefined ? (
                                                        <img data-splide-lazy={project.coverURL.url} rel="preload" fetchpriority="high" src={project.coverURL.url} className='slide__cover lozad' alt={`couverture du projet ${project.name}`} ref={makeRef} width={splide.current.offsetWidth} />
                                                    ) : (
                                                        <img data-splide-lazy="noScreenshot" rel="preload" src={noScreenshot} className='slide__cover' alt={`couverture du projet ${project.name}`} width={splide.current.offsetWidth} />
                                                    )
                                                }
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
                                                <div className="slide__layer utils--layer"></div>
                                                <div className="slide__descBx">
                                                    <h2 className="slide__title">{project.name}</h2>
                                                </div>
                                            </Link>
                                        </SplideSlide>
                                    ))
                                }
                            </SplideTrack>
                        )
                    }
                </Splide>

            </section>
            <section className="projects__projectBx">
                <ProjectList projects={projects} isMobile={isMobile} setTechIsLoading={setTechIsLoading} techIsLoading={techIsLoading} isLoading={isLoading} />
            </section>
        </div>
    );
}

Projects.propTypes = {
    isMobile: PropTypes.bool.isRequired,
}