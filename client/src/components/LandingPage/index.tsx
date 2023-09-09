import "./LandingPage.scss";
import { useEffect, useRef, useState } from "react";
import { Project } from "../../interfaces/project";
import { useProject } from "./hooks";
import { LandingHeader } from "./landing-header";
import { OptionBar } from "./option-bar";
import { useTranslation } from "react-i18next";
import { SplideOptions } from "../../interfaces/splide";
import { Carroussel } from "../../ui/carroussel/carrousel";

export default function Landing() {
  const splide = useRef<HTMLElement>(null);
  const { getProjects } = useProject();
  const [width, setWidth] = useState(0);
  const { t } = useTranslation();

  const projects: Project[] = (getProjects(width).data as Project[]) || [];
  const lastProjects: Project[] = (projects || []).slice(0, 5);

  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const splideOptions: SplideOptions = {
    hasTrack: false,
    className: "splide",
    tag: "section",
    ariaLabel: "landingSlider",
    options: {
      rewind: true,
      type: "loop",
      autoplay: true,
      pauseOnHover: false,
      perPage: 1,
      drag: true,
      lazyLoad: "nearby",
    },
  };

  return (
    <div className="page page__landingPage landingPage">
      <section className="landingPage__intro">
        <LandingHeader splide={splide.current} />
      </section>
      <section className="slides" ref={splide}>
        <div className="slides__titleBx">
          <h2 className="slides__title">{t("pages.landing.lastProjects")}</h2>
        </div>
        <Carroussel
          projects={lastProjects}
          splide={splide.current}
          isLoading={isLoading}
          splideOptions={splideOptions}
        />
      </section>
      <section className="optionBar">
        <OptionBar />
      </section>
    </div>
  );
}
