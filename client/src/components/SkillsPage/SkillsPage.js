import './SkillsPage.scss';
import PipBoy from './PipBoy/PipBoy';
import StatBox from './StatBox/StatBox';
import pic from '../../assets/photos/22052022-9-2.webp';
import { useEffect, useState } from 'react';

export default function Skills() {
    const [age, setAge] = useState(null);

    useEffect(()=> {
        const today = new Date();
        const birthdate = new Date(1996, 0, 17);
        let age = today.getFullYear() - birthdate.getFullYear();
        const month = today.getMonth() - birthdate.getMonth();
        if(month < 0 || (month === 0 && today.getDate() < birthdate.getDate())){
            age--;
        }
        setAge(age);
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
                <div className="intro__picture" style={{backgroundImage: `url(${pic})`}}>
                <div className="intro__picture--dot" cx="6" cy="6" r="4"></div>
                </div>
            </section>
            <section className="stats">
                <StatBox />
            </section>
            <section className="pipboy">
                <PipBoy />
            </section>
        </div>
    );
};
