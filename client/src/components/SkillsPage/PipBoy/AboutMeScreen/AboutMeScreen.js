import './AboutMeScreen.scss';
import laurenHillGIF from '../../../../ressources/gif/laurenHill.gif';
import helloThereGIF from '../../../../ressources/gif/helloThere.gif';
import programmationGIF from '../../../../ressources/gif/programmation.webp';
import learningGIF from '../../../../ressources/gif/learning.webp';
import creativityGIF from '../../../../ressources/gif/creativity.webp';
import adaptabilityGIF from '../../../../ressources/gif/adaptability.gif';
import musicGIF from '../../../../ressources/gif/music.webp';
import artGIF from '../../../../ressources/gif/art.webp';
import philosophyGIF from '../../../../ressources/gif/philosophy.webp';
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
            <div className="aboutMeScreen__contentBx">
                <h4 className="aboutMeScreen__title">Mes compétences transverses</h4>
                <ul className="aboutMeScreen__list">
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Graphisme</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <p className="aboutMeScreen__card-text">L'étude du graphisme lors de mon bac professionnel m'a appris à analyser un cahier des charges et à assurer sa cohérence avec le besoin d'un client</p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Communication non-violente</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <p className="aboutMeScreen__card-text"></p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Gestion de projet</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <p className="aboutMeScreen__card-text"></p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Adaptabilité</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">
                                <img className="aboutMeScreen__card-gif" src={adaptabilityGIF} alt="" />
                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text"></p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Ecoute</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">
                                <img className="aboutMeScreen__card-gif" src={laurenHillGIF} alt="" />
                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text"></p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title"></h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text"></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="aboutMeScreen__contentBx">
                <h4 className="aboutMeScreen__title">Mes centres d'intérêts</h4>
                <ul className="aboutMeScreen__list">
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Musique</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">
                                <img className="aboutMeScreen__card-gif" src={musicGIF} alt="" />
                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">
                                Pianiste depuis maintenant 13 ans, j'aime tout particulièrement la composition et l'improvisation.
                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Arts et Histoire</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">
                                <img className="aboutMeScreen__card-gif" src={artGIF} alt="" />
                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">

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
                                La philosophie, c'est l'épistémologie et ses inductions, l'histoire des sciences et ses penseurs, la logique mathématique et sa rigueur.
                                <br /><br />
                                Mais c'est surtout ces idées intemporelles qui nous parlent et nous conseille. Grâce à elles, je ne perds jamais espoir d'être la personne que je souhaites devenir.
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
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title"></h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">

                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="aboutMeScreen__contentBx">
                <h4 className="aboutMeScreen__title">Mes traits de personnalité</h4>
                <ul className="aboutMeScreen__list">
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
                                "Pourquoi ?" est mon deuxième prénom et si personne n'a l'information ici, quelqu'un, ailleurs, doit bien l'avoir.
                                <br /><br />
                                J'aime apprendre parce que j'ai besoin de comprendre. Quelque soit le sujet de cet apprentissage, la démarche même m'enrichit et plus la leçon est difficile, plus il m'est plaisant de la comprendre.
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
                                Nourrie par la curiosité, la créativité étends les limites de mon univers. Elle me permet de trouver des chemins de traverses inconnus pour découvrir des idées uniques et gagner un point de vue plus large sur les situations que je rencontres.
                                <br /><br />
                                Changer de point de vue, revenir à l'essentiel, détourner/réarranger/mélanger les concepts, autant de façon de faire du neuf avec du vieux.
                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Organisé</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">
                                Parce qu'un grand potentiel créatif a besoin d'être cadré
                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Rigoureux</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">
                                Au travail comme en musique, une mélodie baclée ou irrésolue relève pour moi de la torture.
                                <br /><br />
                                Plus sérieusement, j'éprouve effectivement une grande insatisfaction à l'idée de laisser un travail à moitié terminé.
                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Sociable</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">
                                Bien qu'étant d'une nature plutôt introvertie, j'aime apprendre à connaitre les personnes qui m'entourent.
                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Calme</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">
                                Le changement et la pression ne me font pas peur ! J'aborde chaque situation avec sang-froid afin de rester maitre de mes capacités.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="aboutMeScreen__contentBx">
                <h4 className="aboutMeScreen__title">Mes valeurs et besoins</h4>
                <ul className="aboutMeScreen__list">
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Bienveillance</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">

                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Sincérité</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">

                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Réciprocité</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">

                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title">Envergure</h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">
                                L'une des meilleures sources d'énergie pour moi. L'idée de travailler à repousser les limites de ce qui est m'offre une concentration a toute épreuve.
                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title"></h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text">

                            </p>
                        </div>
                    </li>
                    <li className="aboutMeScreen__card" onClick={showMore}>
                        <h5 className="aboutMeScreen__card-title"></h5>
                        <div className="aboutMeScreen__card-textBx hidden">
                            <div className="aboutMeScreen__card-gifBx">

                                <div className="aboutMeScreen__card-gif-layer"></div>
                            </div>
                            <p className="aboutMeScreen__card-text"></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}