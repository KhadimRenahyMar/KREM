import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import './TechSlider.scss';
import JSLogo from '../../../../ressources/techLogos/JS.png'
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
                    width: '100%',
                    margin: '0 auto',
                    autoplay: true,
                    pauseOnHover: false,
                    perPage: 4,
                    padding: '1.5rem',
                    drag: true,
                    snap: false,
                    pagination: false,
                    arrows: false,
                    rewindByDrag: true,
                    // clones: 2,
                    // dragMinThreshold: {
                    //     mouse: 0,
                    //     touch: 10,
                    // },
                }}
            >
                <SplideTrack className='splide__track'>
                    {
                        techs.map((tech) => (
                            <SplideSlide key={tech.id} data-name={tech.fullname} className="slide" onClick={sortProjects}>
                                <svg className='slide__hiveLogo' xmlns="http://www.w3.org/2000/svg" width="217.163" height="250.546" viewBox="0 0 217.163 250.546">
                                    <path className='slide__hiveLogo--path' id="Tracé_178" data-name="Tracé 178" d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z" transform="translate(1.502 1.727)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="5" />
                                </svg>
                                <img src={JSLogo} alt="" className="slide__techLogo" />
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </div>
    )
}