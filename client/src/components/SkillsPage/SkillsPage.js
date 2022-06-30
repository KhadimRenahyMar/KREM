export default function Skills() {
    // TODO API CALL GITHUB

    const showScreen = (e) => {
        const button = e.currentTarget;
        const id = button.id;
        const screens = e.currentTarget.parentNode.parentNode.childNodes[1].childNodes;
        screens.forEach(screen => {
            if(screen.classList.contains('visible')){
                screen.classList.remove('visible');
            }
            if(screen.id === id){
                screen.classList.add('visible');
                console.log(screen);
            }
        });
    };

    return (
        <div className="page page__skillsPage skillsPage">
            <section className="intro">
                <h2 className="intro__title">Khadim, 26 ans</h2>
                <div className="intro__textBx">
                    <span className="intro__desc">Développeur Fullstack JS</span>
                    <em className="intro__moto">"Ad Astra, per aspera</em>
                </div>
            </section>
            <section className="stats">
                <ul className="stats__list">
                    <li className="stats__card">
                        <h4 className="stats__titles">Projets terminés</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card">
                        <h4 className="stats__titles">Dernier commit</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card">
                        <h4 className="stats__titles">Fonctionnalités/mois</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card">
                        <h4 className="stats__titles">Commit/semaine</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card">
                        <h4 className="stats__titles">Dernier Projet</h4>
                        <strong className="stats__data"></strong>
                    </li>
                </ul>
            </section>

            <section className="pipboy">
                <div className="pipboy__btns--up">
                    <button className="pipboy__button" id="skills" onClick={showScreen}>Compétences</button>
                    <button className="pipboy__button" id="experience" onClick={showScreen}>Expérience</button>
                    <button className="pipboy__button" id="formation" onClick={showScreen}>Formation</button>
                </div>
                <div className="pipboy__screens">
                    <div className="pipboy__screen visible" id="skills">

                    {/* //TODO chart */}
                    </div>
                    <div className="pipboy__screen" id="experience">
                        <ul className="pipboy__experience-list">
                            <li className="pipboy__experience-item">
                                <h5 className="pipboy__experience-date">2021</h5>
                                <p className="pipboy__experience-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic mollitia labore iure voluptas aut!</p>
                                <ul className="pipboy__experience-skills">
                                    <li className="pipboy__experience-skill">Gestion de projet</li>
                                </ul>
                            </li>
                            <li className="pipboy__experience-item"></li>
                            <li className="pipboy__experience-item"></li>
                            <li className="pipboy__experience-item"></li>
                        </ul>
                    </div>
                    <div className="pipboy__screen" id="formation">
                        <ul className="pipboy__formation-list">
                            <li className="pipboy__formation-item">
                            <h5 className="pipboy__formation-date">2021</h5>
                                <p className="pipboy__formation-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic mollitia labore iure voluptas aut!</p>
                                <ul className="pipboy__formation-skills">
                                    <li className="pipboy__formation-skill">Analyse d'une problématique</li>
                                </ul>
                            </li>
                            <li className="pipboy__formation-item"></li>
                            <li className="pipboy__formation-item"></li>
                            <li className="pipboy__formation-item"></li>
                            <li className="pipboy__formation-item"></li>
                        </ul>
                    </div>
                    <div className="pipboy__screen" id="big5">
                    {/* //TODO chart */}
                    </div>
                    <div className="pipboy__screen" id="else">
                        <div className="pipboy__else-textBx">
                            <h4 className="pipboy__else-title">Compétences transverses</h4>
                            <ul className="pipboy__else-list">
                                <li className="pipboy__else-item"></li>
                                <li className="pipboy__else-item"></li>
                            </ul>
                        </div>
                        <div className="pipboy__else-textBx">
                            <h4 className="pipboy__else-title">Centres d'intérêts</h4>
                            <ul className="pipboy__else-list">
                                <li className="pipboy__else-item"></li>
                                <li className="pipboy__else-item"></li>
                            </ul>
                        </div>
                        <div className="pipboy__else-textBx">
                            <h4 className="pipboy__else-title">Qualités</h4>
                            <ul className="pipboy__else-list">
                                <li className="pipboy__else-item"></li>
                                <li className="pipboy__else-item"></li>
                            </ul>
                        </div>
                        <div className="pipboy__else-textBx">
                            <h4 className="pipboy__else-title">Valeurs</h4>
                            <ul className="pipboy__else-list">
                                <li className="pipboy__else-item"></li>
                                <li className="pipboy__else-item"></li>
                            </ul>
                        </div>
                    </div>
                    {/* // TODO scroll bar */}
                </div>
                <div className="pipboy__btns--down">
                    <button className="pipboy__button" id="big5" onClick={showScreen}>Big Five</button>
                    <button className="pipboy__button" id="else" onClick={showScreen}>Autres</button>
                </div>
            </section>
        </div>
    );
};
