import './SkillScreen.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SkillScreen() {
    const [techs, setTechs] = useState([]);


    useEffect(() => {
        const fetchedTechs = [];

        const fetchTechPackage = async () => {
            const data = await axios.get('/techs');
            const result = await data.data;
            // console.log(result);
            fetchedTechs.push(...result);
        };
        fetchTechPackage();

        // fetchedTechs.forEach((tech) => {
        //     tech.tags = sortTags(tech);
        //     console.log(tech.tag);
        // });

        // const sortTags = async (tech) => {
        //     const data = await axios.get('/techTags');
        //     const result = await data.data;
        //     console.log(result);
        //     return result;
        // }

        setTechs(fetchedTechs);
    }, []);

    const showMore = (e) => {
        const skillBx = e.currentTarget;
        const skillHeader = skillBx.childNodes[0];
        const content = skillBx.childNodes[1];
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            skillHeader.classList.add('active');
        }
        else {
            content.classList.add('hidden');
            skillHeader.classList.remove('active');
        }
    }

    return (
        <div className="skillScreen">
            <ul className="skillScreen__skillsList">
                <li key="technical" className="skillScreen__skill" onClick={showMore}>
                    <div className="skillScreen__skill-header">
                        <div className="skillScreen__skill-iconBx">
                            <svg className="skillScreen__skill-icon" id="Groupe_172" data-name="Groupe 172" xmlns="http://www.w3.org/2000/svg" width="53.568" height="51.119" viewBox="0 0 53.568 51.119">
                                <path id="_298880_tools_icon" data-name="298880_tools_icon" d="M15.3,23.212c.882.839,4.277,4.257,4.277,4.257l1.883-1.852L18.51,22.71l5.664-5.737s-2.557-2.377-1.438-1.43A11.15,11.15,0,0,0,19.814,4.548,11.521,11.521,0,0,0,8.752,1.642l6.473,6.375-1.7,6.255L7.185,15.942.715,9.565a11.145,11.145,0,0,0,2.948,10.91A11.548,11.548,0,0,0,15.3,23.212Zm21.58,6.2-7.806,7.354,12.873,12.72a5.447,5.447,0,0,0,7.626,0,5.262,5.262,0,0,0,0-7.519ZM53.886,8.078,45.688,0,21.522,23.825l2.951,2.908L10.008,40.991,6.7,42.676l-4.67,7.266,1.189,1.176,7.372-4.6,1.709-3.26L26.768,29l2.952,2.908Z" transform="translate(-0.319 0.001)" fill="rgba(255,255,255,0.77)" />
                            </svg>
                        </div>
                        <div className="skillSCreen__skill-titleBx">
                            <h5 className="skillScreen__skill-title">Compétences techniques</h5>
                            <div className="skillScreen__skill-progressBar"></div>
                        </div>
                    </div>
                    <div className="skillScreen__skill-contentBx hidden">
                        <h6 className="table-subtitle">Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Maquetter une application</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Wireframes</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Evaluation du besoin client</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">User-stories</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Etablir un produit minimum viable</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Réaliser une interface utilisateur web statique et adaptable</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Mise en place d'une architecture statique</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Respect des conventions de code</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Prise en compte des questions d'accéssibilité web (W3C)</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Développer une interface utilisateur web dynamique</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">CSR</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Hydratation</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Créer une base de données</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Création de tables et rôles</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Seeding des tables</td>
                                    <td className="table-data table-data--number">3.5/5</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Développer les composants d’accès aux données</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">MCD/MPD/MLD</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">SSR</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Mise en place d'un Datamapper</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Mise en place d'un ORM</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Développer la partie back-end d’une application web ou web mobile</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">MVC</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Outils</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Outil</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                            <tr className="table-row">
                                    <td className="table-data">VSCode</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Slack</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Linux</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">AdobeXD/Figma</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">DrawIO</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Git</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Insomnia</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Kanban (Trello/Zenkit)</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li className="skillScreen__skill" onClick={showMore}>
                    <div className="skillScreen__skill-header">
                        <div className="skillScreen__skill-iconBx">
                            <div className="skillScreen__skill-icon">
                                <svg className='skillScreen__skill-icon' id="Groupe_507" data-name="Groupe 507" xmlns="http://www.w3.org/2000/svg" width="67.238" height="67.182" viewBox="0 0 67.238 67.182">
                                    <g id="Groupe_170" data-name="Groupe 170" transform="translate(0 0)">
                                        <path id="_298852_puzzle_icon" data-name="298852_puzzle_icon" d="M49.643,37.759a7.842,7.842,0,0,0-2.854-1.307,7.461,7.461,0,0,0-1.81-.119,10.211,10.211,0,0,0-1.687.231,8.863,8.863,0,0,0-1.2.432,10.724,10.724,0,0,0-3.072,1.99,10.71,10.71,0,0,0-1.992,3.07,8.806,8.806,0,0,0-.433,1.2,10.127,10.127,0,0,0-.231,1.685,7.443,7.443,0,0,0,.119,1.809,8.172,8.172,0,0,0,2.133,3.828,8.1,8.1,0,0,0,4.952,2.238,8.641,8.641,0,0,1,1.742.294,1.98,1.98,0,0,1,.793.461,1.486,1.486,0,0,1,.164,1.787,4.5,4.5,0,0,1-.851,1.236l-.183.188-.463.462-.595.6-.194.192Q42.939,59.08,41.9,60.116q-2.242,2.246-4.49,4.485l-1.477,1.476a4.4,4.4,0,0,1-.708.577c-.118.08-.229.147-.34.207a3.241,3.241,0,0,1-3.89-.779L29.95,65.042q-2.979-2.977-5.96-5.953L22.3,57.41a12.62,12.62,0,0,0-1.284-1.119,4.482,4.482,0,0,0-1.146-.638,3.2,3.2,0,0,0-3.59.87,4.02,4.02,0,0,0-.617,1.111,8.885,8.885,0,0,0-.387,1.926A6.819,6.819,0,0,1,11.6,64.982a5.937,5.937,0,0,1-1.569.51,6.039,6.039,0,0,1-1.566.068,6.66,6.66,0,0,1-4.5-2.137L3.8,63.26a6.649,6.649,0,0,1-2.139-4.494A6,6,0,0,1,1.734,57.2a5.917,5.917,0,0,1,.511-1.568A6.825,6.825,0,0,1,7.672,51.96,8.867,8.867,0,0,0,9.6,51.573a3.987,3.987,0,0,0,1.18-.671,3.127,3.127,0,0,0,.843-3.434,4.776,4.776,0,0,0-.678-1.243,12.68,12.68,0,0,0-1.12-1.283L8.147,43.261q-2.651-2.655-5.3-5.3L2.186,37.3l-1-1a3.258,3.258,0,0,1-.818-3.925c.06-.111.127-.221.2-.331a4.4,4.4,0,0,1,.582-.716l1.477-1.476q2.243-2.245,4.489-4.486,1.037-1.04,2.078-2.077l.192-.194.59-.584.473-.474.188-.183a4.516,4.516,0,0,1,1.237-.85,1.489,1.489,0,0,1,1.789.164,1.978,1.978,0,0,1,.461.793,8.712,8.712,0,0,1,.294,1.741,8.085,8.085,0,0,0,2.24,4.948,8.181,8.181,0,0,0,3.831,2.131,7.461,7.461,0,0,0,1.81.119,10.211,10.211,0,0,0,1.687-.231,8.863,8.863,0,0,0,1.2-.432,10.724,10.724,0,0,0,3.072-1.99,10.71,10.71,0,0,0,1.992-3.07,8.806,8.806,0,0,0,.433-1.2,10.127,10.127,0,0,0,.231-1.685,7.443,7.443,0,0,0-.119-1.809,8.172,8.172,0,0,0-2.133-3.828,8.1,8.1,0,0,0-4.952-2.238,8.64,8.64,0,0,1-1.742-.294,1.98,1.98,0,0,1-.793-.461,1.486,1.486,0,0,1-.164-1.787,4.5,4.5,0,0,1,.851-1.236l.183-.188.463-.462.595-.6.194-.192q1.036-1.041,2.079-2.077,2.242-2.246,4.49-4.484l1.477-1.476A4.4,4.4,0,0,1,32.056.58c.118-.08.229-.147.34-.207a3.241,3.241,0,0,1,3.89.779l1.041,1.039q2.979,2.977,5.96,5.953l1.686,1.679a12.62,12.62,0,0,0,1.284,1.119,4.482,4.482,0,0,0,1.146.638,3.2,3.2,0,0,0,3.59-.87A4.02,4.02,0,0,0,51.611,9.6,8.886,8.886,0,0,0,52,7.673a6.819,6.819,0,0,1,3.676-5.423,5.961,5.961,0,0,1,1.569-.51,6.04,6.04,0,0,1,1.566-.068,6.66,6.66,0,0,1,4.5,2.137l.165.165a6.649,6.649,0,0,1,2.139,4.494,6,6,0,0,1-.068,1.565,5.917,5.917,0,0,1-.511,1.568,6.825,6.825,0,0,1-5.427,3.672,8.867,8.867,0,0,0-1.928.387,3.987,3.987,0,0,0-1.18.671,3.127,3.127,0,0,0-.843,3.434,4.776,4.776,0,0,0,.678,1.243,12.68,12.68,0,0,0,1.12,1.283l1.678,1.682q2.98,2.985,5.961,5.958l1,1a3.258,3.258,0,0,1,.818,3.925c-.06.111-.127.221-.2.331a4.4,4.4,0,0,1-.582.716L64.65,37.38q-2.243,2.245-4.489,4.486-1.037,1.04-2.078,2.077l-.192.194-.59.584-.473.474-.188.183a4.517,4.517,0,0,1-1.237.85,1.489,1.489,0,0,1-1.789-.164,1.978,1.978,0,0,1-.461-.793,8.712,8.712,0,0,1-.294-1.741,8.085,8.085,0,0,0-2.24-4.948A7.661,7.661,0,0,0,49.643,37.759Z" transform="translate(-0.019 -0.026)" fill="rgba(255,255,255,0.91)" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="skillSCreen__skill-titleBx">
                            <h5 className="skillScreen__skill-title">Composants</h5>
                            <div className="skillScreen__skill-progressBar"></div>
                        </div>
                    </div>

                    <div className="skillScreen__skill-contentBx hidden">
                        <h6 className="table-subtitle">UI</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Composants</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-data">Formulaire</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Navigation</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Dropdown</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Tableaux</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Drag&Drop</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">File Uploader</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">ProgressBar</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Animation</td>
                                    <td className="table-data table-data--number">3/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Parallax</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Scroll Bar</td>
                                    <td className="table-data table-data--number">3.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Icônes</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Keyboard Events</td>
                                    <td className="table-data table-data--number">3.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Layout</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Modales</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Map</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Galerie</td>
                                    <td className="table-data table-data--number">3.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Chart</td>
                                    <td className="table-data table-data--number">3/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Kanban</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Dropdown</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Video Player</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Carousel</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Visualisation de données</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">APIs</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-data">Connecter une API a une base de donnée</td>
                                    <td className="table-data table-data--number">4.5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Contacter une API dans le respect des règles de connexion</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Séléctionner et exploiter les données d'une API</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>API utilisées</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Github API</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Databases</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-data">PostgreSQL</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">PostgreSQL ORM</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">MongoDB</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">MongoDB</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Utilities</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>Structure de données</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">xxx</td>
                                    <td className="table-data table-data--number">en cours d'aquisition</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>Programmation</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Reactive programming</td>
                                    <td className="table-data table-data--number">en cours d'aquisition</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Async</td>
                                    <td className="table-data table-data--number">5/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Programmation fonctionnelle</td>
                                    <td className="table-data table-data--number">4/5</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>Outils de build</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Minifiers (gatsby)</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Build (nestJS, electron)</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Bundler (webpack, babel)</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>Gestion client/server</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Historique</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>localStorage</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Cookies</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>debugging</td>
                                </tr>


                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>Gestion des Régionalité</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Timezones</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Formattage de date</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion des monnaies</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-head" colSpan={2}>Sécurité</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Gestion des utilisateurs</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">JWT</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Hashage</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">bcrypt</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Captcha</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">En cours d'acquisition</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Cryptoghraphie</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">En cours d'acquisition</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>XSS</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">sanitize-html</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>CORS</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">cors</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Validation par email</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">En cours d'acquisition</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Gestion de session</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">express-session</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2} >Authentification</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">JWT</td>
                                    <td className="table-data table-data--number"></td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">oauth</td>
                                    <td className="table-data table-data--number">en cours d'acquisition</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Server</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Gestion de media</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">QR Code Scanner</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">NSFW detection</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Face detection</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Calculs</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Machine learning</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Compression</td>
                                    <td className="table-data table-data--number">N/A</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Frameworks</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                    <th className="table-legend table-legend--number">Score</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Gestion de contenu</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Strapi</td>
                                    <td className="table-data table-data--number">2.5/5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                {
                    techs.map((tech) => (
                        // TODO : ajouter un tableau TECH_TAGS à la BDD pour pouvoir trier les packages par tech (oneTech-to-manyPackage)
                        <li key={tech.shortname} className="skillScreen__skill" onClick={showMore}>
                            <div className="skillScreen__skill-header">
                                <div className="skillScreen__skill-iconBx">
                                    <img className="skillScreen__skill-icon" src={`/techLogos/${tech.logoURL}.png`} alt='' />
                                </div>
                                <div className="skillSCreen__skill-titleBx">
                                    <h5 className="skillScreen__skill-title">{tech.fullname}</h5>
                                    <div className="skillScreen__skill-progressBar"></div>
                                </div>
                            </div>

                            <div className="skillScreen__skill-contentBx hidden">
                                <h6 className="table-subtitle">Packages</h6>
                                <table className="table">
                                    <thead className="table-head">
                                        <tr className="table-row">
                                            <th className="table-legend">Package</th>
                                            <th className="table-legend table-legend--number">Score</th>
                                        </tr>
                                    </thead>

                                    <tbody className="table-body">
                                        <tr className="table-row">
                                            <td className="table-subhead" colSpan={2}></td>
                                        </tr>
                                        <tr className="table-row">
                                            <td className="table-data"></td>
                                            <td className="table-data table-data--number"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
