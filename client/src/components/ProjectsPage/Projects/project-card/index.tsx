import { Project } from "../../../../interfaces/project";
import loadingImg from "../../../../assets/bg/loading2.webp";
import noScreenshot from "../../../../assets/bg/noScreenshots2.webp";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  isLoading: boolean;
  project: Project;
}

export function ProjectCard({ isLoading, project }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <>
      {isLoading ? (
        <div className="projectList__project-imgBx">
          <img rel="preload" src={loadingImg} className="slide__cover" alt={t("common.images.loading")} />
        </div>
      ) : (
        <div className="projectList__project-imgBx">
          {project?.coverURL ? (
            <img
              rel="preload"
              data-fetchpriority="high"
              src={project.coverURL.url}
              className="slide__cover lozad"
              alt={t("common.images.loading", { projectName: project.name })}
            />
          ) : (
            <img src={noScreenshot} className="slide__cover" alt={`le project ${project.name} n'a pas d'aperçu`} />
          )}
          <div className="projectList__project-sizeStampBx">
            <p
              className="projectList__project-sizeStampBx--size"
              id="_"
              style={{ fontFamily: "Inconsolata-Light, Inconsolata", fontWeight: "300" }}
              data-name="&lt;"
            >
              <span>{project.size}</span>
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
              <g id="Groupe_792" data-name="Groupe 792">
                <path
                  className="projectList__project-sizeStampBx--path"
                  id="Tracé_437"
                  data-name="Tracé 437"
                  d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
        </div>
      )}
      <div className="projectList__project-textBx">
        <h3 className="projectList__project-title">{project.name}</h3>
        <div className="projectList__project--techBx">
          {project?.descTechs?.length > 0
            ? project?.descTechs.map((tech) => (
                <span key={tech} className="projectList__project--tech">
                  {tech}
                </span>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
