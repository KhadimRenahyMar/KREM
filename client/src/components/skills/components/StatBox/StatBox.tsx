import { useTranslation } from "react-i18next";
import { Stat } from "../../../../interfaces/stats";
import "./StatBox.scss";

interface StatBoxProps {
  stats: Stat | undefined;
}

export function StatBox({ stats }: StatBoxProps) {
  const { t } = useTranslation();

  return (
    <ul className="stats__list">
      <li className="stats__card stats__card--one">
        <h3 className="stats__titles">{t("components.statBox.public")}</h3>
        <strong className="stats__data">{stats ? stats.public_repos : t("common.loading")}</strong>
      </li>
      <li className="stats__card stats__card--one">
        <h3 className="stats__titles">{t("components.statBox.private")}</h3>
        <strong className="stats__data">{stats ? stats.reposCount : t("common.loading")}</strong>
      </li>
      <li className="stats__card stats__card--four">
        <h3 className="stats__titles">{t("components.statBox.totalContributions")}</h3>
        <strong className="stats__data"> {stats ? stats.commitCount : t("common.loading")}</strong>
      </li>
      <li className="stats__card stats__card--three">
        <h3 className="stats__titles">{t("components.statBox.commitsPerWeek")}</h3>
        <strong className="stats__data">{stats ? stats.contribPerWeek : t("common.loading")}</strong>
      </li>
      <li className="stats__card stats__card--two">
        <h3 className="stats__titles">{t("components.statBox.lastCommit")}</h3>
        <strong className="stats__data">{stats ? stats.lastCommit : t("common.loading")}</strong>
      </li>
      <li className="stats__card stats__card--five">
        <h3 className="stats__titles">{t("components.statBox.lastProject")}</h3>
        <strong className="stats__data">{stats ? stats.lastProject : t("common.loading")}</strong>
      </li>
    </ul>
  );
}
