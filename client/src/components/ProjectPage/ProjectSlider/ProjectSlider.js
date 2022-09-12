import './ProjectSlider.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from 'react';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { cld } from '../../App/App';

import noScreenshot from '../../../assets/bg/noScreenshots2.webp';
import loadingImg from '../../../assets/bg/loading2.webp';

import PropTypes from 'prop-types';

export default function ProjectSlider({ project }) {
    const slider = useRef(null);
    const [screenshots, setScreenshots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (project?.screenshots.length > 0) {
            const makeScreenshots = () => {
                const screenshots = [];
                project.screenshots.forEach(shot => {
                    const newImg = cld.image(`${shot.public_id}`)
                        .format("webp")
                        .quality('auto')
                        .resize(scale().width(slider.current.offsetWidth))
                        .setVersion(shot.version);
                    const imgURL = newImg.toURL();
                    screenshots.push(imgURL);
                });
                setScreenshots(screenshots);
                setIsLoading(false);
            }
            makeScreenshots();
            localStorage.setItem("project", JSON.stringify(project))
        }
        else {
            if (project.coverURL !== undefined) {
                const newImg = cld.image(`${project.coverURL.path}`)
                    .format("webp")
                    .quality('auto')
                    .resize(scale().width(slider.current.offsetWidth))
                    .setVersion(project.coverURL.version);
                project.coverURL = newImg.toURL();
                setIsLoading(false);
            }
            else {
                project.coverURL = undefined;
                setIsLoading(false);
            }
        }
    }, [project]);

    return (
        <div ref={slider} className="projectSlider">
            <Splide hasTrack={false}
                className="splide"
                tag="section"
                aria-label="projectSlider"
                options={{
                    rewind: true,
                    type: 'loop',
                    autoplay: true,
                    pauseOnHover: false,
                    lazyLoad: true,
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
                {
                    isLoading ? (
                        <SplideTrack>
                            <SplideSlide key='loading' className="slide">
                                <div className="slide__link">
                                    <img rel="preload" src={loadingImg} className='slide__cover' alt={`couverture en cours de chargement, merci de patienter`} loading="lazy" />
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    ) : (
                        <SplideTrack>
                            {
                                screenshots.length > 0 ? (
                                    screenshots.map((screenshot) => (
                                        <SplideSlide key={screenshot} className="slide">
                                            <img rel='preload' fetchpriority="high" src={screenshot} alt={`aperçu des pages et fonctionnalités principales du projet ${project.name}`} className="slide__cover" />
                                        </SplideSlide>
                                    ))
                                ) : (
                                    <div>
                                        {
                                            project?.coverURL !== undefined ? (
                                                <SplideSlide className="slide">
                                                    <img data-splide-lazy={project?.coverURL.path} rel="preload" fetchpriority="high" src={project?.coverURL} className='slide__cover' alt={`couverture du projet ${project?.name}`} />
                                                </SplideSlide>
                                            ) : (
                                                <SplideSlide className="slide">
                                                    <img rel="preload" src={noScreenshot} className='slide__cover' alt={`couverture du projet ${project?.name}`} />
                                                </SplideSlide>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </SplideTrack>
                    )
                }
            </Splide>
        </div>
    )
}

ProjectSlider.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        repoURL: PropTypes.string.isRequired,
        coverURL: PropTypes.shape({
            path: PropTypes.string.isRequired,
            version: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
        }),
        size: PropTypes.string.isRequired,
        descTechs: PropTypes.array,
        techs: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                packages: PropTypes.array.isRequired,
            })
        ).isRequired,
        screenshots: PropTypes.array.isRequired,
        components: PropTypes.array.isRequired,
        designPatterns: PropTypes.array.isRequired,
        text: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
}