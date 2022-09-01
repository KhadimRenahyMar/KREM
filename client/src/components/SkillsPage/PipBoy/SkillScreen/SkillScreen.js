import './SkillScreen.scss';
import { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import Proptypes from 'prop-types';

export default function SkillScreen({ projectCount, techs, components, designPatterns }) {
    const [technos, setTechnos] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const showMore = (e) => {
        const skillHeader = e.currentTarget;
        const content = skillHeader.parentNode.childNodes[1];
        const layer = skillHeader.childNodes[0].childNodes[0];
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            skillHeader.classList.add('active');
            layer.classList.add('active');
        }
        else {
            content.classList.add('hidden');
            skillHeader.classList.remove('active');
            layer.classList.remove('active');
        }
    }

    useEffect(() => {
        const getData = async () => {
            let nodeList = [];
            for (const tech of techs) {
                let techCount = 0;
                let newPackgList = [];
                for (const packg of tech.packages) {
                    techCount += 0.2;
                    let packgObj = {
                        name: packg,
                    }
                    newPackgList.push(packgObj);
                }
                // console.log('newPackgList', newPackgList);
                techCount = techCount + tech.count;
                let percent = techCount * 100 / projectCount;
                let techObj = {
                    name: tech.name,
                    level: tech.count,
                    children: newPackgList,
                    percent: percent,
                    logo: tech.logo,
                }
                // console.log('techObj', techObj);
                nodeList.push(techObj);
            }
            return nodeList;
        };

        const makeData = async () => {
            const chartData = {
                children: await getData(),
            };
            if (chartData.children.length > 0) {
                setTechnos(chartData);
                setDataIsLoaded(true);
            }
        }
        makeData();
    }, [techs]);

    return (
        <div className="skillScreen">
            <ul className="skillScreen__skillsList">
                <li className="skillScreen__skill">
                    <div className="skillScreen__skill-header" onClick={showMore}>
                        <div className="skillScreen__skill-iconBx">
                            <svg className="skillScreen__skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.98 336.01">
                                <g id="Calque_2" data-name="Calque 2">
                                    <g id="Calque_1-2" data-name="Calque 1">
                                        <path d="M0,168.09Q0,105.27,0,42.46C0,17,17,0,42.57,0Q129,0,215.44,0c18.76,0,34.2,11.65,39,29.15,1.59,5.84-.36,10.16-5.16,11.42s-8.43-1.23-10.12-6.87C235.74,22.33,226.93,16,214.38,16Q146.7,15.92,79,16c-12.37,0-24.75,0-37.12,0C26,16,16,26.05,16,42q0,126,0,252c0,15.94,10.08,26,26,26q86.07,0,172.12,0C230,320.05,240,310,240,294q0-34.5,0-69c0-5.94,4.31-9.88,9.46-8.85,3.94.78,6.38,3.86,6.43,8.46.08,8.12,0,16.24,0,24.37,0,15,0,30,0,45-.06,25.12-17,42-42.21,42H42.35C17.06,336,0,319,0,293.71Q0,230.89,0,168.09Z" /><path d="M152.89,260.31c.31-5.36.05-10.84,1.08-16.06,1.19-6,2.5-12.43,5.5-17.67q45.89-80.33,92.4-160.3c7.37-12.73,21.08-16.35,33.85-9.21,1.75,1,3.47,2,5.2,3,13,7.62,16.73,21.39,9.27,34.42q-15.92,27.8-32,55.49c-19.53,33.84-39.15,67.64-58.56,101.56a51.32,51.32,0,0,1-18,19.07c-4.59,2.78-9,5.87-13.48,8.83-5.71,3.78-11.71,4.4-17.65.87S152,271,152.67,264.06c.12-1.25.19-2.5.28-3.74Zm15.63,6.18c5.31-3.49,9.77-6.64,14.43-9.44a36.62,36.62,0,0,0,12.9-13.71Q232.32,179.89,269,116.58c.61-1.06,1.18-2.13,1.91-3.45l-20.67-11.94c-.78,1.3-1.43,2.35-2.05,3.42-24.15,41.81-48,83.79-72.63,125.32C168.75,241.42,169.84,253.5,168.52,266.49ZM279,99.31c2.87-5.08,5.78-9.85,8.3-14.83a6.87,6.87,0,0,0-2.24-9,43.7,43.7,0,0,0-9.37-5.4c-3.06-1.26-6.49-.68-8.45,2.2-3.25,4.79-6,9.91-9.12,15.06Z" /><path d="M124.7,112h65.21a29.16,29.16,0,0,1,3.74.12c4.46.58,7.39,3.83,7.34,8s-2.86,7.19-7.15,7.81a28.15,28.15,0,0,1-4.11.16H59.32a28.15,28.15,0,0,1-4.11-.16A8,8,0,0,1,48,120.1c-.05-4.15,2.92-7.45,7.36-8a29.1,29.1,0,0,1,3.74-.12Z" /><path d="M144.16,64h60.32c1.12,0,2.25-.05,3.37,0,4.89.37,8.17,3.65,8.12,8.09s-3.32,7.6-8.26,8c-.87.07-1.75,0-2.62,0H83c-.62,0-1.25,0-1.87,0-5.49-.19-9-3.26-9.06-7.95S75.54,64,81.23,64C102.21,63.92,123.19,64,144.16,64Z" /><path d="M110.75,176.07q-26,0-52.1,0a19.44,19.44,0,0,1-4.82-.48,7.83,7.83,0,0,1,0-15.14,15.89,15.89,0,0,1,4.07-.46q52.68,0,105.34,0a17,17,0,0,1,4.44.51,7.86,7.86,0,0,1,0,15.05,20.43,20.43,0,0,1-5.19.52Q136.62,176.11,110.75,176.07Z" /><path d="M96.69,224.07q-19.47,0-38.93,0c-3.26,0-6.22-.61-8.24-3.48a7.82,7.82,0,0,1,4.09-12.11,12.69,12.69,0,0,1,3.68-.52q39.49,0,79,0c5.47,0,8.88,2.78,9.26,7.24.44,5.24-3.14,8.81-9.17,8.84C123.15,224.12,109.92,224.07,96.69,224.07Z" /><path d="M92.36,272.07c-11.5,0-23,.13-34.49-.1a12.56,12.56,0,0,1-7.22-2.28c-4.71-3.8-2.9-11.36,2.89-13.19a12.32,12.32,0,0,1,3.68-.53q35.06,0,70.11,0c5.27,0,8.65,2.69,9.17,7,.65,5.32-3.07,9.08-9.28,9.11C115.6,272.12,104,272.07,92.36,272.07Z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="skillSCreen__skill-titleBx">
                            <h5 className="skillScreen__skill-title">Compétences techniques</h5>
                        </div>
                    </div>
                    <div className="skillScreen__skill-contentBx hidden">
                        <h6 className="table-subtitle">Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Maquetter une application</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Wireframes</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Evaluation du besoin client</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">User-stories</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Etablir un produit minimum viable</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Réaliser une interface utilisateur web statique et adaptable</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Mise en place d'une architecture statique</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Respect des conventions de code</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Prise en compte des questions d'accéssibilité web (W3C)</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Développer une interface utilisateur web dynamique</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">CSR</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Hydratation</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">

                                <tr className="table-row">
                                    <td className="table-subhead">Créer une base de données</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Création de tables et rôles</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Seeding des tables</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead" colSpan={2}>Développer les composants d’accès aux données</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">MCD/MPD/MLD</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">SSR</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Mise en place d'un Datamapper</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Mise en place d'un ORM</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">CRUD</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead">Développer la partie back-end d’une application web ou web mobile</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">MVC</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li className="skillScreen__skill">
                    <div className="skillScreen__skill-header" onClick={showMore}>
                        <div className="skillScreen__skill-iconBx">
                            <svg className="skillScreen__skill-icon" id="Groupe_172" data-name="Groupe 172" xmlns="http://www.w3.org/2000/svg" width="53.568" height="51.119" viewBox="0 0 53.568 51.119">
                                <path data-name="298880_tools_icon" d="M15.3,23.212c.882.839,4.277,4.257,4.277,4.257l1.883-1.852L18.51,22.71l5.664-5.737s-2.557-2.377-1.438-1.43A11.15,11.15,0,0,0,19.814,4.548,11.521,11.521,0,0,0,8.752,1.642l6.473,6.375-1.7,6.255L7.185,15.942.715,9.565a11.145,11.145,0,0,0,2.948,10.91A11.548,11.548,0,0,0,15.3,23.212Zm21.58,6.2-7.806,7.354,12.873,12.72a5.447,5.447,0,0,0,7.626,0,5.262,5.262,0,0,0,0-7.519ZM53.886,8.078,45.688,0,21.522,23.825l2.951,2.908L10.008,40.991,6.7,42.676l-4.67,7.266,1.189,1.176,7.372-4.6,1.709-3.26L26.768,29l2.952,2.908Z" transform="translate(-0.319 0.001)" fill=" #f5f5f5" />
                            </svg>
                        </div>
                        <div className="skillScreen__titleBx">
                            <h5 className="skillScreen__skill-title">Outils</h5>
                        </div>
                    </div>
                    <div className="skillScreen__skill-contentBx hidden">
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Outil</th>
                                    <th className="table-legend table-legend--value">Service</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-data">VSCode</td>
                                    <td className="table-data table-data--value">IDE</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Slack</td>
                                    <td className="table-data table-data--value">Communication</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Linux</td>
                                    <td className="table-data table-data--value">OS</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">AdobeXD/Figma</td>
                                    <td className="table-data table-data--value">Wireframes</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">DrawIO</td>
                                    <td className="table-data table-data--value">MCD/MPD/MLD</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Git</td>
                                    <td className="table-data table-data--value">Versionnage</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Insomnia</td>
                                    <td className="table-data table-data--value">Test de requêtes</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Kanban (Trello/Zenkit)</td>
                                    <td className="table-data table-data--value">Organisation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>

                <li className="skillScreen__skill">
                    <div className="skillScreen__skill-header" onClick={showMore}>
                        <div className="skillScreen__skill-iconBx">
                            <div className="skillScreen__skill-icon">
                                <svg className='skillScreen__skill-icon' id="Groupe_507" data-name="Groupe 507" xmlns="http://www.w3.org/2000/svg" width="67.238" height="67.182" viewBox="0 0 67.238 67.182">
                                    <path data-name="298852_puzzle_icon" d="M49.643,37.759a7.842,7.842,0,0,0-2.854-1.307,7.461,7.461,0,0,0-1.81-.119,10.211,10.211,0,0,0-1.687.231,8.863,8.863,0,0,0-1.2.432,10.724,10.724,0,0,0-3.072,1.99,10.71,10.71,0,0,0-1.992,3.07,8.806,8.806,0,0,0-.433,1.2,10.127,10.127,0,0,0-.231,1.685,7.443,7.443,0,0,0,.119,1.809,8.172,8.172,0,0,0,2.133,3.828,8.1,8.1,0,0,0,4.952,2.238,8.641,8.641,0,0,1,1.742.294,1.98,1.98,0,0,1,.793.461,1.486,1.486,0,0,1,.164,1.787,4.5,4.5,0,0,1-.851,1.236l-.183.188-.463.462-.595.6-.194.192Q42.939,59.08,41.9,60.116q-2.242,2.246-4.49,4.485l-1.477,1.476a4.4,4.4,0,0,1-.708.577c-.118.08-.229.147-.34.207a3.241,3.241,0,0,1-3.89-.779L29.95,65.042q-2.979-2.977-5.96-5.953L22.3,57.41a12.62,12.62,0,0,0-1.284-1.119,4.482,4.482,0,0,0-1.146-.638,3.2,3.2,0,0,0-3.59.87,4.02,4.02,0,0,0-.617,1.111,8.885,8.885,0,0,0-.387,1.926A6.819,6.819,0,0,1,11.6,64.982a5.937,5.937,0,0,1-1.569.51,6.039,6.039,0,0,1-1.566.068,6.66,6.66,0,0,1-4.5-2.137L3.8,63.26a6.649,6.649,0,0,1-2.139-4.494A6,6,0,0,1,1.734,57.2a5.917,5.917,0,0,1,.511-1.568A6.825,6.825,0,0,1,7.672,51.96,8.867,8.867,0,0,0,9.6,51.573a3.987,3.987,0,0,0,1.18-.671,3.127,3.127,0,0,0,.843-3.434,4.776,4.776,0,0,0-.678-1.243,12.68,12.68,0,0,0-1.12-1.283L8.147,43.261q-2.651-2.655-5.3-5.3L2.186,37.3l-1-1a3.258,3.258,0,0,1-.818-3.925c.06-.111.127-.221.2-.331a4.4,4.4,0,0,1,.582-.716l1.477-1.476q2.243-2.245,4.489-4.486,1.037-1.04,2.078-2.077l.192-.194.59-.584.473-.474.188-.183a4.516,4.516,0,0,1,1.237-.85,1.489,1.489,0,0,1,1.789.164,1.978,1.978,0,0,1,.461.793,8.712,8.712,0,0,1,.294,1.741,8.085,8.085,0,0,0,2.24,4.948,8.181,8.181,0,0,0,3.831,2.131,7.461,7.461,0,0,0,1.81.119,10.211,10.211,0,0,0,1.687-.231,8.863,8.863,0,0,0,1.2-.432,10.724,10.724,0,0,0,3.072-1.99,10.71,10.71,0,0,0,1.992-3.07,8.806,8.806,0,0,0,.433-1.2,10.127,10.127,0,0,0,.231-1.685,7.443,7.443,0,0,0-.119-1.809,8.172,8.172,0,0,0-2.133-3.828,8.1,8.1,0,0,0-4.952-2.238,8.64,8.64,0,0,1-1.742-.294,1.98,1.98,0,0,1-.793-.461,1.486,1.486,0,0,1-.164-1.787,4.5,4.5,0,0,1,.851-1.236l.183-.188.463-.462.595-.6.194-.192q1.036-1.041,2.079-2.077,2.242-2.246,4.49-4.484l1.477-1.476A4.4,4.4,0,0,1,32.056.58c.118-.08.229-.147.34-.207a3.241,3.241,0,0,1,3.89.779l1.041,1.039q2.979,2.977,5.96,5.953l1.686,1.679a12.62,12.62,0,0,0,1.284,1.119,4.482,4.482,0,0,0,1.146.638,3.2,3.2,0,0,0,3.59-.87A4.02,4.02,0,0,0,51.611,9.6,8.886,8.886,0,0,0,52,7.673a6.819,6.819,0,0,1,3.676-5.423,5.961,5.961,0,0,1,1.569-.51,6.04,6.04,0,0,1,1.566-.068,6.66,6.66,0,0,1,4.5,2.137l.165.165a6.649,6.649,0,0,1,2.139,4.494,6,6,0,0,1-.068,1.565,5.917,5.917,0,0,1-.511,1.568,6.825,6.825,0,0,1-5.427,3.672,8.867,8.867,0,0,0-1.928.387,3.987,3.987,0,0,0-1.18.671,3.127,3.127,0,0,0-.843,3.434,4.776,4.776,0,0,0,.678,1.243,12.68,12.68,0,0,0,1.12,1.283l1.678,1.682q2.98,2.985,5.961,5.958l1,1a3.258,3.258,0,0,1,.818,3.925c-.06.111-.127.221-.2.331a4.4,4.4,0,0,1-.582.716L64.65,37.38q-2.243,2.245-4.489,4.486-1.037,1.04-2.078,2.077l-.192.194-.59.584-.473.474-.188.183a4.517,4.517,0,0,1-1.237.85,1.489,1.489,0,0,1-1.789-.164,1.978,1.978,0,0,1-.461-.793,8.712,8.712,0,0,1-.294-1.741,8.085,8.085,0,0,0-2.24-4.948A7.661,7.661,0,0,0,49.643,37.759Z" fill="#f5f5f5" />
                                </svg>
                            </div>
                        </div>
                        <div className="skillSCreen__skill-titleBx">
                            <h5 className="skillScreen__skill-title">Composants</h5>
                        </div>
                    </div>

                    <div className="skillScreen__skill-contentBx hidden">
                        <h6 className="table-subtitle">UI</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Composants</th>
                                </tr>
                            </thead>
                            {
                                components.length > 0 && (
                                    <tbody className="table-body">
                                        {
                                            components?.map((component) => (
                                                <tr key={component} className="table-row">
                                                    <td className="table-data">{component}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                )
                            }
                        </table>

                        <h6 className="table-subtitle">Backend</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-subhead">API</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Contacter une API dans le respect des règles de connexion</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Séléctionner et exploiter les données d'une API</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-subhead">API utilisées</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Github API</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Concepts</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-subhead">Programmation</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion d'événements</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion de l'asynchronicité</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Programmation fonctionnelle</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Reactive programming</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead">Outils de build</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Minifiers (gatsby)</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Build (nestJS, electron)</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Bundler (webpack, babel)</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead">Gestion client/server</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Historique</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">localStorage</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Cookies</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">debugging</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead">Gestion des régionalités</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Timezones</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Formatage de date</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion des monnaies</td>
                                </tr>

                                <tr className="table-row">
                                    <td className="table-subhead">Sécurité</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion de token</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Hashage</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Prévenir les failles XSS</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion des origines multiples (cross-origin)</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Gestion de session</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Authentification</td>
                                </tr>
                            </tbody>
                        </table>

                        <h6 className="table-subtitle">Patrons de conception</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                </tr>
                            </thead>
                            {
                                designPatterns.length > 0 && (
                                    <tbody className="table-body">
                                        {
                                            designPatterns?.map((designPattern) => (
                                                <tr key={designPattern} className="table-row">
                                                    <td className="table-data">{designPattern}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                )
                            }
                        </table>

                        <h6 className="table-subtitle">Frameworks</h6>
                        <table className="table">
                            <thead className="table-head">
                                <tr className="table-row">
                                    <th className="table-legend">Compétence</th>
                                </tr>
                            </thead>

                            <tbody className="table-body">
                                <tr className="table-row">
                                    <td className="table-subhead">Gestionnaire de contenu</td>
                                </tr>
                                <tr className="table-row">
                                    <td className="table-data">Strapi</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </li>
                <li className="skillScreen__skill">
                    <div className="skillScreen__skill-header" onClick={showMore}>
                        <div className="skillScreen__skill-iconBx">
                            <svg className="skillScreen__skill-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g id="Calque_2" data-name="Calque 2">
                                    <g id="Calque_1-2" data-name="Calque 1">
                                        <path d="M272,0c9.54,1.31,19.08,2.6,28.62,3.94,1.81.25,3.61.61,5.4,1,6.28,1.39,9.91,6.31,8.77,11.82s-6.29,8.52-12.56,7.85c-16-1.7-32.16-4.84-48.15-4.32-93.68,3-165,45.4-207.59,128.69C2.85,234.3,12.08,318,66.57,396.66c1,1.36,2,2.64,2.46,3.23,7.5-1.37,14.42-3.58,21.38-3.72,18.79-.38,35.18,12.59,40.16,30.76a42,42,0,0,1-69,41.83,41.35,41.35,0,0,1-9-49.39c2-3.9,1.57-6.17-.94-9.51Q6.7,350,.83,275.34A40.48,40.48,0,0,0,0,271V240c1.63-11.34,2.86-22.75,5-34C24,104,109.14,20.76,211.39,3.94,220.88,2.38,230.46,1.3,240,0ZM89.86,416A22,22,0,1,0,112,437.63,22,22,0,0,0,89.86,416Z" /><path d="M240,512q-14.31-2-28.61-3.94c-1.64-.23-3.28-.56-4.9-.93-6.45-1.46-9.73-5.93-8.69-11.79,1-5.68,6-8.48,12.42-7.83,16.54,1.66,33.12,4.31,49.67,4.24,93-.41,180.52-59.89,214.37-146.6C506.14,263.49,495.6,186.53,445.14,115c-.67-1-1.4-1.87-2.12-2.78-.21-.26-.48-.46-.08-.08-7.46,1.37-14.37,3.58-21.33,3.73-18.74.4-35.25-12.66-40.18-30.75a42,42,0,0,1,69-41.88,41.44,41.44,0,0,1,9,49.4c-2,3.89-1.53,6.17,1,9.52Q505.27,162,511.17,236.64A36.4,36.4,0,0,0,512,241v31c-.28,1.29-.65,2.56-.84,3.87-1.74,11.84-2.84,23.82-5.26,35.52-20.5,99.23-105.39,180.46-205.3,196.66-9.5,1.54-19.06,2.64-28.6,3.95ZM421.79,96A22,22,0,1,0,400,74,22,22,0,0,0,421.79,96Z" /><path d="M393.86,336c3.22,3.05,7.52,7,11.63,11.08,5.77,5.77,5.75,11-.07,16.87q-20.61,20.74-41.35,41.36c-6,5.93-11.12,5.83-17.23-.19-3.8-3.74-7.58-7.5-11.38-11.23-.23-.22-.59-.3.18.08-12.34,4.82-24,9.26-35.45,14a5.73,5.73,0,0,0-2.87,4.12c-.36,5.14-.05,10.33-.19,15.49C297,434,293.2,437.91,286.83,438q-30.75.17-61.49,0c-6.64,0-10.34-4-10.49-10.72-.11-5-.13-10,0-15,.07-2.53-.74-3.65-3.28-4.59-11.52-4.27-22.9-8.89-35.63-13.89-3,3.19-6.93,7.49-11,11.59-5.83,5.81-11.08,5.82-16.87.07q-20.89-20.82-41.69-41.73c-5.57-5.62-5.55-10.88.06-16.48,4.11-4.11,8.44-8,11.71-11.08-5-13-9.5-24.76-14.24-36.43-.49-1.19-2.57-2.36-4-2.45-5-.3-10,0-15-.14-7-.15-10.86-3.9-10.88-10.87q-.11-30.24,0-60.49c0-7.1,3.75-10.81,10.76-11,5-.11,10,.19,15-.17a5.79,5.79,0,0,0,4.17-2.83c4.73-11.5,9.17-23.12,14.25-36.14-3.23-3-7.59-6.85-11.71-10.94-5.6-5.57-5.6-10.91-.06-16.48q20.79-20.91,41.71-41.71c5.82-5.78,11-5.72,16.87,0,3.33,3.26,6.45,6.76,10,9.78a5.77,5.77,0,0,0,4.9.76q16-6.28,31.75-13.16a5.81,5.81,0,0,0,3-4c.37-5.14.06-10.32.19-15.48.18-6.45,3.91-10.34,10.31-10.38q30.75-.17,61.49,0c6.64,0,10.34,4,10.49,10.72.11,5-.15,10,.14,15,.09,1.43,1.22,3.55,2.41,4,11.68,4.73,23.46,9.19,36.56,14.24,3-3.24,6.89-7.58,11-11.69,5.56-5.57,10.83-5.54,16.48.07q20.94,20.78,41.73,41.69c5.71,5.73,5.65,11-.19,16.87-4,4-8.22,7.74-11.4,10.72,5,13,9.5,24.78,14.23,36.44a5.39,5.39,0,0,0,4,2.5c5,.3,10,.05,15,.14,7.08.14,10.88,3.81,10.91,10.8q.12,30.24,0,60.49c0,7.23-3.86,10.92-11.23,11-5,.09-10-.17-15,.16A5.31,5.31,0,0,0,408,300C403.33,311.53,398.88,323.15,393.86,336Zm23.9-101.24h-8c-2.5,0-5,.06-7.5,0-6.63-.22-9.87-2.65-11.38-9a145.51,145.51,0,0,0-18.31-44c-3.27-5.21-2.67-9.55,1.72-14,3.63-3.65,7.52-7,11.09-10.36-10.46-10.49-20.28-20.37-30.93-31.07-3.15,3.49-6.36,7.31-9.86,10.85-5,5.08-9.07,5.55-15.17,1.72a141.91,141.91,0,0,0-42.66-17.74c-7-1.68-9.48-4.77-9.58-11.89-.06-4.94,0-9.88,0-15H235.46c-.25.52-.5.8-.51,1.09-.06,4.66-.06,9.33-.14,14-.13,6.89-2.56,10.19-9.16,11.76a145.26,145.26,0,0,0-43.58,18.08c-5.57,3.48-9.76,3-14.36-1.71-3.6-3.65-6.9-7.6-9.92-10.95l-30.83,31c3.23,3,7,6.35,10.47,9.9,4.79,4.85,5.28,9,1.67,14.79a143.29,143.29,0,0,0-17.78,42.64c-1.81,7.52-4.84,9.79-12.71,9.87-4.75,0-9.51,0-14.33,0v42.38c5.41,0,10.54-.07,15.67,0,6.29.11,9.68,2.62,11.09,8.67a144.84,144.84,0,0,0,18.23,44.06c3.44,5.51,2.89,9.75-1.74,14.36-3.65,3.63-7.57,7-11.19,10.27,10.69,10.58,20.6,20.37,31.14,30.79,3.1-3.34,6.38-7.1,9.9-10.63,5.06-5.09,9-5.52,15.15-1.73a140,140,0,0,0,42.21,17.5c7.74,1.78,10,4.95,10.07,13.11,0,4.74,0,9.49,0,14.12h42a6.74,6.74,0,0,0,.32-1.28c0-4.5,0-9,.08-13.49.09-7.47,2.4-10.51,9.75-12.28a142.81,142.81,0,0,0,42.66-17.75c6-3.76,10-3.26,15.14,1.89,3.5,3.52,6.73,7.32,9.72,10.61l30.91-30.88c-3.5-3.28-7.35-6.7-11-10.35-4.57-4.58-5.05-8.78-1.58-14.37a145.3,145.3,0,0,0,18.07-43.59c1.53-6.44,4.78-8.93,11.3-9,5.12-.07,10.24,0,15.59,0Z" /><path d="M347.89,37.83a10.25,10.25,0,0,1-9.79-10.45,10,10,0,0,1,10.17-9.45A9.84,9.84,0,0,1,358,28.26,10.11,10.11,0,0,1,347.89,37.83Z" /><path d="M174.2,484.77a9.66,9.66,0,0,1-10.15,9.43,9.89,9.89,0,0,1-9.66-10,10.07,10.07,0,0,1,10.5-9.76A9.86,9.86,0,0,1,174.2,484.77Z" /><path d="M256,173.34c45.44,0,82.68,37.18,82.71,82.63S301.46,338.64,256,338.66s-82.68-37.21-82.7-82.64S210.52,173.36,256,173.34Zm62.71,82.5c-.14-34.41-28.5-62.62-62.83-62.5s-62.65,28.48-62.53,62.8,28.52,62.65,62.82,62.52S318.82,290.13,318.68,255.84Z" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="skillScreen__titleBx">
                            <h5 className="skillScreen__skill-title">Stack</h5>
                        </div>
                    </div>
                    <div className="skillScreen__skill-contentBx hidden">
                        {
                            dataIsLoaded ? (
                                <ul className="skillScreen__techList">
                                    {
                                        technos?.children.map((tech) => (
                                            <li key={tech.name} className="skillScreen__tech">
                                                <div className="skillScreen__tech-titleBx" onClick={showMore}>
                                                    <div className="skillScreen__tech-title">
                                                        <div className="skillScreen__tech-layer" style={Object.assign({}, { "width": `${tech.percent}%` }, { backgroundColor: '#FFAA00' })}></div>
                                                        <img src={tech.logo.secure_url} alt={`logo de ${tech.name}`} className="skillScreen__tech-icon" />
                                                        <h2 className="skillScreen__tech-name">{tech.name}</h2>
                                                    </div>
                                                    <span className="skillscreen__tech-lvl">{tech.level} / {projectCount}</span>
                                                </div>
                                                <div className="skillScreen__techBx hidden">
                                                    {
                                                        tech.children.length > 0 ? (
                                                            <table className="table" >
                                                                <thead className="table-head">
                                                                    <tr key={tech.name} className="table-row">
                                                                        <th className="table-legend">Package</th>
                                                                        <th className="table-legend table-legend--value">{tech.children.length} packages</th>
                                                                    </tr>
                                                                </thead>
                                                                {
                                                                    tech.children.map((packg) => (
                                                                        <tbody key={packg.name} className="table-body">
                                                                            <tr className="table-row">
                                                                                <td className="table-data" colSpan={2}>{packg.name}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    ))
                                                                }
                                                            </table>
                                                        ) : (
                                                            <p className="skillScreen__tech-message">Désolé, aucun package n'a été trouvé pour cette technologie. Essayez un autre onglet !</p>
                                                        )
                                                    }
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ) : (
                                <div className="utils__loader">
                                    <Dimmer active>
                                        <Loader size='massive' className='utils__loader--text'>Loading</Loader>
                                    </Dimmer>
                                </div>
                            )
                        }
                    </div>
                </li>
            </ul>
        </div >
    )
}

SkillScreen.propTypes = {
    projectCount: Proptypes.number.isRequired,
    techs: Proptypes.array.isRequired,
    components: Proptypes.array.isRequired,
    designPatterns: Proptypes.array.isRequired,
}