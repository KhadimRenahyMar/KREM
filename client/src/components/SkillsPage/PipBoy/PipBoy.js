import './PipBoy.scss';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import loadable from '@loadable/component';
import { API_URL } from '../../App/App';
const SkillScreen = loadable(() => import('./SkillScreen/SkillScreen'));
const ExpScreen = loadable(() => import('./ExpScreen/ExpScreen'));
const AboutMeScreen = loadable(() => import('./AboutMeScreen/AboutMeScreen'));
const ReviewScreen = loadable(() => import('./reviewScreen/reviewScreen'));

import { cld } from '../../App/App';
import { dpr, format, quality } from "@cloudinary/url-gen/actions/delivery";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { auto } from "@cloudinary/url-gen/qualifiers/format";
import { autoBest } from "@cloudinary/url-gen/qualifiers/quality";

export default function PipBoy() {
    const [projects, setProjects] = useState([]);
    const [techs, setTechs] = useState([]);
    const [components, setComponents] = useState([]);
    const [designPatterns, setDesignPatterns] = useState([]);
    const screen = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const parentWidth = screen.current.parentElement.clientWidth;
        setWidth(parentWidth);
        const localProjects = JSON.parse(localStorage.getItem('projects'));
        if (localProjects === null) {
            const projectList = [];
            let fetchProjects = async () => {
                const data = await axios.get(`${API_URL}/projects/all`);
                const result = await data.data;
                for (let project of result) {
                    if (project.coverURL !== undefined) {
                        const responsiveURL = cld.image(`${project.coverURL.path}`)
                            // .resize(scale().width(width))
                            .setVersion(project.coverURL.version)
                            .delivery(format(auto()))
                            .delivery(dpr(2.0))
                            .delivery(quality(autoBest()));
                        project.coverURL.url = responsiveURL.toURL();
                    }
                    else {
                        project.coverURL = 'undefined';
                    }
                }
                projectList.push(result);
                setProjects(result);
                localStorage.setItem('projects', JSON.stringify(result));
            }
            fetchProjects();
            console.log(projectList)
        }
        else {
            setProjects(localProjects);
        }
    }, []);

    useEffect(() => {
        if(projects !== null && projects.length > 0){
            const localTechs = JSON.parse(localStorage.getItem('techs'));
            if (localTechs === null) {
                if (projects?.length > 0) {
                    const fetchTechPackage = async () => {
                        const data = await axios.post(`${API_URL}/techs`, {
                            data: projects,
                        });
                        const result = await data.data;
                        localStorage.setItem('techs', JSON.stringify(result));
                        setTechs(result);
                    };
                    fetchTechPackage();
                }
            }
            else {
                setTechs(localTechs);
            }

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
                screen.width = screen.clientWidth;
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
                    <ExpScreen projects={projects} />
                </div>

                <div className="pipboy__screen" id="reviews">
                    <ReviewScreen />
                </div>

                <div className="pipboy__screen" id="aboutMe" ref={screen}>
                    <AboutMeScreen width={width} />
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