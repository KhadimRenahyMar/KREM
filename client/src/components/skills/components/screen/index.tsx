import loadable from "@loadable/component";
import Scrollbars from "react-custom-scrollbars-2";
import { Project } from "../../../../interfaces/project";
import { Tech } from "../../../../interfaces/tech";

const SkillScreen = loadable(() => import("../SkillScreen"));
const ExpScreen = loadable(() => import("../ExpScreen"));
const AboutMeScreen = loadable(() => import("../AboutMeScreen"));
const ReviewScreen = loadable(() => import("../ReviewScreen"));

interface ScreenProps {
  projects: Project[];
  techs: Tech[];
  components: string[];
  designPatterns: string[];
  screen: HTMLDivElement | null;
  width: number;
}

export function Screen({ projects, techs, components, designPatterns, screen, width }: ScreenProps) {
  return (
    <div className="pipboy__screens">
      <div className="pipboy__screen visible" id="skills">
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
          <SkillScreen techs={techs} components={components} designPatterns={designPatterns} />
        </Scrollbars>
      </div>

      <div className="pipboy__screen" id="experience">
        <Scrollbars
          className="utils__scrollbar"
          autoHide
          hideTracksWhenNotNeeded
          renderTrackVertical={(props) => <div {...props} className="utils__scrollbar--track-vertical" />}
          renderThumbVertical={(props) => <div {...props} className="utils__scrollbar--thumb-vertical" />}
          renderView={(props) => <div {...props} className="utils__scrollbar--view" />}
        >
          <ExpScreen projects={projects} />
        </Scrollbars>
      </div>

      <div className="pipboy__screen" id="reviews">
        <Scrollbars
          className="utils__scrollbar"
          autoHide
          hideTracksWhenNotNeeded
          renderTrackVertical={(props) => <div {...props} className="utils__scrollbar--track-vertical" />}
          renderThumbVertical={(props) => <div {...props} className="utils__scrollbar--thumb-vertical" />}
          renderView={(props) => <div {...props} className="utils__scrollbar--view" />}
        >
          <ReviewScreen />
        </Scrollbars>
      </div>

      <div className="pipboy__screen" id="aboutMe">
        <Scrollbars
          className="utils__scrollbar"
          autoHide
          hideTracksWhenNotNeeded
          renderTrackVertical={(props) => <div {...props} className="utils__scrollbar--track-vertical" />}
          renderThumbVertical={(props) => <div {...props} className="utils__scrollbar--thumb-vertical" />}
          renderView={(props) => <div {...props} className="utils__scrollbar--view" />}
        >
          <AboutMeScreen width={width} />
        </Scrollbars>
      </div>
    </div>
  );
}
