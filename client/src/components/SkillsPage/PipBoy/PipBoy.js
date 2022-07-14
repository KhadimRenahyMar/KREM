import './PipBoy.scss';
import SkillScreen from './SkillScreen/SkillScreen';
import ExpScreen from './ExpScreen/ExpScreen';
import ChartScreen from './ChartScreen/ChartScreen';
import AboutMeScreen from './AboutMeScreen/AboutMeScreen';

export default function PipBoy() {
    const showScreen = (e) => {
        const buttons = document.querySelectorAll('.pipboy__button');
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        const button = e.currentTarget;
        button.classList.add('active');
        const id = button.id;

        const screens = e.currentTarget.parentNode.parentNode.childNodes[1].childNodes;
        screens.forEach(screen => {
            if (screen.classList.contains('visible')) {
                screen.classList.remove('visible');
            }
            if (screen.id === id) {
                screen.classList.add('visible');
                // console.log(screen);
            }
        });
    };

    return (
        <div className="pipBoy">
            <div className="pipboy__btns pipboy__btns--up">
                <button className="pipboy__button active" id="skills" onClick={showScreen}>Compétences</button>
                <button className="pipboy__button" id="experience" onClick={showScreen}>Parcours</button>
            </div>
            <div className="pipboy__screens">
                <div className="pipboy__screen visible" id="skills">
                    <SkillScreen />
                </div>
                
                <div className="pipboy__screen" id="experience">
                    <ExpScreen />
                </div>

                <div className="pipboy__screen" id="chart">
                    <ChartScreen />
                </div>

                <div className="pipboy__screen" id="aboutMe">
                    <AboutMeScreen />
                </div>
                {/* // TODO scroll bar */}
            </div>
            <div className="pipboy__btns pipboy__btns--down">
                <button className="pipboy__button" id="chart" onClick={showScreen}>Big Five</button>
                <button className="pipboy__button" id="aboutMe" onClick={showScreen}>Autres</button>
            </div>
        </div>
    );
}