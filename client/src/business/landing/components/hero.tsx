import { differenceInYears } from "date-fns";
import { useTranslation } from "react-i18next";
import { scroll } from "../../App/services/app.service";
import { Macaron } from "./macaron";
import pic from "../../../assets/pp.jpg";
import { ProfileCard } from "./profile-card";

interface LandingHeaderProps {
  splide: HTMLElement | null;
}

export function Hero({ splide }: LandingHeaderProps) {
  const { t } = useTranslation();
  const dob = new Date(1996, 0, 17);
  const age = differenceInYears(new Date(), dob);

  return (
    <div className="flex flex-col max-h-[100vh]">
      <div className="relative h-[80vh] flex justify-center">
        <div className="w-full flex justify-end">
          <Macaron />
        </div>
        <div className="absolute bottom-[-2rem] w-full bg-white/50 backdrop-blur-sm sm:px-[15%] px-[5%] py-8 flex flex-col gap-6 border-b-2 border-solid border-white">
          {/* <h2 className="text-white text-4xl sm:text-6xl font-heading">
            <span className="text-tertiary-main">K</span>
            HADIM
            <span className="text-tertiary-main"> RE</span>
            NAHY-
            <span className="text-tertiary-main">M</span>
            AR
          </h2> */}
          {/* <section className="bg-white/50 backdrop-blur-sm p-2 "> */}
          <div className="flex justify-between">
            <ProfileCard />
          </div>
          {/* </section> */}
          {/* <p className="text-xl italic font-text text-white">
            {t("components.landing.intro", { age: age })} <br />
            {t("components.landing.welcome")}
          </p> */}
          <div className="relative z-20 w-full flex justify-center">
            <span
              className="absolute bottom-[-8vh] cursor-pointer"
              onClick={() => scroll(splide !== null ? splide : undefined)}
            >
              <svg
                className="relative landingPage__icon--svg z-40"
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
          </div>
        </div>
      </div>
    </div>
  );
}
