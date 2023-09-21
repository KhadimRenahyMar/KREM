import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "./TechSlider.scss";
import lozad from "lozad";
import { useRef } from "react";
import { Tech } from "../../../../interfaces/tech";
import { useTranslation } from "react-i18next";

interface TechSelectorProps {
  techs: Tech[];
  isMobile: boolean;
  onTechChange: (techs: string) => void;
  techSearch: string[];
}

export default function TechSelector({ techs, isMobile, techSearch, onTechChange }: TechSelectorProps) {
  const observer = lozad();
  observer.observe();
  const { t } = useTranslation();

  const imgBx = useRef<HTMLImageElement[]>([]);

  const makeRef = (img: HTMLImageElement) => {
    if (!imgBx.current.includes(img) && img !== null) {
      imgBx.current.push(img);
      observer.observe(img);
      return img;
    }
  };

  const itemNumber = isMobile ? 4 : 8;
  return (
    <div className="techSlider">
      <Splide
        hasTrack={false}
        className="splide"
        tag="section"
        aria-label="techSlider"
        options={{
          rewind: true,
          autoplay: true,
          pauseOnHover: true,
          perPage: itemNumber,
          perMove: 1,
          lazyLoad: "nearby",
          drag: "free",
          snap: true,
          pagination: false,
          arrows: false,
        }}
      >
        <SplideTrack className="splide__track">
          {techs.map((tech) => {
            const techIsInTechSearch = techSearch.includes(tech.name);
            const pathClassName = !techIsInTechSearch ? "slide__hiveLogo--path" : "slide__hiveLogo--path active";
            return (
              <SplideSlide key={tech.name} className="slide" onClick={(e) => onTechChange(tech.name)}>
                <svg
                  className="slide__hiveLogo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="217.163"
                  height="250.546"
                  viewBox="0 0 217.163 250.546"
                >
                  <path
                    className={pathClassName}
                    id="Tracé_178"
                    data-name="Tracé 178"
                    d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
                  />
                </svg>
                <img
                  rel="preload"
                  src={tech.logo.secure_url}
                  alt={t("components.techSlider.logo", { techName: tech.name })}
                  ref={makeRef}
                  className="slide__techLogo lozad"
                />
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </div>
  );
}
