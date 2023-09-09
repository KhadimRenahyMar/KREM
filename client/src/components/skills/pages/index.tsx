/* eslint-disable no-plusplus */
import "./skills.scss";
import { useEffect, useState } from "react";
import pic from "../../../assets/photos/22052022-9-2.webp";
import { useStats } from "../components/PipBoy/hooks";
import { useProject } from "../../LandingPage/hooks";
import { PipBoy } from "../components/PipBoy/PipBoy";
import { StatBox } from "../components/StatBox/StatBox";

export default function Skills() {
  const [age, setAge] = useState<number>();
  const { getStats } = useStats();
  const statsCall = getStats();
  const stats = statsCall.data;

  const { getProjects } = useProject();
  const projectCall = getProjects(1);
  const projects = projectCall.data;

  useEffect(() => {
    const today = new Date();
    const birthdate = new Date(1996, 0, 17);
    let getAge = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      getAge = getAge--;
    }
    setAge(getAge);
  }, []);

  return (
    <div className="page page__skillsPage skillsPage">
      <section className="intro">
        <div className="intro__textBx">
          <h2 className="intro__title">Khadim, {age} ans</h2>
          <div className="intro__desc">
            <span className="intro__desc--job">Développeur Fullstack JS</span>
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
