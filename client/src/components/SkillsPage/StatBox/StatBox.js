import './StatBox.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../App/App';

export default function StatBox(){
    const [userInfos, setUserInfo] = useState(null);
    useEffect(()=> {
        const fetchInformation = async () => {
            const data = await axios.get(`${API_URL}/userInfos`);
            // console.log(data.data);
            setUserInfo(data.data);
        }
        fetchInformation();
    }, []);

    return(
        <ul className="stats__list">
                    <li className="stats__card stats__card--one">
                        <h4 className="stats__titles">Projets publics</h4>
                        <strong className="stats__data">{userInfos?.public_repos}</strong>
                    </li>
                    <li className="stats__card stats__card--one">
                        <h4 className="stats__titles">Projets privés</h4>
                        <strong className="stats__data">{userInfos?.reposCount}</strong>
                    </li>
                    <li className="stats__card stats__card--four">
                        <h4 className="stats__titles">Contributions totales</h4>
                        <strong className="stats__data"> {userInfos?.commitCount}</strong>
                    </li>
                    <li className="stats__card stats__card--three">
                        <h4 className="stats__titles">Commit/semaine</h4>
                        <strong className="stats__data">{userInfos?.contribPerWeek}</strong>
                    </li>
                    <li className="stats__card stats__card--two">
                        <h4 className="stats__titles">Dernier commit</h4>
                        <strong className="stats__data">{userInfos?.lastCommit}</strong>
                    </li>
                    <li className="stats__card stats__card--five">
                        <h4 className="stats__titles">Dernier Projet</h4>
                        <strong className="stats__data">{userInfos?.lastProject}</strong>
                    </li>
                </ul>
    )
}