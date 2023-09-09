import "./carroussel.scss";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import { Project } from "../../interfaces/project";
import { useRef } from "react";
import lozad from "lozad";

import loadingImg from "../../assets/bg/loading2.webp";
import noScreenshot from "../../assets/bg/noScreenshots2.webp";
import { SplideOptions } from "../../interfaces/splide";
import { Dimmer, Loader } from "semantic-ui-react";

interface CarrousselProps {
  projects: Project[];
  splide: HTMLElement | HTMLDivElement | null;
  isLoading: boolean;
  splideOptions: SplideOptions;
}

export function Carroussel({ projects, splide, isLoading, splideOptions }: CarrousselProps) {
  const imgBx = useRef<HTMLImageElement[]>([]);
  const observer = lozad();
  observer.observe();

  const makeRef = (img: HTMLImageElement) => {
    if (!imgBx.current.includes(img) && img !== null) {
      imgBx.current.push(img);
      observer.observe(img);
      return img;
    }
  };

  return (
    <>
      <Splide
        hasTrack={splideOptions.hasTrack}
        className={splideOptions.className}
        tag={splideOptions.tag ? splideOptions.tag : "div"}
        aria-label={splideOptions.ariaLabel}
        options={splideOptions.options}
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
        {isLoading || projects.length === 0 ? (
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
            {projects.map((project: Project) => (
              <SplideSlide key={project.name} className="slide">
                <Link to={`/projects/${project.name}`} className="slide__link" state={{ project }}>
                  {project.coverURL ? (
                    <>
                      <img
                        data-splide-lazy={project.coverURL.url}
                        data-fetchpriority="high"
                        src={project.coverURL.url}
                        className="slide__cover lozad"
                        alt={`couverture du projet ${project.name}`}
                        width={splide ? splide.offsetWidth : 500}
                        height={splide ? splide.offsetHeight : 500}
                        ref={makeRef}
                      />
                      {project.screenshots
                        ? project.screenshots.map((screenshot: string) => {
                            <>
                              <img
                                data-splide-lazy={screenshot}
                                data-fetchpriority="high"
                                src={screenshot}
                                className="slide__cover lozad"
                                alt={screenshot}
                                width={splide ? splide.offsetWidth : 500}
                                height={splide ? splide.offsetHeight : 500}
                                ref={makeRef}
                              />
                              ;
                            </>;
                          })
                        : null}
                    </>
                  ) : (
                    <img
                      data-splide-lazy="noScreenshot"
                      src={noScreenshot}
                      className="slide__cover lozad"
                      alt={`couverture du projet ${project.name}`}
                      width={splide ? splide.offsetWidth : 500}
                      height={splide ? splide.offsetHeight : 500}
                      ref={makeRef}
                    />
                  )}
                  <div className="slide__sizeStampBx">
                    <span
                      className="slide__sizeStampBx--size"
                      id="_"
                      data-name="&lt;"
                      style={{ fontFamily: "Inconsolata-Light, Inconsolata", fontWeight: "300" }}
                    >
                      {project.size}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44.056" height="50.827" viewBox="0 0 44.056 50.827">
                      <g id="Groupe_792" data-name="Groupe 792">
                        <path
                          className="slide__sizeStampBx--path"
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
                  <div className="slide__descBx">
                    <div className="slide__desc">
                      <h2 className="slide__title">{project.name}</h2>
                      <p className="slide__text">{project.desc}</p>
                    </div>
                  </div>
                </Link>
              </SplideSlide>
            ))}
          </SplideTrack>
        )}
      </Splide>
    </>
  );
}
