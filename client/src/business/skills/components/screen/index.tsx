import { lazy } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Project } from "../../../../interfaces/project";
import { Tech } from "../../../../interfaces/tech";
import { AboutMeScreenPage } from "../AboutMeScreen";
import { ExpScreenPage } from "../ExpScreen";
import { ReviewScreenPage } from "../ReviewScreen";
import { SkillScreenPage } from "../SkillScreen";

interface ScreenProps {
  projects: Project[];
  techs: Tech[];
  components: string[];
  designPatterns: string[];
  screen: HTMLDivElement | null;
  width: number;
  activeScreen: number;
}

export function Screen({ activeScreen, projects, techs, components, designPatterns, screen, width }: ScreenProps) {
  const ActiveScreen = () => {
    switch (activeScreen) {
      case 1:
        return <ExpScreenPage projects={projects} />;
      case 2:
        return <ReviewScreenPage />;
      case 3:
        return <AboutMeScreenPage width={width} />;

      default:
        return <SkillScreenPage techs={techs} components={components} designPatterns={designPatterns} />;
    }
  };
  return (
    <div className="pipboy__screens">
      <div className="h-full w-full">
        <Scrollbars
          className="utils__scrollbar"
          autoHide
          autoHideTimeout={2000}
          autoHideDuration={1000}
          hideTracksWhenNotNeeded
          renderTrackVertical={(props) => <div {...props} className="utils__scrollbar--track-vertical" />}
          renderThumbVertical={(props) => <div {...props} className="utils__scrollbar--thumb-vertical" />}
          renderView={(props) => <div {...props} className="utils__scrollbar--view" />}
        >
          <ActiveScreen />
        </Scrollbars>
      </div>
    </div>
  );
}
