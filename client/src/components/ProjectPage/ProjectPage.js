import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import './ProjectPage.scss';
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import ReactMarkdown from 'react-markdown';
import NotFound from "../NotFoundPage/NotFoundPage";

export default function Project() {
    const location = useLocation();
    const data = location.state;

    const projectName = useParams().slug;
    const [project, setProject] = useState(null);
    const [projectFound, setProjectFound] = useState(true);
    let fetchCount = 0;

    useEffect(() => {
        if (data !== null) {
            if (data.project !== null) {
                setProject(data.project);
            }
        }

        if (project === null) {
            let projects = JSON.parse(localStorage.getItem('projects'));
            const fetchProject = async () => {
                if (projects === null) {
                    if (fetchCount === 0) {
                        fetchCount = 1;
                        const fetchProjects = await axios.get('/projects/all');
                        projects = fetchProjects.data;
                        fetchCount = 0;
                        localStorage.setItem('projects', JSON.stringify(fetchProjects.data));
                    }
                }
                const wantedProject = projects.find(project => project.name.toLowerCase() === projectName.toLowerCase());
                
                if (wantedProject === undefined) {
                    setProjectFound(false);
                }
                if (wantedProject !== undefined) {
                    if (fetchCount === 0) {
                        fetchCount = 1;
                        const currentProject = await axios.post(`/projects/${wantedProject.name}`, {
                            body: wantedProject,
                        });
                        setProject(currentProject.data);
                        fetchCount = 0;
                    }
                }
            }
            fetchProject();
        }
    }, []);
    
    console.log(project);
    return (
        <div>
            {
                projectFound ? (
                    <div className="page page__projectPage projectPage">
                        {
                            project !== null && (
                                <div>
                                    <section className="project__intro" id='#up'>
                                        <div className="project__titleBx">
                                            <h3 className="project__title">{project && project.name}</h3>
                                            <a className="project__githubLink" target="_blank" href={`https://github.com/KhadimRenahyMar/${project?.name}`}>
                                                <svg className="project__githubLink--svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                                                    <image id="GitHub-Mark-Light-32px" width="32" height="32" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=" />
                                                </svg>
                                            </a>
                                        </div>
                                        <ProjectSlider project={project} className='project__slider' />
                                        <div className="project__descBx">
                                            <p className="project__desc">{project && project.desc}</p>
                                            <div className="project__playBx">
                                                <svg className='project__playBx--btn' xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                                                    <path className="project__playBx--path" d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2" />
                                                </svg>
                                            </div>
                                        </div>
                                        {/* <div className="project__tagBx">
                                            <ul className="project__techs">
                                                {
                                                    project?.techs.map((tech) => (
                                                        <li key={tech.name} className="project__tech-item">{tech}</li>
                                                    ))
                                                }
                                                {
                                                    project?.packages.length !== 0 && project?.packages.map((tech) => (
                                                        <li key={tech.name} className="project__tech-item">{tech.name}</li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="project__packages">
                                                <h4 className="project__packages-title">Composants</h4>
                                                <ul className="project__packages-list">
                                                    {
                                                        components.map((component) => (
                                                            <li key={component.name} className="project__packages-list-item">{component.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                                <h4 className="project__desPatt-title">Patron de conception</h4>
                                                <ul className="project__desPatt-list">
                                                    {
                                                        designPatterns.map((designPattern) => (
                                                            <li key={designPattern.name} className="project__desPatt-list-item">{designPattern.name}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div> */}
                                    </section>
                                    <section className="project__story">
                                        <div className="story">
                                            {
                                                project.text !== null ? (
                                                    <ReactMarkdown>{project.text}</ReactMarkdown>
                                                ) : (<p>Désolé, ce projet n'a pas encore de récit détaillé, revenez plus tard !</p>)
                                            }
                                        </div>
                                    </section>
                                    {/* // TODO scroll up */}
                                    <a href='#up' className="utils--upBtn">UP !</a>
                                </div>
                            )
                        }
                    </div>
                ) : (<NotFound />)
            }
        </div>
    );
};