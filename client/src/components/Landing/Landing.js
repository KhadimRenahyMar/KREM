import { Link } from "react-router-dom";
import './Landing.scss';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Project from "../Project/Project";
import fakeCover from '../../ressources/landing-page-exemple-1.png';

export default function Landing({ projects }) {
    return (
        <div className='landing'>

            <section className="landing__intro">
                <div className="landing__contentBx">
                    <div className='landing__textBx'>
                        <h2 className='landing__name'>
                            <span className='utils--orange'>K</span>
                            HADIM
                            <span className='utils--orange'> RE</span>
                            NAHY-
                            <span className='utils--orange'>M</span>
                            AR
                        </h2>
                        <p className='landing__text'>Je suis développeur Web Fullstack, j'ai 26 ans, <br />Bienvenue sur mon portfolio !</p>
                    </div>
                </div>
                <div className='landing__hive'>
                    <strong className='landing__subtitle'>
                        LA
                        <span className='utils--white'> LOGIQUE </span><br />
                        AU SERVICE DE <br />
                        LA<span className='utils--orange'> CRÉATIVITÉ </span>
                    </strong>
                </div>
                <div className='landing__icon'>
                </div>
            </section>

            <section className="slides">
                {/* TODO slideJS */}
                <div className="slides__titleBx">
                    <h2 className="slides__title">Mes derniers projets</h2>
                </div>
                <Splide
                    className="splide"
                    tag="section"
                    aria-label="My Favorite Images"
                    options={{
                        rewind: true,
                        type: 'loop',
                        width: '100%',
                        margin: '0 auto',
                        autoplay : true,
                        pauseOnHover : false,
                        perPage: 1,
                        drag: true,
                        // cover: true,
                    }}
                >
                    {
                        projects.map((project) => (
                            <SplideSlide className="slide">
                                <img src={fakeCover} className='slide__cover' alt={`image de couverture du projet ${project.title}`} />
                                {/* src={`./img/${project.cover}`} */}
                                    <div className="slide__macaron">
                                        <p className="slide__size">{project.projectSize}</p>
                                    </div>
                                <div className="slide__descBx">
                                    <h2 className="slide__title">{project.title}</h2>
                                    <p className="slide__text">{project.desc}</p>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
                
                <div className='bar'>
                    {/* // TODO ajout svg */}
                    <Link to='/projects' className='bar__button'>
                        <span className='bar__desc'>Jeter un oeil à mes projets</span>
                    </Link>
                    <Link to='/skills' className='bar__button'>
                        <span className='bar__desc'>En savoir plus sur moi</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}