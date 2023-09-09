import { useTranslation } from "react-i18next";
import "./Contact.scss";
import { useState } from "react";

export default function Contact({ isMobile }) {
  const { t } = useTranslation();
  const [width, setWidth] = useState(window.innerWidth);
  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener("resize", getWidth);
  return (
    <aside className="contact">
      <div className="contact__contactBx">
        <h2 className="contact__title">{t("components.contact.title")}</h2>
        {width < 600 && (
          <div className="contact__textBx">
            <p className="contact__text">{t("components.contact.text")}</p>
          </div>
        )}
        <ul className="contact__iconBx">
          <li className="contact__iconBx-item">
            <a
              className="contact__link"
              href="mailto:krm1996@hotmail.fr"
              target="_blank"
              aria-label="Me contacter par mail"
            >
              <svg
                className="contact__hive"
                xmlns="http://www.w3.org/2000/svg"
                width="217.163"
                height="250.546"
                viewBox="0 0 217.163 250.546"
              >
                <path
                  id="Tracé_178"
                  data-name="Tracé 178"
                  d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
                />
              </svg>
              <svg className="contact__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="contact__icon--path"
                  d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"
                />
              </svg>
            </a>
          </li>
          <li className="contact__iconBx-item">
            <a
              className="contact__link"
              href="https://www.linkedin.com/in/khadim-renahy-mar-9a3633217/"
              target="_blank"
              aria-label="Me contacter par LinkedIn"
            >
              <svg
                className="contact__hive"
                xmlns="http://www.w3.org/2000/svg"
                width="217.163"
                height="250.546"
                viewBox="0 0 217.163 250.546"
              >
                <path
                  id="Tracé_178"
                  data-name="Tracé 178"
                  d="M212.986,62.2l.173,122.386-105.9,61.346L1.18,184.892,1,62.506,106.9,1.16Z"
                />
              </svg>
              <svg className="contact__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.277 49.277">
                <path
                  className="contact__icon--path"
                  d="M45.758,32H3.509A3.535,3.535,0,0,0,0,35.553V77.725a3.535,3.535,0,0,0,3.509,3.553H45.758a3.544,3.544,0,0,0,3.52-3.553V35.553A3.544,3.544,0,0,0,45.758,32ZM14.893,74.238H7.59V50.721H14.9V74.238ZM11.241,47.509a4.235,4.235,0,1,1,4.235-4.235A4.237,4.237,0,0,1,11.241,47.509ZM42.271,74.238h-7.3V62.8c0-2.728-.055-6.237-3.795-6.237-3.806,0-4.389,2.97-4.389,6.039V74.238h-7.3V50.721h7.007v3.212h.1A7.693,7.693,0,0,1,33.5,50.138c7.392,0,8.767,4.873,8.767,11.208Z"
                  transform="translate(0 -32)"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
