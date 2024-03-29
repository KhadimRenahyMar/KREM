import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function OptionBar() {
  const { t } = useTranslation();

  return (
    <>
      <div className="optionBar__bar">
        <div className="optionBar__bar--bg" />
        <div className="optionBar__bar--fx" />
      </div>
      <div className="optionBar__buttons">
        <div className="optionBar__buttonBx">
          <Link to="/projects" className="optionBar__button">
            <svg
              className="optionBar__hiveSVG"
              xmlns="http://www.w3.org/2000/svg"
              width="217.163"
              height="250.546"
              viewBox="0 0 217.163 250.546"
            >
              <path
                className="optionBar__hivePath"
                id="Tracé_178"
                data-name="Tracé 178"
                d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="5"
              />
            </svg>
            <span className="optionBar__desc">
              <svg
                className="optionBar__svg optionBar__svg--mountainIcon"
                xmlns="http://www.w3.org/2000/svg"
                width="68.091"
                height="53.927"
                viewBox="0 0 68.091 53.927"
              >
                <g id="Groupe_273" data-name="Groupe 273" transform="translate(-173 -274)">
                  <g
                    id="_1214964_achieve_flag_goal_milestone_mountain_icon"
                    data-name="1214964_achieve_flag_goal_milestone_mountain_icon"
                    transform="translate(174 275)"
                  >
                    <path
                      id="Tracé_60"
                      data-name="Tracé 60"
                      d="M134.539,292c-2.813,4.058-5.551,8.016-8.339,12.023h31.689"
                      transform="translate(-126.2 -252.121)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Tracé_61"
                      data-name="Tracé 61"
                      d="M271.4,340.4h.249"
                      transform="translate(-235.255 -288.473)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Tracé_62"
                      data-name="Tracé 62"
                      d="M290.7,263.866h25.142c-6.024-8.588-11.924-16.977-17.823-25.366"
                      transform="translate(-249.751 -211.939)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Tracé_63"
                      data-name="Tracé 63"
                      d="M205.175,203.72c-1.618-2.29-3.236-4.605-4.854-6.92-6.223,6.223-12.148,12.073-17.948,18-1.618,1.643-3.012,1.917-4.555.075-1.045-1.245-2.091-2.464-3.435-4.058-1.394,2.016-2.763,3.958-4.082,5.9"
                      transform="translate(-159.322 -180.619)"
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Tracé_64"
                      data-name="Tracé 64"
                      d="M225.1,139.791h16.255V131.8H225.1Z"
                      transform="translate(-200.481 -131.8)"
                      fill="none"
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <path
                      id="Tracé_65"
                      data-name="Tracé 65"
                      d="M287.52,169.857h0a1.116,1.116,0,0,1-1.12-1.12V161.02a1.116,1.116,0,0,1,1.12-1.12h0a1.116,1.116,0,0,1,1.12,1.12v7.717A1.116,1.116,0,0,1,287.52,169.857Z"
                      transform="translate(-246.521 -152.905)"
                      fill="none"
                    />
                  </g>
                </g>
              </svg>
              {t("components.landing.options.seeMore")}
            </span>
          </Link>
        </div>
        <div className="optionBar__buttonBx">
          <Link to="/skills" className="optionBar__button">
            <svg
              className="optionBar__hiveSVG"
              xmlns="http://www.w3.org/2000/svg"
              width="217.163"
              height="250.546"
              viewBox="0 0 217.163 250.546"
            >
              <path
                className="optionBar__hivePath"
                id="Tracé_178"
                data-name="Tracé 178"
                d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
                fill="none"
                stroke="#000"
                strokeMiterlimit="10"
                strokeWidth="5"
              />
            </svg>
            <span className="optionBar__desc">
              <svg
                className="optionBar__svg optionBar__svg--skillIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 66.09 47.16"
              >
                <g id="Calque_2" data-name="Calque 2">
                  <g id="Calque_1-2" data-name="Calque 1">
                    <path d="M13.14,19.8a11.3,11.3,0,0,0,6.74,2.27h0a10.51,10.51,0,0,0,4.55-1A11.19,11.19,0,0,0,30.56,9.39v0a.66.66,0,0,0-.79-.51.64.64,0,0,0-.51.72,9.86,9.86,0,0,1-5.39,10.29A9.6,9.6,0,0,1,14,18.74,9.63,9.63,0,0,1,10,9.54,9.4,9.4,0,0,1,15,2.7a10.05,10.05,0,0,1,8.32-.58.64.64,0,0,0,.81-.35v0A.66.66,0,0,0,23.72.9a11.39,11.39,0,0,0-9.38.63,10.73,10.73,0,0,0-5.62,7.8A10.94,10.94,0,0,0,13.14,19.8Z" />
                    <path d="M27.8,5.79h0a.65.65,0,0,0,.88.21l0,0a.67.67,0,0,0,.2-.92,11.34,11.34,0,0,0-2-2.29l0,0a.65.65,0,0,0-.82,1A9.63,9.63,0,0,1,27.8,5.79Z" />
                    <path d="M36,36.17A19.67,19.67,0,0,0,8.68,30.85l0,0a.65.65,0,0,0-.15.91.67.67,0,0,0,.91.16A18.51,18.51,0,0,1,38,47.16h1.31A19.64,19.64,0,0,0,36,36.17Z" />
                    <path d="M7.26,32.74a.66.66,0,0,0-.93,0L6,33.05H6A.67.67,0,0,0,6,34H6a.65.65,0,0,0,.9,0l.37-.35a.66.66,0,0,0,0-.9Z" />
                    <path d="M4.76,35.35a.66.66,0,0,0-.92.13A19.71,19.71,0,0,0,0,47.16H1.31A18.47,18.47,0,0,1,4.89,36.27a.66.66,0,0,0-.12-.91Z" />
                    <path d="M61.27,18.39a4.81,4.81,0,0,0-4.75,4.16h-.2a.66.66,0,1,0,0,1.31h.2a4.81,4.81,0,1,0,4.75-5.47Zm0,8.34a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,61.27,26.73Z" />
                    <path d="M61.27,37a4.81,4.81,0,0,0-4.75,4.16H47.94l0-8.54A.67.67,0,0,0,47.3,32H45.49a.68.68,0,1,0,0,1.32h1.16v8.54a.65.65,0,0,0,.65.65h9.22A4.81,4.81,0,1,0,61.27,37Zm0,8.35a3.5,3.5,0,1,1,3.5-3.5A3.5,3.5,0,0,1,61.27,45.39Z" />
                    <path d="M53.82,22.55a.66.66,0,1,0,0,1.31h.45a.66.66,0,0,0,0-1.31Z" />
                    <path d="M51.74,22.55h-12a.66.66,0,1,0,0,1.31h12a.67.67,0,0,0,.69-.66h0A.67.67,0,0,0,51.74,22.55Z" />
                    <path d="M39.73,14.68h7.54v0c.36,0,.65-.39.65-.87v-1c0-.49-.29-.88-.65-.88s-.66.39-.66.88v.58H39.73a.66.66,0,0,0,0,1.32Z" />
                    <path d="M47.27,11.4a.65.65,0,0,0,.65-.65V9.69a.66.66,0,0,0-1.31,0v1.06A.65.65,0,0,0,47.27,11.4Z" />
                    <path d="M47.27,8a.65.65,0,0,0,.65-.65V5.49h8.6a4.83,4.83,0,1,0,0-1.3h-9a.45.45,0,0,0-.11,0l-.1,0a.66.66,0,0,0-.66.66v2.5A.65.65,0,0,0,47.27,8Zm14-6.64a3.5,3.5,0,1,1-3.5,3.5A3.5,3.5,0,0,1,61.27,1.34Z" />
                    <path d="M43.58,32h-.43a.66.66,0,0,0,0,1.32h.43a.66.66,0,0,0,0-1.32Z" />
                    <path d="M40.82,32h-.88a.68.68,0,1,0,0,1.31h.88a.68.68,0,1,0,0-1.31Z" />
                  </g>
                </g>
              </svg>
              {t("components.landing.options.knowMore")}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
