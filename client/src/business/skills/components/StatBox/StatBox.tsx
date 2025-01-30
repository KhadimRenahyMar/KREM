import { useTranslation } from "react-i18next";
import { Stat } from "../../../../interfaces/stats";
import "./StatBox.scss";

interface StatBoxProps {
  stats: Stat | undefined;
}

export function StatBox({ stats }: StatBoxProps) {
  const { t } = useTranslation();

  return !stats ? (
    <strong className="">{t("common.loading")}</strong>
  ) : (
    <ul className="my-2 flex flex-wrap">
      {Object.entries(stats).map(([key, value]) => (
        <li key={key} className="min-w-[45%] sm:w-[48%] m-2 p-4 bg-primary-main rounded-xl shadow-md">
          <h3 className="">{t(`components.statBox.${key}`)}</h3>
          <strong className="">{value}</strong>
        </li>
      ))}
    </ul>
  );
}
