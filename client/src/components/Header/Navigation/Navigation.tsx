import { useTranslation } from "react-i18next";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <NavLink to="/" className="nav__link">
        {t("components.nav.landing")}
      </NavLink>
      <NavLink to="/projects" className="nav__link">
        {t("components.nav.projects")}
      </NavLink>
      <NavLink to="/skills" className="nav__link">
        {t("components.nav.skills")}
      </NavLink>
    </nav>
  );
}
