import './ProjectSlider.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { useEffect, useRef, useState } from 'react';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { cld } from '../../App/App';

import noScreenshot from '../../../assets/bg/noScreenshots2.webp';

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
                project.coverURL= newImg.toURL();
                setIsLoading(false);
            }
            else {
                project.coverURL = 'undefined';
            }
        }
    }, [project]);

    return (
        <div ref={slider} className="projectSlider">
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
                <SplideTrack>
                    {
                        screenshots.length > 0 ? (
                            screenshots.map((screenshot) => (
                                <SplideSlide key={screenshot} className="slide">
                                    <img rel='preload' fetchpriority="high" src={screenshot} alt="" className="slide__cover" />
                                </SplideSlide>
                            ))
                        ) : (
                            <div>
                                {
                                    isLoading === false && project?.coverURL.path !== 'undefined' ? (
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
            </Splide>
        </div>
    )
}