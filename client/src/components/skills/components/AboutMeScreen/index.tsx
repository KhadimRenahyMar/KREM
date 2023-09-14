import "./AboutMeScreen.scss";
import { useRef } from "react";
import aboutMeList from "./aboutMeList.json";

import lozad from "lozad";
import { useProject } from "../../../LandingPage/hooks";

interface AboutMeScreenProps {
  width: number;
}

export default function AboutMeScreen({ width }: AboutMeScreenProps) {
  const observer = lozad();
  observer.observe();

  const { getGifs } = useProject();
  const gifCall = getGifs(width);
  const gifs = gifCall.data;

  const gifBx = useRef<HTMLVideoElement[]>();

  const makeRef = (gif: HTMLVideoElement) => {
    if (gifBx.current && !gifBx.current.includes(gif) && gif !== null) {
      gifBx.current.push(gif);
      return gif;
    }
  };

  const showMore = (e) => {
    const itemBx = e.currentTarget.parentNode;
    const title = itemBx.childNodes[0];
    const content = itemBx.childNodes[1];
    if (content.classList.contains("hidden")) {
      title.classList.add("active");
      content.classList.remove("hidden");
    } else {
      title.classList.remove("active");
      content.classList.add("hidden");
    }
  };

  return (
    <ul className="aboutMeScreen">
      {aboutMeList.map((el) => {
        return (
          <li className="aboutMeScreen__contentBx" key={el.title}>
            <h4 className="aboutMeScreen__title">{el.title}</h4>
            <ul className="aboutMeScreen__cardList">
              {el.items.map((item) => {
                const gif = gifs?.find((gif) => gif.name === item.name);
                const gifEl = gifBx.current?.find((gif) => gif.id === item.name);

                if (gifEl) {
                  observer.observe(gifEl);
                }
                return gif ? (
                  <li className="aboutMeScreen__card" key={item.title}>
                    <h5 className="aboutMeScreen__card-title" onClick={showMore}>
                      {item.title}
                    </h5>
                    <div className="aboutMeScreen__card-textBx hidden">
                      <div className="aboutMeScreen__card-gifBx">
                        <video
                          loop
                          autoPlay
                          className="aboutMeScreen__card-gif lozad"
                          ref={makeRef}
                          src={gif.url}
                          data-type="video/webm"
                          id={gif.name}
                          data-alt={item.alt}
                        />
                        <div className="aboutMeScreen__card-gif-layer"></div>
                      </div>
                      <p className="aboutMeScreen__card-text">{item.description}</p>
                    </div>
                  </li>
                ) : null;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
