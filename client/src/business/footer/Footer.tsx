import Contact from "../Contact";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center align-center w-full flex-col bg-primary-main shadow text-white ">
      <Contact />
      <span className=" font-heading mx-[1rem] mb-[1rem] sm:my-[0.5rem] leading-4 text-center block">
        {t("components.footer.credit")}
      </span>
    </section>
  );
}
