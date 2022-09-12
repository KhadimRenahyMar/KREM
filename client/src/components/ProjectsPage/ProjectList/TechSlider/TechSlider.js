import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import './TechSlider.scss';
import lozad from 'lozad';
import { useRef } from 'react';
import PropTypes from 'prop-types';

export default function TechSlider({ techs, sortProjects, isMobile }) {
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

    return (
        <div className="techSlider">
            {
                isMobile ? (
                    <Splide hasTrack={false}
                        className="splide"
                        tag="section"
                        aria-label="techSlider"
                        options={{
                            rewind: true,
                            autoplay: true,
                            pauseOnFocus: true,
                            perPage: 4,
                            perMove: 1,
                            lazyLoad: 'nearby',
                            drag: 'free',
                            snap: true,
                            pagination: false,
                            arrows: false,
                        }}
                    >
                        <SplideTrack className='splide__track'>
                            {
                                techs.map((tech) => (
                                    <SplideSlide key={tech.name} className="slide" onClick={(e) => sortProjects(e, "tech", tech.name)}>
                                        <svg className='slide__hiveLogo' xmlns="http://www.w3.org/2000/svg" width="217.163" height="250.546" viewBox="0 0 217.163 250.546">
                                            <path className='slide__hiveLogo--path' id="Tracé_178" data-name="Tracé 178" d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z" />
                                        </svg>
                                        <img src={tech.logo.secure_url} alt={`logo - cliquez pour trier les projets utilisant ${tech.filename}`} ref={makeRef} className="slide__techLogo lozad" />
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                    </Splide>
                ) : (
                    <Splide hasTrack={false}
                        className="splide"
                        tag="section"
                        aria-label="techSlider"
                        options={{
                            rewind: true,
                            autoplay: true,
                            pauseOnHover: true,
                            perPage: 8,
                            perMove: 1,
                            lazyLoad: 'nearby',
                            drag: 'free',
                            snap: true,
                            pagination: false,
                            arrows: false,
                        }}
                    >
                        <SplideTrack className='splide__track'>
                            {
                                techs.map((tech) => (
                                    <SplideSlide key={tech.name} className="slide" onClick={(e) => sortProjects(e, "tech", tech.name)}>
                                        <svg className='slide__hiveLogo' xmlns="http://www.w3.org/2000/svg" width="217.163" height="250.546" viewBox="0 0 217.163 250.546">
                                            <path className='slide__hiveLogo--path' id="Tracé_178" data-name="Tracé 178" d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"/>
                                        </svg>
                                        <img rel='preload' src={tech.logo.secure_url} alt={`logo - cliquez pour trier les projets utilisant ${tech.filename}`} ref={makeRef} className="slide__techLogo lozad" />
                                    </SplideSlide>
                                ))
                            }
                        </SplideTrack>
                    </Splide>
                )
            }
        </div>
    )
}

TechSlider.propTypes = {
    techs: PropTypes.array.isRequired,
    sortProjects: PropTypes.func.isRequired,
    isMobile: PropTypes.bool.isRequired,
}