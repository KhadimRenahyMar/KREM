import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './ProjectPage.scss';
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import ReactMarkdown from 'react-markdown';

export default function Project() {
    const [project, setProject] = useState(null);
    const [components, setComponents] = useState([]);
    const [packages, setPackages] = useState([]);
    const [designPatterns, setDesignPatterns] = useState([]);

    const projectName = useParams().slug;

    useEffect(() => {
        async function setUpProject() {
            const projects = JSON.parse(localStorage.getItem('projects'));
            console.log(projects);
            if (projects === null) {
                const fetchProjects = await axios.get('/projects/all');
                localStorage.setItem('projects', JSON.stringify(fetchProjects.data));
                console.log(projects);
            }
            const wantedProject = projects.find(project => project.name.toLowerCase() === projectName.toLowerCase());
            const currentProject = await axios.post(`/projects/${wantedProject.name}`, {
                body: wantedProject,
            });
            console.log(currentProject.data);
            setProject(currentProject.data);
        };
        setUpProject();
    }, []);

    // console.log(project);
    return (
        <div className="page page__projectPage projectPage">
            <section className="project__intro">
                <div className="project__titleBx">
                    <h3 className="project__title">{project && project.name}</h3>
                    <svg className="project__githubLink" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
                        <image id="GitHub-Mark-Light-32px" width="32" height="32" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII=" />
                    </svg>
                </div>
                <ProjectSlider project={project} />
                <div className="project__descBx">
                    <p className="project__desc">{project && project.desc}</p>
                </div>
            </section>
            <section className="project__techDesc">
                <ul className="project__techs">
                    {
                        project && project.techs.map((tech) => (
                            <li className="project__tech-item">{tech.shortname}</li>
                        ))
                    }
                    {
                        packages.length !== 0 && packages.map((tech) => (
                            <li className="project__tech-item">{tech.name}</li>
                        ))
                    }
                </ul>
                <div className="project__tags">
                    <h4 className="project__tags-title">Composants</h4>
                    <ul className="project__tag-list">
                        {
                            components.map((component) => (
                                <li className="project__tag-list-item">{component.name}</li>
                            ))
                        }
                    </ul>
                    <h4 className="project__tags-title">Patron de conception</h4>
                    <ul className="project__tag-list">
                        {
                            designPatterns.map((designPattern) => (
                                <li className="project__tag-list-item">{designPattern.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="project__story">
                <div className="story">
                    {
                        project && (
                            <ReactMarkdown>{project.text}</ReactMarkdown>
                        )
                    }
                    {/* // TODO import text from md */}
                    <div className="story__about">

                    </div>
                    {<div className="story__text">

                    </div>
                    }
                    <div className="story__conclusion">

                    </div>
                </div>
            </section>
            {/* // TODO scroll up */}
            <a href='#' className="upBtn">UP !</a>
        </div>
    );
};