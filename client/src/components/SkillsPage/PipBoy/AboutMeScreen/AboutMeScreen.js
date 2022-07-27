import './AboutMeScreen.scss';
import helloThereGIF from '../../../../ressources/gif/helloThere.gif';
import programmationGIF from '../../../../ressources/gif/programmation.webp';
import learningGIF from '../../../../ressources/gif/learning.webp';
import creativityGIF from '../../../../ressources/gif/creativity.webp';
import adaptabilityGIF from '../../../../ressources/gif/adaptability.gif';
import musicGIF from '../../../../ressources/gif/music.webp';
import artGIF from '../../../../ressources/gif/art.webp';
import philosophyGIF from '../../../../ressources/gif/philosophy.webp';
import calmGIF from '../../../../ressources/gif/calm.gif';
import organizedGIF from '../../../../ressources/gif/organized.gif';
import socialGIF from '../../../../ressources/gif/social.gif';
import projectmanagementGIF from '../../../../ressources/gif/projectmanagement.gif';
import communicationGIF from '../../../../ressources/gif/communication.gif';
import graphismGIF from '../../../../ressources/gif/graphism.gif';
import englishGIF from '../../../../ressources/gif/english.gif';

export default function AboutMeScreen() {
    const showMore = (e) => {
        console.log(e.currentTarget.childNodes);
        const itemBx = e.currentTarget;
        const title = itemBx.childNodes[0];
        const content = itemBx.childNodes[1];
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            title.classList.remove('active');
        }
        else {
            title.classList.add('active');
            content.classList.add('hidden');
        }
    }

    return (
        <div className="aboutMeScreen">
            <ul className="aboutMeScreen__list">
                <li className="aboutMeScreen__contentBx">
                    <h4 className="aboutMeScreen__title">Mes compétences transverses</h4>
                    <ul className="aboutMeScreen__cardList">
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Anglais</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={englishGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">I fell in love with the British culture as a teenager and kept using it on a daily basis since then (mostly with friends). Therefore, I read, write and speak english quite fluently and I understand IT's technical vocabulary perfectly. I can translate both ways easily, which is very convenient when working on a project.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Graphisme</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={graphismGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">L'étude du graphisme lors de mon bac professionnel m'a appris à analyser un cahier des charges, à anayliser une charte graphique et à assurer sa cohérence avec le besoin d'un client.
                                    <br /><br />Bien que la communication graphique ne fasse plus partie de mes objectifs professionnel, les notions de composition, de hierarchie visuelle et de typographie me permettent aujourd'hui encore de mettre en valeur ce qui compte dans mes projets.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Communication non-violente</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={communicationGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">Après plusieurs années d'experience de travail auprès de différents publics, j'ai développé une bonne compréhension des attentes, besoins et limites d'autui, et ce dans le but de créer et d'entretenir une relation de confiance basé sur le respect, la sincérité et la bienveillance.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Gestion de projet</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={projectmanagementGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">Au cours de ma première vie professionnel en tant que musicien, la curiosité m'a poussée à bâtir de solides compétences dans tous les aspects entourant la production d'une oeuvre musicale.
                                    <br /><br />
                                    Ces connaissances m'ont alors permis une compréhension plus globale des enjeux de chacun des acteurs présents et ainsi de coordoner leur effort en vue des objectifs que nous avions à atteindre.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Adaptabilité</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={adaptabilityGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">Ayant travaillé sur de nombreuses missions Interim de courte durée, j'ai souvent été confronté à des environnements qui m'était étrangers et ai du apprendre à m'adapter rapidement afin de ne pas impacter le rythme des équipes auxquelles j'étais incorporé.</p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="aboutMeScreen__contentBx">
                    <h4 className="aboutMeScreen__title">Mes traits de personnalité</h4>
                    <ul className="aboutMeScreen__cardList">
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Curieux</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={learningGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Voilà un "vilain défaut" que je suis fier de posséder.
                                    <br /><br />
                                    Parce que rien n'est jamais aussi évident que ce qu'il parait, j'ai, depuis très jeune, un grand besoin de comprendre le monde qui m'entoure.
                                    "Pourquoi ?" est mon deuxième prénom et si personne n'a l'information ici, je n'hésite pas à creuser ailleurs.
                                    <br /><br />
                                    Je pars du principe qu'il n'y a rien qui ne soit digne d'intérêt pour quelqu'un quelque part, quelque soit le sujet. Cerner les enjeux et la place d'un concept me permet alors d'en faire une analyse pertinente, d'enrichir ma perception du contexte dans lequel il évolue et de prendre les décisions les plus appropriées possible en fonction de ce que j'en sais.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Créatif</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={creativityGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Nourrie par la curiosité, la créativité étends les limites de mon univers. En m'offrant de nouvelles perspectives, elle me permet de défier les apparences, et d'accèder à des idées uniques.
                                    <br /><br />
                                    Le changement qu'elle apporte me permet de changer de point de vue, pour étendre les limites du concevable mais également pour revenir à l'essentiel.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Organisé</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={organizedGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    "Une grande créativité implique une grande organisation" - l'oncle de Peter Parker, certainement.
                                    <br /><br />
                                    Je penses en effet qu'un bon cadre permet à la créativité de canaliser son potentiel à l'endroit où elle est la plus essentielle.
                                    Et parce que je considère le temps et l'énergie comme des ressources précieuses, je cherches toujours à optimiser l'utilisation que j'en fait afin de ne pas les gaspiller inutilement. C'est cette organisation qui m'a permis, dans le milieu de l'industrie musicale, de donner une forme cohérente aux projets sur lesquels j'ai pu travailler.
                                    <br /><br />
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Sociable</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={socialGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Avec l'Autre, le temps passe plus vite et les obstacles sembles moins hauts, c'est pourquoi j'aime rencontrer de nouvelles personnes et apprendre à connaitre ceux qui m'entourent.
                                    <br /><br />
                                    En groupe, je sais m'intégrer tout en restant authentique. En cas de conflit, je tentes donc de comprendre l'Autre et d'engager la conversation afin d'apaiser les tensions, car si je reste fidèle à mes valeurs, j'ai du respect pour ceux qui en font autant. .
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Calme</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={calmGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    J'ai appris très jeune à dompter la pression. Depuis, je commences toujours par prendre du recul sur la situation afin de l'aborder avec sang-froid, de rester maître de mes capacités et de trouver une solution au problème qu'elle pose.
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="aboutMeScreen__contentBx">
                    <h4 className="aboutMeScreen__title">Mes centres d'intérêts</h4>
                    <ul className="aboutMeScreen__cardList">
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Musique</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={musicGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Pianiste depuis maintenant 13 ans, j'aime tout particulièrement la composition et l'improvisation. J'enseigne désormais par plaisir le piano à des élèves allant de 16 à 50 ans.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Arts</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={artGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Si vous me cherchez, vous me trouverez certainement dans un musée !
                                    <br /><br />
                                    Ayant étudié l'histoire de l'art plusieurs années, j'ai appris à analyser une oeuvre, à observer pour mettre les mots justes sur ce qui, de prime abord, semble trop abstrait pour être décrit.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Lecture et Philosophie</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img className="aboutMeScreen__card-gif" src={philosophyGIF} alt="" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Si vous avez un bon bouquin entre les mains, n'hésitez pas à m'en parler !
                                    <br /><br />
                                    La philosophie, quand à elle, m'a beaucoup offert.
                                    L'épistémologie et ses inférences ont élargi ma perception du monde, la logique mathématique m'a permis une rigueur intellectuelle et l'histoire des sciences et des idées a toujours me remettre en question.
                                    <br /><br />
                                    Plus encore, le stoïcisme m'a appris à accepter ce que je ne peux contrôler, et l'existentialisme à être présent au monde qui m'entoure.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Science-fiction</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className='aboutMeScreen__card-gifBx'>
                                    <img src={helloThereGIF} alt="" className="aboutMeScreen__card-gif" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    J'ai dévoré les oeuvres d'Aldous Huxley, d'Isaac Asimov et de René Barjavel. Je préfère la science-fiction réaliste car, hormis son talent d'anticipation, sa liberté narrative offre un recul sur nos sociétés qui permet de mieux les observer et d'en comprendre les fondements.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Programmation</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx">
                                    <img src={programmationGIF} alt="" className="aboutMeScreen__card-gif" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}