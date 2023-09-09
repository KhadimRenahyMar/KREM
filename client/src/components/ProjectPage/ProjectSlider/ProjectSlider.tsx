import "./ProjectSlider.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { useRef } from "react";
import noScreenshot from "../../../assets/bg/noScreenshots2.webp";
import loadingImg from "../../../assets/bg/loading2.webp";
import { Project } from "../../../interfaces/project";
import { Dimmer, Loader } from "semantic-ui-react";

interface ProjectSliderProps {
  project: Project | undefined;
  className: string;
  isLoading: boolean;
}

export function ProjectSlider({ project, className, isLoading }: ProjectSliderProps) {
  const slider = useRef<HTMLDivElement>(null);

  return (
    <div className={className}>
      <div ref={slider} className="projectSlider">
        <Splide
          hasTrack={false}
          className="splide"
          tag="section"
          aria-label="projectSlider"
          options={{
            rewind: true,
            type: "loop",
            autoplay: true,
            pauseOnHover: false,
            lazyLoad: true,
            perPage: 1,
            drag: true,
          }}
        >
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                  <path
                    className="splide__arrow--path"
                    id="Tracé_437"
                    data-name="Tracé 437"
                    d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z"
                    transform="translate(436.5 581.34)"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <text
                    className="splide__arrow--text"
                    id="_"
                    data-name="&lt;"
                    transform="translate(449 616)"
                    fontFamily="Inconsolata-Light, Inconsolata"
                    fontWeight="300"
                  >
                    <tspan x="2" y="-2">
                      &lt;
                    </tspan>
                  </text>
                </g>
              </svg>
            </button>
            <button className="splide__arrow splide__arrow--next">
              <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                <g id="Groupe_792" data-name="Groupe 792" transform="translate(-436.499 -581.345)">
                  <path
                    className="splide__arrow--path"
                    id="Tracé_437"
                    data-name="Tracé 437"
                    d="M43.019,13.259l.034,24.259L22.062,49.678,1.036,37.579,1,13.32,21.992,1.16Z"
                    transform="translate(436.5 581.34)"
                    fill="none"
                    stroke="#fff"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <text
                    className="splide__arrow--text"
                    id="_"
                    data-name="&lt;"
                    transform="translate(449 616)"
                    fontFamily="Inconsolata-Light, Inconsolata"
                    fontWeight="300"
                  >
                    <tspan x="2" y="-2">
                      &lt;
                    </tspan>
                  </text>
                </g>
              </svg>
            </button>
          </div>
          {isLoading ? (
            <SplideTrack>
              <SplideSlide key="loading" className="slide">
                <div className="slide__link">
                  <Dimmer active>
                    <Loader size="massive" className="utils__loader--text"></Loader>
                  </Dimmer>
                  <img
                    src={loadingImg}
                    className="slide__cover"
                    alt="couverture en cours de chargement, merci de patienter"
                    loading="lazy"
                  />
                </div>
              </SplideSlide>
            </SplideTrack>
          ) : (
            <SplideTrack>
              {project && project.screenshots.length > 0 ? (
                project.screenshots.map((screenshot) => (
                  <SplideSlide key={screenshot} className="slide">
                    <img
                      data-fetchpriority="high"
                      src={screenshot}
                      alt={`aperçu des pages et fonctionnalités principales du projet ${project.name}`}
                      className="slide__cover"
                    />
                  </SplideSlide>
                ))
              ) : (
                <div>
                  {project?.coverURL !== undefined ? (
                    <SplideSlide className="slide">
                      <img
                        data-splide-lazy={project?.coverURL.path}
                        data-fetchpriority="high"
                        src={project?.coverURL.path} // url ou path ??
                        className="slide__cover"
                        alt={`couverture du projet ${project?.name}`}
                      />
                    </SplideSlide>
                  ) : (
                    <SplideSlide className="slide">
                      <img src={noScreenshot} className="slide__cover" alt={`couverture du projet ${project?.name}`} />
                    </SplideSlide>
                  )}
                </div>
              )}
            </SplideTrack>
          )}
        </Splide>
      </div>
    </div>
  );
}
