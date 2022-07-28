import './PipBoy.scss';
import SkillScreen from './SkillScreen/SkillScreen';
import ExpScreen from './ExpScreen/ExpScreen';
import ReviewScreen from './reviewScreen/reviewScreen';
import AboutMeScreen from './AboutMeScreen/AboutMeScreen';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PipBoy() {

    const [projects, setProjects] = useState([]);
    const [techs, setTechs] = useState([]);
    const [components, setComponents] = useState([]);
    const [designPatterns, setDesignPatterns] = useState([]);
    let fetchCount = 0;
    useEffect(() => {
        let localProjects = JSON.parse(localStorage.getItem('projects'));

        if (localProjects === null) {
            let fetchProjects = async () => {
                const data = await axios.get('/projects/all');
                const result = await data.data;
                setProjects(result);
                localStorage.setItem('projects', JSON.stringify(data.data));
            }
            localProjects = fetchProjects();
        }
        else {
            setProjects(localProjects);
        }
    }, []);

    useEffect(() => {
        if (techs.length === 0) {
            if (projects.length > 0) {
                const fetchedTechs = [];
                const fetchTechPackage = async () => {
                    fetchCount = 1;
                    const data = await axios.post('/techs', {
                        data: projects,
                    });
                    const result = await data.data;
                    fetchedTechs.push(...result);
                    setTechs(result);
                    fetchCount = 0;
                };
                fetchTechPackage();

                const componentList = [];
                const designPatternsList = [];

                for (const project of projects) {
                    for (const component of project.components) {
                        if (!componentList.includes(component)) {
                            componentList.push(component);
                        }
                    }
                    for (const designPattern of project.designPatterns) {
                        if (!designPatternsList.includes(designPattern)) {
                            designPatternsList.push(designPattern);
                        }
                    }
                }
                setDesignPatterns(designPatternsList);
                setComponents(componentList);
            }
        }
    }, [projects]);

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
                    <SkillScreen projectCount={projects.length} techs={techs} components={components} designPatterns={designPatterns} />
                </div>

                <div className="pipboy__screen" id="experience">
                    <ExpScreen projects={projects}/>
                </div>

                <div className="pipboy__screen" id="reviews">
                    <ReviewScreen />
                </div>

                <div className="pipboy__screen" id="aboutMe">
                    <AboutMeScreen />
                </div>
                {/* // TODO scroll bar */}
            </div>
            <div className="pipboy__btns pipboy__btns--down">
                <button className="pipboy__button" id="reviews" onClick={showScreen}>Reviews</button>
                <button className="pipboy__button" id="aboutMe" onClick={showScreen}>Qui suis-je ?</button>
            </div>
        </div>
    );
}