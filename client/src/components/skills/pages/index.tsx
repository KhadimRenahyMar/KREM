import "./skills.scss";
import pic from "../../../assets/photos/22052022-9-2.webp";
import { useStats } from "../components/PipBoy/hooks";
import { useProject } from "../../LandingPage/hooks";
import { PipBoy } from "../components/PipBoy/PipBoy";
import { StatBox } from "../components/StatBox/StatBox";
import { differenceInYears } from "date-fns";
import { useTranslation } from "react-i18next";

interface SkillsProps {
  isMobile: boolean;
}

export default function Skills({ isMobile }: SkillsProps) {
  const { getStats } = useStats();
  const statsCall = getStats();
  const stats = statsCall.data;
  const { t } = useTranslation();

  const { getProjects } = useProject();
  const width = isMobile ? 390 : 952;
  const projectCall = getProjects(width);
  const projects = projectCall.data;

  const dob = new Date(1996, 0, 17);
  const age = differenceInYears(new Date(), dob);

  return (
    <div className="page page__skillsPage skillsPage">
      <section className="intro">
        <div className="intro__textBx">
          <h2 className="intro__title">{t("components.skills.intro.title", { age: age })}</h2>
          <div className="intro__desc">
            <span className="intro__desc--job">{t("components.skills.intro.desc")}</span>
            <em className="intro__moto">"Ad astra, per aspera"</em>
          </div>
        </div>
        <div className="intro__picture" style={{ backgroundImage: `url(${pic})` }}>
          <div className="intro__picture--dot" data-cx="6" data-cy="6" data-r="4" />
        </div>
      </section>
      <section className="stats">
        <StatBox stats={stats} />
      </section>
      <section className="pipboy">{projects ? <PipBoy projects={projects} /> : null}</section>
    </div>
  );
}
