import './AboutMeScreen.scss';
import { useEffect, useRef } from 'react';
import axios from 'axios';
import { API_URL } from '../../../App/App';

import { cld } from '../../../App/App';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';
import { autoBest } from '@cloudinary/url-gen/qualifiers/quality';
import { useState } from 'react';
import lozad from 'lozad';
import Proptypes from 'prop-types';

export default function AboutMeScreen({ width }) {
    const observer = lozad();
    observer.observe();
    
    const [gifs, setGifs] = useState([]);
    const gifBx = useRef([]);

    const makeRef = (gif) => {
        if (!gifBx.current.includes(gif) && gif !== null) {
            gifBx.current.push(gif);
            return gif;
        }
    };

    useEffect(() => {
        const localGifs = JSON.parse(localStorage.getItem('gifs'));
        if (localGifs === null) {
            const getGifs = async () => {
                const data = await axios.get(`${API_URL}/getGifs`);
                setGifs(data.data);
                localStorage.setItem('gifs', JSON.stringify(data.data))
            };
            getGifs();
        }
        else {
            setGifs(localGifs);
        }
    }, []);

    useEffect(() => {
        const localGifs = JSON.parse(localStorage.getItem('gifs'));
        if (localGifs !== null) {
            if (gifBx.current.length > 0) {
                for (let gif of gifBx.current) {
                    const percent = parseInt(getComputedStyle(gif).width);
                    const newWidth = 0;
                    if (percent === 100) {
                        newWidth = Math.floor(width - (width * 0.1));
                    }
                    else {
                        newWidth = Math.floor(width * 0.5 - (width * 0.1));
                    }
                    const content = localGifs.find((resource) => resource.filename === gif.id)
                    if (content.format === "webp") {
                        const newImg = cld.image(`${content.public_id}.${content.format}`)
                            .setVersion(content.version)
                            .resize(scale().width(newWidth))
                            .delivery(format("webm"))
                            .delivery(quality(autoBest()));
                        gif.src = newImg.toURL();
                        gif.setAttribute('data-src', newImg.toURL());
                        gif.type = "video/webm";
                    }

                    if (content.format === "webm") {
                        const newImg = cld.video(`${content.public_id}.${content.format}`)
                            .setVersion(content.version)
                            .resize(scale().width(newWidth))
                            .delivery(quality(autoBest()));
                        gif.src = newImg.toURL();
                        gif.setAttribute('data-src', newImg.toURL());
                        gif.type = "video/webm";
                    }
                    observer.observe(gif);
                }
            }
        }
    }, [gifs])

    const showMore = (e) => {
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
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='english' alt="gif animé du Doctor de la série Doctor Who, legende : Quoi ?! " />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">I fell in love with the British culture as a teenager and kept using it on a daily basis since then (mostly with friends). Therefore, I read, write and speak English quite fluently and I understand IT's technical vocabulary perfectly. I can translate both ways easily, which is very convenient when working on a project.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Graphisme</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id="graphism" alt="gif animé d'un graphiste travaillant sur une table lumineuse" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">L'étude du graphisme lors de mon bac professionnel m'a appris à analyser un cahier des charges, à concevoir une charte graphique et à assurer sa cohérence avec le besoin du client.
                                    <br /><br />Bien que la communication graphique ne fasse plus partie de mes objectifs professionnels, les notions de composition, de hiérarchie visuelle et de typographie me permettent aujourd'hui encore de mettre en valeur ce qui compte dans mes projets.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Communication non-violente</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='communication' alt="gif animé d'un jeune homme souriant, legende : Discutons-en !" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">Après plusieurs années d'experience de travail auprès de différents publics, j'ai développé une bonne compréhension des attentes, besoins et limites d'autui, et ce dans le but de créer et d'entretenir une relation de confiance basée sur le respect, la sincérité et la bienveillance.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Gestion de projet</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='projectmanagement' alt="gif animé du personnage de Lester de Grand Theft Auto 5 devant un tableau chargé d'informations incompréhensibles, legende : Vous êtes avec moi ?" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">Au cours de ma première vie professionnelle en tant que musicien, la curiosité m'a poussé à bâtir de solides compétences dans tous les aspects entourant la production d'une oeuvre musicale.
                                    <br /><br />
                                    Ces connaissances m'ont permis une compréhension plus globale des enjeux de chacun des acteurs présents et ainsi de coordonner leur effort en vue des objectifs que nous avions à atteindre.</p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Adaptabilité</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='adaptability' alt="gif animé de Bear Grills de Man VS Wild, legende : Improvise, Adapt, Overcome." />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">Ayant travaillé sur de nombreuses missions interim de courte durée, j'ai souvent été confronté à des environnements qui m'était étrangers et ai du apprendre à m'adapter rapidement afin de soutenir le rythme des équipes auxquelles j'étais incorporé.</p>
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
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='learning' alt="gif animé de Finn et Jake de la série Adventure Time, legende : c'est l'heure d'apprendre !" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Voilà un "vilain défaut" que je suis fier de posséder.
                                    <br /><br />
                                    Parce que rien n'est jamais aussi évident que ce qu'il paraît, j'ai, depuis très jeune, un grand besoin de comprendre le monde qui m'entoure.
                                    "Pourquoi ?" est mon deuxième prénom et si personne n'a l'information ici, je n'hésite pas à creuser ailleurs.
                                    <br /><br />
                                    Je pars du principe qu'il n'y a rien qui ne soit digne d'intérêt, quelque soit le sujet. Cerner les enjeux et la place d'un concept me permet alors d'en faire une analyse pertinente, d'enrichir ma perception du contexte dans lequel il évolue et de prendre la décision la plus appropriée.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Créatif</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='creativity' alt="gif animé d'un croquis en noir et blanc de crane humain vu de profil, à l'intérieur du crane défilent rapidement plusieurs dessins en couleur représentants les idées qui nous traversent" />
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
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='organized' alt="gif animé d'un homme retournant son bureau qui effectue un 360 avant de retomber à l'endroit et parfaitement rangé" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    "Une grande créativité implique une grande organisation" - l'oncle de Peter Parker, certainement.
                                    <br /><br />
                                    Je pense en effet qu'un bon cadre permet à la créativité de canaliser son potentiel à l'endroit où elle est la plus essentielle.
                                    Et parce que je considère le temps et l'énergie comme des ressources précieuses, je cherche toujours à optimiser l'utilisation que j'en fais afin de ne pas les gaspiller inutilement. C'est cette organisation qui m'a permis, dans le milieu de l'industrie musicale, de donner une forme cohérente aux projets sur lesquels j'ai pu travailler.
                                    <br /><br />
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Sociable</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='social' alt="gif animé de Jim Halpert et Darryl Philbin de la série The Office se faisant un check de façon complice" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Avec l'autre, le temps passe plus vite et les obstacles semblent moins hauts, c'est pourquoi j'aime rencontrer de nouvelles personnes et apprendre à connaître ceux qui m'entourent.
                                    <br /><br />
                                    En groupe, je sais m'intégrer tout en restant authentique. En cas de conflit, je tente donc de comprendre l'autre et d'engager la conversation afin d'apaiser les tensions, car si je reste fidèle à mes valeurs, j'ai du respect pour ceux qui en font autant.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Calme</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='calm' alt="gif animé de Monty Python: La vie de Brian, Brian sur la croix chante, legende : Always look on the bright side of life" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    J'ai appris très jeune à dompter la pression. Depuis, je commence toujours par prendre du recul sur la situation afin de l'aborder avec sang-froid, de rester maître de mes capacités et de trouver une solution au problème qu'elle pose.
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
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='music' alt="gif animé d'un chat noir en haut de forme jouant du piano" />
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
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='art' alt="gif animé d'un costume de dinosaure courant à travers un musée" />
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
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay className="aboutMeScreen__card-gif lozad" ref={makeRef} id='philosophy' alt="gif animé du Penseur de Rodin bougeant son doigt pour faire tourner la roue d'un écran de chargement" />
                                    <div className="aboutMeScreen__card-gif-layer"></div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Si vous avez un bon bouquin entre les mains, n'hésitez pas à m'en parler !
                                    <br /><br />
                                    La philosophie, quand à elle, m'a beaucoup offert.
                                    L'épistémologie et ses inférences ont élargi ma perception du monde, la logique mathématique m'a permis d'acquérir une rigueur intellectuelle et l'histoire des sciences et des idées m'a apporté une méthode.
                                    <br /><br />
                                    Plus encore, le stoïcisme m'a appris à accepter ce que je ne peux contrôler, et l'existentialisme à être présent au monde qui m'entoure.
                                </p>
                            </div>
                        </li>
                        <li className="aboutMeScreen__card" onClick={showMore}>
                            <h5 className="aboutMeScreen__card-title">Science-fiction</h5>
                            <div className="aboutMeScreen__card-textBx hidden">
                                <div className='aboutMeScreen__card-gifBx' >
                                    <video loop autoPlay ref={makeRef} id='helloThere' alt="gif animé d'Obi-Wan Kenobi de Star Wars : Un nouvel Espoir nous saluant, legende : Hello There !" className="aboutMeScreen__card-gif lozad" />
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
                                <div className="aboutMeScreen__card-gifBx" >
                                    <video loop autoPlay ref={makeRef} id='programmation' alt="gif animé de Maurice Moss de la série The IT Crowd travaillant sur son ordinateur, remarquant un départ d'incendie et continuant son travail" className="aboutMeScreen__card-gif lozad" />
                                    <div className="aboutMeScreen__card-gif-layer">
                                    </div>
                                </div>
                                <p className="aboutMeScreen__card-text">
                                    Plongé dans l'informatique depuis très jeune, c'est en "moddant" mes jeux pour en modifier le fonctionnement que j'ai découvert la programmation.
                                    Depuis, l'organisation du code et l'algorithmie me passionnent et nourrissent ma soif d'apprentissage.
                                </p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

AboutMeScreen.propTypes = {
    width: Proptypes.number.isRequired,
}