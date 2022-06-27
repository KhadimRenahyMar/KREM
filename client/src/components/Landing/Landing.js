export default function Landing() {
    return (
        <div className='landing'>
            <h2 className='landing__name'>
                <span className='utils--orange'>K</span>
                HADIM
                <span className='utils--orange'> RE</span>
                NAHY-
                <span className='utils--orange'>M</span>
                AR
                </h2>
                <div className='landing__textBx'>
                    <p className='landing__text'>Je suis développeur Web Fullstack, j'ai 26 ans, <br/>Bienvenue sur mon portfolio !</p>
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
                <div className='slider'>
                    {/* slideJS */}
                </div>
                <div className='bar'>
                    <div className='bar__button'>
                    <div className="bar__icon"></div>
                    <p className='bar__desc'>Jeter un oeil à mes projets</p>
                    </div>
                    <div className='bar__button'>
                    <div className="bar__icon">
                    <p className='bar__desc'>En savoir plus sur moi</p>
                    </div>
                    </div>
            </div>
        </div>
    );
}