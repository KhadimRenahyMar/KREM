import { useEffect, useState } from 'react';
import './ExpScreen.scss';
import Proptypes from 'prop-types';

export default function ExpScreen({ projects }) {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        const getTags = () => {
            const designPatterns = [];
            for (const project of projects) {
                for (const pattern of project.designPatterns) {
                    if (!designPatterns.includes(pattern)) {
                        designPatterns.push(pattern);
                    }
                }
            }

            const tagList = [];
            for (let i = 0; i < designPatterns.length; i++) {
                if (tagList.length < 5) {
                    const randomIndex = Math.floor(Math.random() * designPatterns.length);
                    const tag = designPatterns[randomIndex];
                    if (!tagList.includes(tag)) {
                        tagList.push(tag);
                    }
                }
            }

            setTags(tagList);
        }
        getTags();
    }, [projects]);

    return (
        <div className="xpScreen">
            <div className="xpScreen__legend">
                <p className="xpScreen__legend-item xpScreen__legend-item--formation">Formation</p>
                <p className="xpScreen__legend-item xpScreen__legend-item--xp">Expérience</p>
            </div>

            <ul className="xpScreen__list">
                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">Depuis Juillet 2022</strong>
                    <div className="xpScreen__card-textBx">

                        <h5 className="xpScreen__card-title">Développement Web</h5>
                        <p className="xpScreen__card-desc">Conception et développement de projets web</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        {
                            tags.map((tag) => (
                                <li key={tag} className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">{tag}</li>
                            ))
                        }
                    </ul>
                </li>
                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">Juin 2022</strong>
                    <div className="xpScreen__card-textBx">

                        <h5 className="xpScreen__card-title">KREM - Site Portfolio</h5>
                        <p className="xpScreen__card-desc">Conception et développement d'un site Portfolio</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">API</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Déploiement</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Wireframes</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">responsive</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Workflow design</li>
                    </ul>
                </li>
                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">Mai 2022</strong>
                    <div className="xpScreen__card-textBx">

                        <h5 className="xpScreen__card-title">oFood (projet de fin d'étude) - Scrum Master et Project Manager</h5>
                        <p className="xpScreen__card-desc">Développement d'une application de rééquillibrage alimentaire</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Prise de décision</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Scrum</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Agile</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Création d'un cahier des charges</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Mise en place d'outil de suivi</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Mise en place de conventions de code</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--formation">
                    <strong className="xpScreen__card-date xpScreen__card-date--formation">2021</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">O'Clock (Promotion Atome) - cursus "Fullstack JS", spécialisation React</h5>
                        <p className="xpScreen__card-desc">Titre Professionnel "Développeur Web et Web Mobile"</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Maquettage d'une application</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Accessibilité web</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Conventions de code</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Pair-programming</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Scrum</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Culture Web</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">2021</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">Chef de projet Musiques Actuelles </h5>
                        <p className="xpScreen__card-desc">Accompagnement bénévole de jeunes artistes et développement de projets musicaux - 6 mois</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Etablir des priorités</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Gestion de planning</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Structuration de tâches</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Coordination d'équipes</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Mise en relation</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Stratégie marketting</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">2019-2020</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">Pôle Emploi (Angers, Europe) - 1 an (CDD)</h5>
                        <p className="xpScreen__card-desc">Chargé d'acceuil et d'orientation</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Transmission d'information</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Ecoute</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Communication non-violente</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Actualisation des connaissances</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">2017-2019</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">Atrihom Consulting</h5>
                        <p className="xpScreen__card-desc">Missions intérim régulières (principalement en acceuil)</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Autonomie</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Fiabilité</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Adaptabilité</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Respect des procédures de sécurité</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Apprentissage rapide</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">2017</strong>
                    <div className="xpScreen__card-textBx">

                        <h5 className="xpScreen__card-title">Restos du Coeur - Service Civique - 8 mois</h5>
                        <p className="xpScreen__card-desc">Accueil des bénéficiaires, distribution alimentaire, alphabétisation</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Respect des protocoles</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Bienveillance</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Sens des responsabilité</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Pédagogie</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Entretien des zones communes</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Esprit d'équipe</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--formation">
                    <strong className="xpScreen__card-date xpScreen__card-date--formation">2015-2017</strong>
                    <div className="xpScreen__card-textBx">

                        <h5 className="xpScreen__card-title">Licence Philosophie parcours Musique et Musicologie</h5>
                        <p className="xpScreen__card-desc">Université de Nantes / Université Paris Sorbonne</p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Méthodologie</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Capacité d'analyse et de synthèse</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Argumentation</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Logique mathématique</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Culture Générale</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--formation">
                    <strong className="xpScreen__card-date xpScreen__card-date--formation">2015</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">Baccalauréat Lettres et Arts (Mention AB)</h5>
                        <p className="xpScreen__card-desc">Lycée Champ Blanc - Le Longeron </p>
                    </div>

                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">TOEIC (770/990)</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Prévention et Secours Civiques de niveau 1</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--xp">
                    <strong className="xpScreen__card-date xpScreen__card-date--xp">2012-2013</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">
                            Stages de communication graphique :</h5>
                        <p className="xpScreen__card-desc">
                            Médiapilote (Cholet) - 1 mois<br />
                            Maire de Cholet (service communication) - 1mois<br />
                            Coup de pouce 49 (Angers) - 1 mois
                        </p>
                    </div>
                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Analyse du besoin client</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Respect du cahier des charges</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Travail d'équipe</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--xp">Recherche d'identité graphique multi-support</li>
                    </ul>
                </li>

                <li className="xpScreen__card xpScreen__card--formation">
                    <strong className="xpScreen__card-date xpScreen__card-date--formation">2012-2013</strong>
                    <div className="xpScreen__card-textBx">
                        <h5 className="xpScreen__card-title">Baccalauréat Professionnel AMA Communication Visuelle et Plurimédia</h5>
                        <p className="xpScreen__card-desc">Lycée Saint Joseph - Bressuire</p>
                    </div>
                    <ul className="xpScreen__card-skillList">
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Graphisme orienté client</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Analyse d'une charte graphique</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Illustration 2D/3D</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Suite Adobe</li>
                        <li className="xpScreen__card-skillItem xpScreen__card-skillItem--formation">Sens de la composition</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

ExpScreen.propTypes = {
    projects: Proptypes.array.isRequired,
}