import { Stat } from "../../../../interfaces/stats";
import "./StatBox.scss";

interface StatBoxProps {
  stats: Stat | undefined;
}

export function StatBox({ stats }: StatBoxProps) {
  return (
    <ul className="stats__list">
      <li className="stats__card stats__card--one">
        <h3 className="stats__titles">Projets publics</h3>
        <strong className="stats__data">{stats ? stats?.public_repos : "Loading..."}</strong>
      </li>
      <li className="stats__card stats__card--one">
        <h3 className="stats__titles">Projets privés</h3>
        <strong className="stats__data">{stats ? stats?.reposCount : "Loading..."}</strong>
      </li>
      <li className="stats__card stats__card--four">
        <h3 className="stats__titles">Contributions totales</h3>
        <strong className="stats__data"> {stats ? stats?.commitCount : "Loading..."}</strong>
      </li>
      <li className="stats__card stats__card--three">
        <h3 className="stats__titles">Commit/semaine</h3>
        <strong className="stats__data">{stats ? stats?.contribPerWeek : "Loading..."}</strong>
      </li>
      <li className="stats__card stats__card--two">
        <h3 className="stats__titles">Dernier commit</h3>
        <strong className="stats__data">{stats ? stats?.lastCommit : "Loading..."}</strong>
      </li>
      <li className="stats__card stats__card--five">
        <h3 className="stats__titles">Dernier Projet</h3>
        <strong className="stats__data">{stats ? stats?.lastProject : "Loading..."}</strong>
      </li>
    </ul>
  );
}
