import "./ExpScreen.scss";
import { Project } from "../../../../interfaces/project";
import experienceList from "./experience.json";
import { Experience } from "../../../../interfaces/experience";
import { ExperienceCard } from "./experiences-card";

interface ExpScreenProps {
  projects: Project[];
}

export default function ExpScreen({ projects }: ExpScreenProps) {
  const sinceThenList = projects.reduce((acc: string[], project) => {
    const patterns = project.designPatterns.filter((c) => !acc.includes(c));
    return acc.concat(patterns);
  }, []);
  const sinceThenTags = sinceThenList.sort(() => 0.5 - Math.random()).slice(0, 5);
  const experiences: Experience[] = [...experienceList];

  return (
    <div className="xpScreen">
      <div className="xpScreen__legend">
        <p className="xpScreen__legend-item xpScreen__legend-item--formation">Formation</p>
        <p className="xpScreen__legend-item xpScreen__legend-item--xp">Expérience</p>
      </div>

      <ul className="xpScreen__list">
        <li className="xpScreen__card xpScreen__card--xp">
          <strong className={`xpScreen__card-date xpScreen__card-date--xp`}>Depuis Septembre 2023</strong>
          <div className="xpScreen__card-textBx">
            <h5 className="xpScreen__card-title">Développement Web</h5>
            <p className="xpScreen__card-desc">Conception et développement d'applications web</p>
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
