import './ProjectSlider.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import fakeCover from '../../../ressources/landing-page-exemple-1.png'; //temporaire
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProjectSlider({ project }) {
    // console.log(project)

    return (
        <div className="projectSlider">
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
                        project?.screenshots && (
                            project.screenshots.map((screenshot) => (
                                <SplideSlide key={screenshot.id} className="slide">
                                    <img src={screenshot.download_url} className='slide__cover' alt={`image de couverture du projet ${project.title}`} />
                                    <div className="slide__macaron">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                            <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                                                <path className="slide__macaron--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" transform="translate(436.5 581.34)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                                <text className="slide__macaron--size" id="_" data-name="&lt;" transform="translate(449 616)" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">
                                                    <tspan x="5" y="-5">{project.size}</tspan>
                                                </text>
                                            </g>
                                        </svg>
                                    </div>
                                </SplideSlide>
                            ))
                        )
                    }
                </SplideTrack>
            </Splide>
        </div>
    )
}