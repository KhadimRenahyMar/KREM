import "./Footer.scss";
import Contact from "../Contact";
import { useTranslation } from "react-i18next";

export default function Footer({ isMobile }) {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <Contact isMobile={isMobile} />
      <span className="footer__credit">{t("components.footer.credit")}</span>
    </section>
  );
}
