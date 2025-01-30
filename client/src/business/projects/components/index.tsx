import "./Projects.scss";
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
// import lozad from "lozad";
import { Project } from "../../../interfaces/project";
import { useTech } from "../../../hooks/projects";
import { ProjectCard } from "./project-card";
import { useTranslation } from "react-i18next";
import Scrollbars from "react-custom-scrollbars-2";

interface ProjectsProps {
  projects: Project[];
  isLoading: boolean;
  onTechChange: (techName: string) => void;
  onSizeSearch: (sizeName: string) => void;
  techSearch: string[];
  sizeSearch: string[];
}

export function Projects({ projects, isLoading, techSearch, sizeSearch, onTechChange, onSizeSearch }: ProjectsProps) {
  // const observer = lozad();
  // observer.observe();
  const { t } = useTranslation();

  const projectSizes = {
    XS: t("components.projects.projectSizes.xs"),
    S: t("components.projects.projectSizes.s"),
    M: t("components.projects.projectSizes.m"),
    L: t("components.projects.projectSizes.l"),
    XL: t("components.projects.projectSizes.xl"),
  };

  const sizes = Object.entries(projectSizes).map((size) => ({ label: size[0], sublabel: size[1] }));

  const { getTechs } = useTech();
  const techs = getTechs(projects).data;

  if (!techs) {
    return null;
  }

  return (
    <div className="drop-shadow-sm overflow-hidden rounded-xl">
      <div className=" ">
        <h3 className="projectList__title">{t("components.projects.allProjects")}</h3>
        <div>
          <TechSlider techSearch={techSearch} techs={techs} onTechChange={(techName) => onTechChange(techName)} />
          <ul className="projectList__legend">
            {sizes.map((size) => {
              const sizeIsSelected = sizeSearch.includes(size.label);
              return (
                <li
                  key={size.label}
                  className={!sizeIsSelected ? "projectList__sizes" : "projectList__sizes active"}
                  onClick={() => onSizeSearch(size.label)}
                >
                  <strong className="projectList__sizes--size">{size.label}</strong>
                  {window.innerWidth > 600 ? <p className="projectList__sizes--desc">{size.sublabel}</p> : null}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative flex flex-col bg-white/50 text-lg">
          <span className="my-1 mx-2 text-white font-subHeading">{projects.length} projet(s) trouvé(s) !</span>
          <Scrollbars
            className="utils__scrollbar h-[70vh]"
            renderTrackVertical={(props) => <div {...props} className="utils__scrollbar--track-vertical" />}
            renderThumbVertical={(props) => <div {...props} className="utils__scrollbar--thumb-vertical" />}
            renderView={(props) => <div {...props} className="utils__scrollbar--view" />}
          >
            <ul className="projectList__list ">
              {projects.map((project) => (
                <li key={project.name} className="projectList__project">
                  <Link className="projectList__project-link" to={`/projects/${project.name}`}>
                    <ProjectCard isLoading={isLoading} project={project} />
                  </Link>
                </li>
              ))}
            </ul>
          </Scrollbars>
        </div>
      </div>
    </div>
  );
}
