import './SkillsPage.scss';
import PipBoy from './PipBoy/PipBoy';
import StatBox from './StatBox/StatBox';
import pic from '../../assets/photos/22052022-9-2.webp';

export default function Skills() {
    return (
        <div className="page page__skillsPage skillsPage">
            <section className="intro">
                <div className="intro__textBx">
                    <h2 className="intro__title">Khadim, 26 ans</h2>
                    <div className="intro__desc">
                        <span className="intro__desc--job">Développeur Fullstack JS</span>
                        <em className="intro__moto">"Ad astra, per aspera"</em>
                    </div>
                </div>
                <div className="intro__picture" style={{backgroundImage: `url(${pic})`}}>
                <div className="intro__picture--dot" cx="6" cy="6" r="4"></div>
                </div>
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
