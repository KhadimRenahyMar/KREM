import './StatBox.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../App/App';

export default function StatBox(){
    const [userInfos, setUserInfo] = useState(null);
    useEffect(()=> {
        const stats = JSON.parse(localStorage.getItem('stats'));
        if(stats === null){
            const fetchInformation = async () => {
                const data = await axios.get(`${API_URL}/userInfos`);
                setUserInfo(data.data);
                localStorage.setItem('stats', JSON.stringify(data.data));
            }
            fetchInformation();
        }
        else{
            setUserInfo(stats);
        }
    }, []);
    
    return(
        <ul className="stats__list">
                    <li className="stats__card stats__card--one">
                        <h3 className="stats__titles">Projets publics</h3>
                        <strong className="stats__data">{userInfos ? (userInfos?.public_repos) : ('Loading...')}</strong>
                    </li>
                    <li className="stats__card stats__card--one">
                        <h3 className="stats__titles">Projets privés</h3>
                        <strong className="stats__data">{userInfos ? (userInfos?.reposCount) : ('Loading...')}</strong>
                    </li>
                    <li className="stats__card stats__card--four">
                        <h3 className="stats__titles">Contributions totales</h3>
                        <strong className="stats__data"> {userInfos ? (userInfos?.commitCount) : ('Loading...')}</strong>
                    </li>
                    <li className="stats__card stats__card--three">
                        <h3 className="stats__titles">Commit/semaine</h3>
                        <strong className="stats__data">{userInfos ? (userInfos?.contribPerWeek) : ('Loading...')}</strong>
                    </li>
                    <li className="stats__card stats__card--two">
                        <h3 className="stats__titles">Dernier commit</h3>
                        <strong className="stats__data">{userInfos ? (userInfos?.lastCommit) : ('Loading...')}</strong>
                    </li>
                    <li className="stats__card stats__card--five">
                        <h3 className="stats__titles">Dernier Projet</h3>
                        <strong className="stats__data">{userInfos ? (userInfos?.lastProject) : ('Loading...')}</strong>
                    </li>
                </ul>
    )
}