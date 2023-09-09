import { useTranslation } from "react-i18next";
import { scroll } from "../../App/services/app.service";

interface LandingHeaderProps {
  splide: HTMLElement | null;
}

export function LandingHeader({ splide }: LandingHeaderProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="landingPage__layer utils--layer">
        <div className="landingPage__layer--fx" />
        <div className="landingPage__layer--bg" />
      </div>
      <div className="landingPage__contentBx">
        <div className="landingPage__textBx">
          <h2 className="landingPage__name">
            <span className="utils--orange">K</span>
            HADIM
            <span className="utils--orange"> RE</span>
            NAHY-
            <span className="utils--orange">M</span>
            AR
          </h2>
          <p className="landingPage__text">
            {t("components.landing.intro")} <br />
            {t("components.landing.welcome")}
          </p>
        </div>
        <div className="landingPage__hive">
          <strong data-x="50%" data-y="50%" className="landingPage__subtitle">
            LA
            <span className="utils--white"> LOGIQUE </span>
            <br />
            AU SERVICE DE <br />
            LA<span className="utils--orange"> CRÉATIVITÉ </span>
          </strong>
          <svg
            className="landingPage__hive--shape"
            xmlns="http://www.w3.org/2000/svg"
            data-xlink="http://www.w3.org/1999/xlink"
            width="281.33"
            height="310.113"
            viewBox="0 0 281.33 310.113"
          >
            <defs>
              <filter id="Tracé_420" x="10.267" y="1.205" width="271.063" height="308.908" filterUnits="userSpaceOnUse">
                <feOffset data-input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feFlood />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter id="Tracé_419" x="0" y="0" width="262.063" height="299.908" filterUnits="userSpaceOnUse">
                <feOffset data-input="SourceAlpha" />
                <feGaussianBlur stdDeviation="2" result="blur-2" />
                <feFlood />
                <feComposite operator="in" in2="blur-2" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <path
              id="Tracé_420-2"
              data-name="Tracé 420"
              d="M245.86,71.519l.2,141.069L123.734,283.3,1.208,212.939,1,71.87,123.326,1.16Z"
              transform="translate(22.27 13.43)"
              fill="#04192e"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <path
              id="Tracé_419-2"
              data-name="Tracé 419"
              d="M245.86,71.519l.2,141.069L123.734,283.3,1.208,212.939,1,71.87,123.326,1.16Z"
              transform="translate(7.5 7.73)"
              fill="#04192e"
              stroke="#fa0"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
      <span className="landingPage__icon" onClick={() => scroll(splide ? splide : undefined)}>
        <svg
          className="landingPage__icon--svg"
          xmlns="http://www.w3.org/2000/svg"
          width="53.62"
          height="61.739"
          viewBox="0 0 53.62 61.739"
        >
          <g id="Groupe_785" data-name="Groupe 785" transform="translate(-923.999 -914.481)">
            <path
              className="landingPage__icon--path"
              id="Tracé_421"
              data-name="Tracé 421"
              d="M51.577,15.693l.041,29.139L26.351,59.437,1.043,44.9,1,15.766,26.267,1.16Z"
              transform="translate(924.5 915.053)"
              fill="none"
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="3"
            />
            <g id="Groupe_721" data-name="Groupe 721" transform="translate(939.164 936.316)">
              <g id="Groupe_719" data-name="Groupe 719" transform="translate(0 9.494)">
                <line
                  id="Ligne_38"
                  data-name="Ligne 38"
                  x2="11.393"
                  y2="11.393"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  id="Ligne_39"
                  data-name="Ligne 39"
                  y1="11.393"
                  x2="11.393"
                  transform="translate(11.393)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </g>
              <g id="Groupe_720" data-name="Groupe 720">
                <line
                  id="Ligne_38-2"
                  data-name="Ligne 38"
                  x2="11.393"
                  y2="11.393"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  id="Ligne_39-2"
                  data-name="Ligne 39"
                  y1="11.393"
                  x2="11.393"
                  transform="translate(11.393)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </g>
            </g>
          </g>
        </svg>
      </span>
    </>
  );
}
