import { useTranslation } from "react-i18next";
import "./ReviewScreen.scss";

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <div className="reviewScreen">
      <ul className="reviewScreen__list">
        <li className="reviewScreen__review">
          <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--upperleft">"</span>
          <p className="reviewScreen__review-text">{t("components.screens.reviews.baptiste.1")}</p>
          <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--downright">"</span>
          <em className="reviewScreen__review-author">
            <span className="reviewScreen__review-author--name">- Baptiste Le Moal</span>
            {t("components.screens.reviews.baptiste.credentials")}
          </em>
        </li>
        <li className="reviewScreen__review">
          <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--upperleft">"</span>
          <p className="reviewScreen__review-text">
            {t("components.screens.reviews.aleks.intro")}
            <br />
            <br />
            <strong className="reviewScreen__review-subtitle">
              {t("components.screens.reviews.aleks.skillsSubtitle")}
            </strong>
            <br />
            <br />
            {t("components.screens.reviews.aleks.p.1")}
            <br />
            <br />
            {t("components.screens.reviews.aleks.p.2")}
            <br />
            <br />
          </p>

          <p className="reviewScreen__review-text">
            <strong className="reviewScreen__review-subtitle">
              {t("components.screens.reviews.aleks.activeLearnerSubtitle")}
            </strong>
            <br />
            <br />
            {t("components.screens.reviews.aleks.p.3")}
            <br />
            <br />
            {t("components.screens.reviews.aleks.p.4")}
            <br />
            <br />
            {t("components.screens.reviews.aleks.p.5")}
            <br />
          </p>

          <p className="reviewScreen__review-text">
            <strong className="reviewScreen__review-subtitle">
              {t("components.screens.reviews.aleks.conclusionSubtitle")}
            </strong>
            <br />
            <br />
            {t("components.screens.reviews.aleks.conclusion")}
          </p>
          <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--downright">"</span>
          <em className="reviewScreen__review-author">
            <span className="reviewScreen__review-author--name">- Alexis Hessler</span>
            {t("components.screens.reviews.aleks.credentials")}
          </em>
        </li>

        <li className="reviewScreen__review">
          <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--upperleft">"</span>
          <p className="reviewScreen__review-text">
            {t("components.screens.reviews.alysson.1")}
            <br />
            <br />
            {t("components.screens.reviews.alysson.2")}
            <br />
            <br />
            {t("components.screens.reviews.alysson.3")}
          </p>
          <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--downright">"</span>
          <em className="reviewScreen__review-author">
            <span className="reviewScreen__review-author--name">- Alysson Moreau</span>
            {t("components.screens.reviews.alysson.credentials")}
          </em>
        </li>
      </ul>
    </div>
  );
}
