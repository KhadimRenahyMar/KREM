import { Experience } from "../../../../../interfaces/experience";
import "..";
interface ExperienceProps {
  exp: Experience;
}

export function ExperienceCard({ exp }: ExperienceProps) {
  return (
    <li key={exp.title} className={`xpScreen__card xpScreen__card--${exp.type}`}>
      <strong className={`xpScreen__card-date xpScreen__card-date--${exp.type}`}>{exp.date}</strong>
      <div className="xpScreen__card-textBx">
        <h5 className="xpScreen__card-title">{exp.title}</h5>
        <p className="xpScreen__card-desc">{exp.description}</p>
      </div>
      {exp.list ? (
        <ul className="xpScreen__card-list">
          {exp.list.map((item, i) => {
            if (typeof item === "string") {
              return (
                <li key={i} className={`xpScreen__card-list-item xpScreen__card-list-item--${exp.type}`}>
                  {item}
                </li>
              );
            }
            return (
              <li key={i} className={`xpScreen__card-list-item xpScreen__card-list-item--${exp.type}`}>
                {item.text}
                <a
                  className={`xpScreen__card-list-link xpScreen__card-list-link--${exp.type}`}
                  href={item.link.url}
                  target="_blank"
                >
                  {item.link.name}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}

      {exp.skills ? (
        <ul className="xpScreen__card-skillList">
          {exp.skills.map((skill) => (
            <li key={skill.label} className={`xpScreen__card-skillItem xpScreen__card-skillItem--${exp.type}`}>
              {skill.label}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}
