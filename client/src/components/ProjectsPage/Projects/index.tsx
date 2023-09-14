import "./Projects.scss";
import { Link } from "react-router-dom";
import TechSlider from "./TechSlider/TechSlider";
import lozad from "lozad";
import { Project } from "../../../interfaces/project";
import { useTech } from "../hooks";
import { ProjectCard } from "./project-card";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  projects: Project[];
  isMobile: boolean;
  isLoading: boolean;
  onTechChange: (techName: string) => void;
  onSizeSearch: (sizeName: string) => void;
  techSearch: string[];
  sizeSearch: string[];
}

export function Projects({
  projects,
  isMobile,
  isLoading,
  techSearch,
  sizeSearch,
  onTechChange,
  onSizeSearch,
}: ProjectsProps) {
  const observer = lozad();
  observer.observe();
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
    <div className="projectList">
      <div className="projectList__contentBx">
        <h3 className="projectList__title">{t("components.projects.allProjects")}</h3>
        <div className="projectList__optionBx">
          <TechSlider
            techSearch={techSearch}
            techs={techs}
            isMobile={isMobile}
            onTechChange={(techName) => onTechChange(techName)}
          />
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
        <div className="projectList__contentBx">
          <div className="projectList__layer utils--layer"></div>
          <span className="projectList__resultCount">{projects.length} projet(s) trouvé(s) !</span>
          <ul className="projectList__list">
            {projects.map((project) => (
              <li key={project.name} className="projectList__project">
                <Link className="projectList__project-link" to={`/projects/${project.name}`}>
                  <ProjectCard isLoading={isLoading} project={project} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
