import './SkillsPage.scss';
import PipBoy from './PipBoy/PipBoy';
import StatBox from './StatBox/StatBox';

export default function Skills() {
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
                <StatBox />
            </section>

            <section className="pipboy">
                <PipBoy />
            </section>
        </div>
    );
};
