import './ProjectsPage.scss';
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import axios from "axios";
import ProjectList from "./ProjectList/ProjectList";

import { API_URL } from '../App/App';
import { checkUpdate } from '../App/App';
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
        const lastUpdate = checkUpdate();
        if (localProjects === null || lastUpdate > 1) {
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
                const date = new Date().getTime();
                localStorage.setItem('lastUpdate', date);
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

    const scroll = () => {
        window.scrollTo(0, splide.current.offsetTop - 100);
    };
    
    return (
        <div className="page page__projectsPage projectsPage">

            <section className="projectsPage__slides" ref={splide}>
                <h2 className="projectsPage__slides__title" id="splide">Mes derniers projets</h2>
                <Splide hasTrack={false}
                    className="splide"
                    tag="section"
                    aria-label="projectsSlider"
                    options={{
                        rewind: true,
                        type: 'loop',
                        // autoplay: true,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        perPage: 1,
                        drag: true,
                    }}
                >
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">
                            <p className="splide__arrow--text splide__arrow--text-left" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300"><span>&lt;</span></p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.056 50.827">
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
                                                <div className="slide__descBx">
                                                    <h2 className="slide__title">{project.name}</h2>
                                                    <p className="slide__desc">{project.desc}</p>
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
            <a href='#' className="utils__btn" onClick={scroll}>
                <svg className='utils__hive' xmlns="http://www.w3.org/2000/svg" width="217.163" height="250.546" viewBox="0 0 217.163 250.546">
                    <path id="Tracé_178" data-name="Tracé 178" d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"/>
                </svg>
                <svg className='utils__btn--up' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
            </a>
        </div>
    );
}

Projects.propTypes = {
    isMobile: PropTypes.bool.isRequired,
}