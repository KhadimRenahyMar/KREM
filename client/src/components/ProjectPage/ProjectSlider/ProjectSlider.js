import './ProjectSlider.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import noScreenshot from '../../../ressources/bg/noScreenshots2.webp';
import { Cloudinary } from "@cloudinary/url-gen";
import { useEffect, useRef, useState } from 'react';
import { scale } from '@cloudinary/url-gen/actions/resize';

export default function ProjectSlider({ project }) {
    const slider = useRef(null);
    const [screenshots, setScreenshots] = useState([]);

    const cld = new Cloudinary({
        cloud: {
            cloudName: `ddjt1r39a`,
        }
    });

    useEffect(() => {
        const makeScreenshots = () => {
            console.log('screenshots', project.screenshots);
            const screenshots = [];
            project.screenshots.forEach(shot => {
                const newImg = cld.image(`KREM/${project.name}/${shot.filename}`)
                    .format("webp")
                    .quality('auto')
                    .resize(scale().width(slider.current.offsetWidth))
                    .setVersion(shot.version);
                screenshots.push(newImg);
            });
            setScreenshots(screenshots);
        }
        makeScreenshots();
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
                                <SplideSlide key={screenshot.publicId} className="slide">
                                    <img src={screenshot.toURL()} alt="" className="slide__cover" />
                                    <div className="slide__sizeStampBx">
                                        <span className="slide__sizeStampBx--size" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">{project.size}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                            <path className="slide__sizeStampBx--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </SplideSlide>
                            ))
                        ) : (
                            <SplideSlide className="slide">
                                {
                                    project.coverURL !== 'undefined' ? (
                                        <img data-splide-lazy={project.coverURL} rel="preload" fetchpriority="high" src={project.coverURL} className='slide__cover' alt={`couverture du projet ${project.name}`} width={slider.current.offsetWidth} />
                                    ) : (
                                        <img data-splide-lazy={project.coverURL} rel="preload" src='/noScreenshots2.webp' className='slide__cover' alt={`couverture du projet ${project.name}`} width={slider.current.offsetWidth} />
                                    )
                                }
                                <div className="slide__sizeStampBx">
                                    <span className="slide__sizeStampBx--size" id="_" data-name="&lt;" fontFamily="Inconsolata-Light, Inconsolata" fontWeight="300">{project.size}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                        <path className="slide__sizeStampBx--path" id="Tracé_437" data-name="Tracé 437" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                    </svg>
                                </div>
                            </SplideSlide>
                        )
                    }
                </SplideTrack>
            </Splide>
        </div>
    )
}