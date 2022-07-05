import PipBoy from './PipBoy/PipBoy';
import './SkillsPage.scss';

export default function Skills() {
    // TODO API CALL GITHUB

    return (
        <div className="page page__skillsPage skillsPage">
            <section className="intro">
                <div className="intro__textBx">
                    <h2 className="intro__title">Khadim, 26 ans</h2>
                    <div className="intro__desc">
                        <span className="intro__desc--job">Développeur Fullstack JS</span>
                        <em className="intro__moto">"Ad Astra, per aspera</em>
                    </div>
                </div>
                <div className="intro__picture"></div>
            </section>
            <section className="stats">
                <ul className="stats__list">
                    <li className="stats__card stats__card--one">
                        <h4 className="stats__titles">Projets terminés</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card stats__card--two">
                        <h4 className="stats__titles">Dernier commit</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card stats__card--three">
                        <h4 className="stats__titles">Fonctionnalités/mois</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card stats__card--four">
                        <h4 className="stats__titles">Commit/semaine</h4>
                        <strong className="stats__data"></strong>
                    </li>
                    <li className="stats__card stats__card--five">
                        <h4 className="stats__titles">Dernier Projet</h4>
                        <strong className="stats__data"></strong>
                    </li>
                </ul>
            </section>

            <section className="pipboy">
                <PipBoy />
            </section>
        </div>
    );
};
