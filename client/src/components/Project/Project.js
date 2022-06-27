import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

export default function Project(){
    const [project, setProject] = useState(null);
    const [components, setComponents] = useState([]);
    const [packages, setPackages] = useState([]);
    const [designPatterns, setDesignPatterns] = useState([]);

    const projectId = Number(useParams().slug);
    
    useEffect(() =>{
        const fetchProject = async () => {
            const data = await axios.get(`/projects/${projectId}`);
            const result = await data.data;
            setProject(...result);
        };
        fetchProject();
        // console.log(project);
    }, []);

    useEffect(()=> {
        const components = [];
        const designPatterns = [];
        const packages = [];
    
        const sortProjectTags = async () => {
            project.tags.map((tag)=> {
                switch (tag.type) {
                    case 'component':
                        components.push(tag);
                        break;
                    case 'design pattern':
                        designPatterns.push(tag);
                        break;
                    case 'package':
                        packages.push(tag);
                        break;
                    default:
                        break;
                    }
                })
            }
            sortProjectTags();
            setComponents(components);
            setPackages(packages);
            setDesignPatterns(designPatterns);
    }, [project]);
    
    console.log(project);
    console.log(components);
    return (
        <div className="project">
            <section className="project__intro">
                <div className="slider__titleBx">
                    <h2 className="project__title">{project && project.title}</h2>
                    {/* svg */}
                </div>
                <div className="slider">
                </div>
                <div className="project__descBx">
                    <p className="project__desc"></p>
                    {/* icon */}
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
                    <div className="story__about">
                        
                    </div>
                    {<div className="story__text">

                    </div>
                    }
                    <div className="story__conclusion">

                    </div>
                </div>
            </section>
            <a href='#' className="upBtn">UP !</a>
        </div>
    );
};