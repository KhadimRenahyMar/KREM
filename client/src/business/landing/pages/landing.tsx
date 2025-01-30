import "../LandingPage.scss";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useProject } from "../../../hooks/project";
import { Hero } from "../components/hero";
import { Projects } from "src/business/projects/components";
import { StatBox } from "src/business/skills/components/StatBox/StatBox";
import { PipBoy } from "src/business/skills/components/PipBoy/PipBoy";
import { useStats } from "src/business/skills/components/PipBoy/hooks";
import { ProfileCard } from "../components/profile-card";

export function LandingPage() {
  const splide = useRef<HTMLElement>(null);
  const { getProjects } = useProject();
  const [width, setWidth] = useState(0);
  const { t } = useTranslation();

  const { getStats } = useStats();
  const stats = getStats().data;
  const projects = getProjects(width).data;

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("coucou", splide.current);
    if (splide.current !== null) {
      setWidth(splide.current.offsetWidth);
    }
  }, [splide]);

  const [techSearch, setTechSearch] = useState<string[]>([]);
  const [sizeSearch, setSizeSearch] = useState<string[]>([]);

  if (!projects) {
    return null;
  }

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
  // const splideOptions: SplideOptions = {
  //   hasTrack: false,
  //   className: "splide",
  //   tag: "section",
  //   ariaLabel: "landingSlider",
  //   options: {
  //     rewind: true,
  //     type: "loop",
  //     autoplay: true,
  //     pauseOnHover: false,
  //     perPage: 1,
  //     drag: true,
  //     lazyLoad: "nearby",
  //   },
  // };

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

  return (
    <>
      <section className="relative h-[80vh] z-10">
        <Hero splide={splide.current} />
      </section>

      <section className="h-full sm:py-[2rem] bg-black/50 backdrop-blur-sm min-h-[100vh] ">
        <div className="sm:w-[50%] sm:m-auto text-customwhite">
          <StatBox stats={stats} />
        </div>
        <div className="sm:w-[50%] m-auto overflow-hidden rounded-xl">
          <PipBoy projects={projects} />
        </div>

        <div className="sm:w-[50%] m-auto ">
          <Projects
            projects={sortedProjects()}
            isLoading={isLoading}
            onTechChange={handleTechChange}
            onSizeSearch={handleSizeSearch}
            techSearch={techSearch}
            sizeSearch={sizeSearch}
          />
        </div>
      </section>
      {/* <section className="bg-white/50 backdrop-blur-sm p-2 ">
        <div className="sm:w-[50%] m-auto flex justify-between">
          <ProfileCard />
        </div>
      </section> */}

      {/* <section className="bg-white/50 backdrop-blur-sm min-h-[100vh]  ">
        <div className="sm:w-[50%] rounded-xl bg-center-bottom bg-cover" style={{ backgroundImage: `url(${pic})` }} />
      </section> */}
    </>
  );
}
