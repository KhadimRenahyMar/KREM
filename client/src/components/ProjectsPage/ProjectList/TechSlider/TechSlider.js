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
                    drag: true,
                    snap: false,
                    pagination: false,
                    arrows: false,
                    rewindByDrag: true,
                    clones: 2,
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
                                <img src={JSLogo} alt="" className="slide__logo" />
                            </SplideSlide>
                        ))
                    }
                </SplideTrack>
            </Splide>
        </div>
    )
}