import "./ExpScreen.scss";
import { Project } from "../../../../interfaces/project";
import experienceList from "./experience.json";
import { Experience } from "../../../../interfaces/experience";
import { ExperienceCard } from "./experiences-card";
import { useTranslation } from "react-i18next";

interface ExpScreenProps {
  projects: Project[];
}

export default function ExpScreen({ projects }: ExpScreenProps) {
  const { t } = useTranslation();

  const sinceThenList = projects.reduce((acc: string[], project) => {
    const patterns = project.designPatterns.filter((c) => !acc.includes(c));
    return acc.concat(patterns);
  }, []);
  const sinceThenTags = sinceThenList.sort(() => 0.5 - Math.random()).slice(0, 5);
  const experiences: Experience[] = [...experienceList];

  return (
    <div className="xpScreen">
      <div className="xpScreen__legend">
        <p className="xpScreen__legend-item xpScreen__legend-item--formation">
          {t("components.screens.exp.legend.education")}
        </p>
        <p className="xpScreen__legend-item xpScreen__legend-item--xp">{t("components.screens.exp.legend.exp")}</p>
      </div>

      <ul className="xpScreen__list">
        <li className="xpScreen__card xpScreen__card--xp">
          <strong className={`xpScreen__card-date xpScreen__card-date--xp`}>
            {t("components.screens.exp.experiences.1.date")}
          </strong>
          <div className="xpScreen__card-textBx">
            <h5 className="xpScreen__card-title">{t("components.screens.exp.experiences.1.title")}</h5>
            <p className="xpScreen__card-desc">{t("components.screens.exp.experiences.1.desc")}</p>
          </div>
          <ul className="xpScreen__card-skillList">
            {sinceThenTags ? (
              <>
                {sinceThenTags.map((tag) => (
                  <li key={tag} className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">
                    {tag}
                  </li>
                ))}
              </>
            ) : null}
          </ul>
        </li>

        {experiences.map((exp) => (
          <ExperienceCard exp={exp} key={exp.title} />
        ))}
      </ul>
    </div>
  );
}
