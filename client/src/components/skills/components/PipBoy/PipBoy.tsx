import "./PipBoy.scss";
import { useState, useEffect, useRef } from "react";
import { useTech } from "../../../ProjectsPage/hooks";
import { Screen } from "../screen";
import { Project } from "../../../../interfaces/project";

interface PipBoyProps {
  projects: Project[];
}

export function PipBoy({ projects }: PipBoyProps) {
  const screen = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  if (!projects) {
    return null;
  }

  const { getTechs } = useTech();
  const techs = getTechs(projects).data;

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

  const showScreen = (e) => {
    const buttons = document.querySelectorAll(".pipboy__button");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    const button = e.currentTarget;
    button.classList.add("active");
    const { id } = button;

    const screens = e.currentTarget.parentNode.parentNode.childNodes[1].childNodes[0].childNodes;

    for (const screen of screens) {
      if (screen.classList.contains("visible")) {
        screen.classList.remove("visible");
      }
      if (screen.id === id) {
        screen.classList.add("visible");
        screen.width = screen.clientWidth;
      }
    }
  };

  return (
    <div className="pipboy__container">
      <div className="pipboy__btns pipboy__btns--up">
        <button className="pipboy__button active" id="skills" onClick={showScreen}>
          Compétences
        </button>
        <button className="pipboy__button" id="experience" onClick={showScreen}>
          Parcours
        </button>
      </div>
      <div ref={screen}>
        <Screen
          projects={projects}
          techs={techs}
          components={components}
          designPatterns={designPatterns}
          screen={screen.current}
          width={width}
        />
      </div>
      <div className="pipboy__btns pipboy__btns--down">
        <button className="pipboy__button" id="reviews" onClick={showScreen}>
          Reviews
        </button>
        <button className="pipboy__button" id="aboutMe" onClick={showScreen}>
          Qui suis-je ?
        </button>
      </div>
    </div>
  );
}
