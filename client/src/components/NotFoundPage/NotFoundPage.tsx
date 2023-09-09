import { Link } from "react-router-dom";
import "./NotFoundPage.scss";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="page page__NotFoundPage NotFoundPage">
      <div className="NotFoundPage__message">
        <div className="NotFoundPage__layer utils--layer"></div>
        <h2 className="NotFoundPage__404">404</h2>
        <em className="NotFoundPage__notFound NotFoundPage__notFound--full">{t("components.notFound.notFound")}</em>
        <em className="NotFoundPage__notFound NotFoundPage__notFound--lighter">{t("components.notFound.notFound")}</em>
        <em className="NotFoundPage__notFound NotFoundPage__notFound--mid">{t("components.notFound.notFound")}</em>
        <em className="NotFoundPage__notFound NotFoundPage__notFound--mid-light">
          {t("components.notFound.notFound")}
        </em>
        <em className="NotFoundPage__notFound NotFoundPage__notFound--light">{t("components.notFound.notFound")}</em>
        <em className="NotFoundPage__notFound NotFoundPage__notFound--very-light">
          {t("components.notFound.reallyNotFound")}
        </em>
      </div>
      <Link to="/" className="utils__btn utils__btn--home">
        {t("components.nav.landing").toUpperCase()}
      </Link>
    </div>
  );
}
