import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import './TechSlider.scss';
export default function TechSlider({ techs, sortProjects }) {
    return (
        <div className="techSlider">
            <Splide hasTrack={false}
                className="splide"
                tag="section"
                aria-label="My Favorite Images"
                options={{
                    rewind: true,
                    type: 'loop',
                    // width: '100%',
                    // margin: '0 auto',
                    // autoplay: true,
                    // pauseOnHover: false,
                    perPage: 4,
                    perMove: 1,
                    // padding: '1.5rem',
                    lazyLoad: 'nearby',
                    // drag: true,
                    // snap: false,
                    // pagination: false,
                    arrows: false,
                    // rewindByDrag: true,
                    // dragMinThreshold: {
                    //     mouse: 0,
                    //     touch: 10,
                    // },
                }}
            >
                <SplideTrack className='splide__track'>
                    {
                        techs.map((tech) => (
                            <SplideSlide key={tech.name} className="slide" onClick={(e) => sortProjects(e, tech.name)}>
                                <svg className='slide__hiveLogo' xmlns="http://www.w3.org/2000/svg" width="217.163" height="250.546" viewBox="0 0 217.163 250.546">
                                    <path className='slide__hiveLogo--path' id="Tracé_178" data-name="Tracé 178" d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z" transform="translate(1.502 1.727)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="5" />
                                </svg>
                                <img src={`/techLogos/${tech.name}.png`} alt="" className="slide__techLogo" />
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </div>
    )
}