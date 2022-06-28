import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className='landing'>
            <section className="intro">
                <h2 className='landing__name'>
                    <span className='utils--orange'>K</span>
                    HADIM
                    <span className='utils--orange'> RE</span>
                    NAHY-
                    <span className='utils--orange'>M</span>
                    AR
                </h2>
                <div className='landing__textBx'>
                    <p className='landing__text'>Je suis développeur Web Fullstack, j'ai 26 ans, <br />Bienvenue sur mon portfolio !</p>
                </div>
                <div className='landing__hive'>
                    <h2 className='landing__subtitle'>
                        LA
                        <span className='utils--white'> LOGIQUE </span>
                        AU SERVICE DE LA
                        <span className='utils--orange'> CRÉATIVITÉ </span>
                    </h2>
                </div>
                <div className='landing__icon'>
                </div>
            </section>
            <section className="slider">
                <div className='slider'>
                    {/* TODO slideJS */}
                </div>
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