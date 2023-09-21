import "./ProjectsPage.scss";
import { useState, useEffect, useRef } from "react";
import { Projects } from "./Projects";
import lozad from "lozad";
import { Project } from "../../interfaces/project";
import { useProject } from "../LandingPage/hooks";
import { SplideOptions } from "../../interfaces/splide";
import { Carroussel } from "../../ui/carroussel/carrousel";
import { UpButton } from "../../ui/up-button";
import { useTranslation } from "react-i18next";

export default function ProjectPage({ isMobile }) {
  const observer = lozad();
  observer.observe();
  const { t } = useTranslation();

  const { getProjects } = useProject();
  const [width, setWidth] = useState(0);
  const projects: Project[] = (getProjects(width).data as Project[]) || [];
  const lastProjects: Project[] = (projects || []).slice(0, 5);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const splide = useRef<HTMLElement>(null);

  useEffect(() => {
    if (splide.current !== null) {
      setWidth(splide.current.offsetWidth);
    }
  }, [splide]);

  useEffect(() => {
    setIsLoading(false);
  }, [projects]);

  if (!projects || !lastProjects) {
    return null;
  }

  const [techSearch, setTechSearch] = useState<string[]>([]);
  const [sizeSearch, setSizeSearch] = useState<string[]>([]);

  const sortedProjects = () => {
    return projects.filter((project) => {
      const projectHasSize = sizeSearch.includes(project.size) || sizeSearch.length === 0;
      const projectHasTechs =
        techSearch.every((techName) => !!project.techs.find((tech) => tech.name === techName)) ||
        techSearch.length === 0;
      if (projectHasSize && projectHasTechs) {
        return project;
      }
    });
  };

  const handleTechChange = (techName: string) => {
    if (!techSearch.includes(techName)) {
      setTechSearch([...techSearch, techName]);
      return;
    }
    const updatedTechSearch = techSearch.filter((tech) => tech !== techName);
    setTechSearch(updatedTechSearch);
  };

  const handleSizeSearch = (sizeName: string) => {
    if (!sizeSearch.includes(sizeName)) {
      setSizeSearch([...sizeSearch, sizeName]);
      return;
    }
    const updatedSizeSearch = sizeSearch.filter((size) => size !== sizeName);
    setSizeSearch(updatedSizeSearch);
  };

  const splideOptions: SplideOptions = {
    hasTrack: false,
    className: "splide",
    tag: "section",
    ariaLabel: "projectsSlider",
    options: {
      rewind: true,
      type: "loop",
      autoplay: true,
      pauseOnHover: true,
      pauseOnFocus: true,
      perPage: 1,
      drag: true,
    },
  };

  return (
    <div className="page page__projectsPage projectsPage">
      <section className="projectsPage__slides" ref={splide}>
        <h2 className="projectsPage__slides__title" id="splide">
          {t("pages.projects.lastProjects")}
        </h2>
        <Carroussel
          projects={lastProjects}
          splide={splide.current}
          isLoading={isLoading}
          splideOptions={splideOptions}
        />
      </section>
      <section className="projects__projectBx">
        <Projects
          projects={sortedProjects()}
          isMobile={isMobile}
          isLoading={isLoading}
          onTechChange={handleTechChange}
          onSizeSearch={handleSizeSearch}
          techSearch={techSearch}
          sizeSearch={sizeSearch}
        />
      </section>
      <UpButton splide={splide.current} />
    </div>
  );
}
