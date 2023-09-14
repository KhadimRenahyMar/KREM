import "./ProjectPage.scss";
import { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "../NotFoundPage/NotFoundPage";
import { ProjectSlider } from "./ProjectSlider/ProjectSlider";
import { useProject } from "../LandingPage/hooks";
import { ProjectDetails } from "./project-details";
import { ProjectStory } from "./project-story";

export default function Project() {
  const { getProject } = useProject();
  const projectName = useParams().slug;
  const splide = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const title = useRef<HTMLDivElement | null>(null);

  if (!projectName) {
    return null;
  }

  useEffect(() => {
    if (splide.current !== null) {
      setWidth(splide.current.offsetWidth);
    }
  }, [splide.current]);

  const projectCall = getProject(projectName, width);
  const project = projectCall.data;

  const scroll = () => {
    if (title.current !== null) {
      window.scrollTo(0, title.current.offsetTop - 100);
    }
  };

  if (projectCall.status === "error") {
    return <NotFound />;
  }

  return (
    <div>
      <div className="page page__projectPage projectPage" ref={splide}>
        <div className="projectPage__contentBx">
          <section className="project__intro">
            <div className="project__titleBx" ref={title}>
              {project ? <h3 className="project__title">{project.name}</h3> : null}
              <Link to="/projects" className="project__githubLink">
                <svg
                  className="utils__hive"
                  xmlns="http://www.w3.org/2000/svg"
                  width="217.163"
                  height="250.546"
                  viewBox="0 0 217.163 250.546"
                >
                  <path
                    id="Tracé_178"
                    data-name="Tracé 178"
                    d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
                  />
                </svg>
                <svg className="project__linkBx--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    className="project__linkBx--path"
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  />
                </svg>
              </Link>
            </div>
            <ProjectSlider project={project} className="project__slider" isLoading={projectCall.isLoading} />
            {project ? <ProjectDetails project={project} /> : null}
          </section>
          {project ? <ProjectStory story={project.text} scroll={scroll} /> : null}
        </div>
      </div>
    </div>
  );
}
