import "./PipBoy.scss";
import { useState, useEffect, useRef } from "react";
import { useTech } from "../../../../hooks/projects";
import { Screen } from "../screen";
import { Project } from "../../../../interfaces/project";
import { useTranslation } from "react-i18next";

interface PipBoyProps {
  projects: Project[];
}

export function PipBoy({ projects }: PipBoyProps) {
  const { t } = useTranslation();
  const screen = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  if (!projects) {
    return null;
  }

  const { getTechs } = useTech();
  const techs = getTechs(projects).data;
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    if (screen.current !== null && screen.current.parentElement !== null && width === 0) {
      const parentWidth = screen.current.parentElement.clientWidth;
      setWidth(parentWidth);
    }
  }, [screen.current, techs]);

  if (!techs) {
    return null;
  }

  const components = projects.reduce((acc: string[], project) => {
    if (!project.components) {
      return acc;
    }
    for (const component of project.components) {
      if (!acc.includes(component)) {
        acc = [...acc, component];
      }
    }
    return acc;
  }, []);

  const designPatterns = projects.reduce((acc: string[], project) => {
    if (!project.designPatterns) {
      return acc;
    }

    for (const designPattern of project.designPatterns) {
      if (!acc.includes(designPattern)) {
        acc = [...acc, designPattern];
      }
    }
    return acc;
  }, []);

  const showScreen = (i: number) => {
    return setActiveScreen(i);
  };
  console.log("active", activeScreen);
  return (
    <div className="pipboy__container">
      <div className="pipboy__btns pipboy__btns--up">
        <button
          className="pipboy__button active"
          // id="skills"
          onClick={(e) => {
            e.preventDefault();
            showScreen(0);
          }}
        >
          {t("components.pipBoy.screens.skills")}
        </button>
        <button
          className="pipboy__button"
          // id="experience"
          onClick={(e) => {
            e.preventDefault();
            showScreen(1);
          }}
        >
          {t("components.pipBoy.screens.career")}
        </button>
      </div>
      <div ref={screen}>
        <Screen
          projects={projects}
          techs={techs}
          components={components}
          designPatterns={designPatterns}
          activeScreen={activeScreen}
          screen={screen.current}
          width={width}
        />
      </div>
      <div className="pipboy__btns pipboy__btns--down">
        <button
          className="pipboy__button"
          // id="reviews"
          onClick={(e) => {
            e.preventDefault();
            showScreen(2);
          }}
        >
          {t("components.pipBoy.screens.reviews")}
        </button>
        <button
          className="pipboy__button"
          // id="aboutMe"
          onClick={(e) => {
            e.preventDefault();
            showScreen(3);
          }}
        >
          {t("components.pipBoy.screens.whoAmI")}
        </button>
      </div>
    </div>
  );
}
