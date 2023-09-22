import { Link } from "react-router-dom";
import { Project } from "../../../interfaces/project";
import { useTranslation } from "react-i18next";
import cross from "../../../assets/cross.svg";

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { t } = useTranslation();

  const showMore = (e) => {
    const itemBx = e.currentTarget.parentNode;
    const title = itemBx.childNodes[0];
    const content = itemBx.childNodes[1];
    if (content.classList.contains("utils--hidden")) {
      content.classList.remove("utils--hidden");
      title.classList.add("utils--active");
    } else {
      content.classList.add("utils--hidden");
      title.classList.remove("utils--active");
    }
  };

  return (
    <>
      <div className="project__descBx">
        <div className="project__desc">
          <h2 className="project__desc--subtitle">{project.desc}</h2>
          <p className="project__desc--size">{t("components.project.size", { size: project.size })}</p>
        </div>
        <div className="project__linkBx">
          <a
            className="project__githubLink"
            target="_blank"
            href={`https://github.com/KhadimRenahyMar/${project?.name}`}
            rel="noreferrer"
          >
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
            <svg
              className="project__githubLink--svg"
              xmlns="http://www.w3.org/2000/svg"
              data-xlink="http://www.w3.org/1999/xlink"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <image
                id="GitHub-Mark-Light-32px"
                width="32"
                height="32"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwOUY4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwOUU4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUqS1wAAApVJREFUeNq0l89rE1EQx3e3gVJoSPzZeNEWPKgHoa0HBak0iHiy/4C3WvDmoZ56qJ7txVsPQu8qlqqHIhRKJZceesmhioQEfxTEtsoSpdJg1u/ABJ7Pmc1m8zLwgWTmzcw3L+/te+tHUeQltONgCkyCi2AEDHLsJ6iBMlgHL8FeoqokoA2j4CloRMmtwTmj7erHBXPgCWhG6a3JNXKdCiDl1cidVbXZkJoXQRi5t5BrxwoY71FzU8S4JuAIqFkJ2+BFSlEh525b/hr3+k/AklDkNsf6wTT4yv46KIMNpsy+iMdMc47HNWxbsgVcUn7FmLAzzoFAWDsBx+wVP6bUpp5ewI+DOeUx0Wd9D8F70BTGNjkWtqnhmT1JQAHcUgZd8Lo3rQb1LAT8eJVUfgGvHQigGp+V2Z0iAUUl8QH47kAA1XioxIo+bRN8OG8F/oBjwv+Z1nJgX5jpdzQDw0LCjsPmrcW7I/iHScCAEDj03FtD8A0EyuChHgg4KTlJQF3wZ7WELppnBX+dBFSVpJsOBWi1qiRgSwnOgoyD5hmuJdkWCVhTgnTvW3AgYIFrSbZGh0UW/Io5Vp+DQoK7o80pztWMemZbgxeNwCNwDbw1fIfgGZjhU6xPaJgBV8BdsMw5cbZoHsenwYFxkZzl83xTSKTiviCAfCsJLysH3POfC8m8NegyGAGfLP/VmGmfSChgXroR0RSWjEFv2J/nG84cuKFMf4sTCZqXuJd4KaXFVjEG3+tw4eXbNK/YC9oXXs3O8NY8y99L4BXY5cvLY/Bb2VZ58EOJVcB18DHJq9lRsKr8inyKGVjlmh29mtHs3AHfuhCwy1vXT/Nu2GKQt+UHsGdctyX6eQyNvc+5sfX9Dl7Pe2J/BRgAl2CpwmrsHR0AAAAASUVORK5CYII="
              />
            </svg>
          </a>
          {project.url ? (
            <Link to={project.url} className="project__playBx" target="_blank">
              <svg
                className="project__playBx--btn"
                xmlns="http://www.w3.org/2000/svg"
                width="44.056"
                height="50.827"
                viewBox="0 0 44.056 50.827"
              >
                <path
                  className="project__playBx--path"
                  d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
              <svg className="project__playBx--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  className="project__playBx--icon"
                  d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
                />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
      <div className="project__tagBx">
        <div className="project__techSkills">
          <div className="project__techSkills-contentBx project__techSkills-contentBx">
            <h4 className="project__techSkills-title" onClick={showMore}>
              {t("components.project.accordion.techs")}
            </h4>
            {project.techs.length > 0 ? (
              <ul className="project__techSkills-list utils--hidden">
                {project?.techs.map((tech) => (
                  <li key={`${project.name}/${tech.name}`} className="project__techSkills-list-item">
                    <ul className="project__techSkills-list">
                      <li key={tech.name} className="project__techSkills-list__item">
                        {tech.name}
                      </li>
                      {tech.packages.map((packg) => (
                        <li key={packg} className="project__techSkills-list__item">
                          {packg}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="project__techSkills-list utils--hidden">
                <p className="project__techSkills-list-item">{t("components.project.noTechs")}</p>
              </div>
            )}
          </div>
          <div className="project__techSkills-contentBx">
            <h4 className="project__techSkills-title" onClick={showMore}>
              {t("components.project.accordion.components")}
            </h4>
            {project.components.length > 0 ? (
              <ul className="project__techSkills-list utils--hidden">
                {project?.components.map((component) => (
                  <li key={component} className="project__techSkills-list-item">
                    {component}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="project__techSkills-list utils--hidden">
                <p className="project__techSkills-list-item">{t("components.project.noComponents")}</p>
              </div>
            )}
          </div>
          <div className="project__techSkills-contentBx">
            <h4 className="project__techSkills-title" onClick={showMore}>
              {t("components.project.accordion.designPattern")}
            </h4>

            {project.designPatterns.length > 0 ? (
              <ul className="project__techSkills-list utils--hidden">
                {project?.designPatterns.map((designPattern) => (
                  <li key={designPattern} className="project__techSkills-list-item">
                    {designPattern}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="project__techSkills-list utils--hidden">
                <p className="project__techSkills-list-item">{t("components.project.noDesignPattern")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
