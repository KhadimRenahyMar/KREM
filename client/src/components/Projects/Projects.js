import { useState, useEffect } from "react";
import axios from "axios";
import './Projects.scss';
import { Link } from "react-router-dom";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import fakeCover from '../../ressources/landing-page-exemple-1.png';

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
        <div className="page page__projects projects">

            <section className="projects__slides">
                <div className="projects__slides__titleBx">
                    <h2 className="projects__slides__title" id="splide">Mes derniers projets</h2>
                </div>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                                    <path className="splide__arrow--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" transform="translate(436.5 581.34)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                    <text className="splide__arrow--text" id="_" data-name="&lt;" transform="translate(449 616)" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300"><tspan x="2" y="-2">&lt;</tspan></text>
                                </g>
                            </svg>
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                                    <path className="splide__arrow--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" transform="translate(436.5 581.34)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                    <text className="splide__arrow--text" id="_" data-name="&lt;" transform="translate(449 616)" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300"><tspan x="2" y="-2">&lt;</tspan></text>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <SplideTrack>
                        {
                            projects.map((project) => (
                                <SplideSlide key={project.id} className="slide">
                                    <Link to={`/projects/${project.id}`} className="slide__link">
                                        <img src={fakeCover} className='slide__cover' alt={`image de couverture du projet ${project.title}`} />
                                        {/* src={`./img/${project.cover}`} */}
                                        <div className="slide__macaron">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                                <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                                                    <path className="slide__macaron--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" transform="translate(436.5 581.34)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                                    <text className="slide__macaron--size" id="_" data-name="&lt;" transform="translate(449 616)" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">
                                                        <tspan x="5" y="-5">{project.projectSize}</tspan>
                                                    </text>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="slide__descBx">
                                            <h2 className="slide__title">{project.title}</h2>
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