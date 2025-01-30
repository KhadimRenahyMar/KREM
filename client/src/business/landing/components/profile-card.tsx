import { differenceInYears } from "date-fns";
import { useTranslation } from "react-i18next";
import pic from "../../../assets/pp.jpg";

export function ProfileCard() {
  const { t } = useTranslation();

  const dob = new Date(1996, 0, 17);
  const age = differenceInYears(new Date(), dob);
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="relative ">
        <div
          className="absolute bottom-[-1rem] h-[10rem] w-[10rem] rounded-full bg-center bg-cover border-2 border-white border-solid"
          style={{ backgroundImage: `url(${pic})` }}
        />
      </div>
      <div className="text-white">
        <div className="flex">
          <h2 className="mt-8 text-4xl font-heading ">{t("components.skills.intro.name")}</h2>
          <h2 className="mt-[2.7rem] text-2xl text-white/75 font-text ">
            {t("components.skills.intro.age", { age: age })}
          </h2>
        </div>
        <div className="flex flex-col text-2xl font-text text-tertiary-main">
          <span>{t("components.skills.intro.desc")}</span>
        </div>
      </div>
    </div>
  );
}
