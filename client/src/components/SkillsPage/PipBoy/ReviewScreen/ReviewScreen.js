import './ReviewScreen.scss';

export default function ChartScreen() {

    return (
        <div className="reviewScreen">
            <ul className="reviewScreen__list">
                <li className="reviewScreen__review">
                    <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--upperleft">"</span>
                    <p className="reviewScreen__review-text">
                        C’est l’heure du bilan !
                        <br /><br />
                        <strong className="reviewScreen__review-subtitle">Evolution technique: </strong>
                        <br /><br />
                        Les notions essentielles sont acquises tant au niveau du front que du back. C’est désormais la pratique et la rencontre de défis algorithmiques qui te tireront vers le haut. "C’est en forgeant que l’on devient forgeron". Multiplie les petits projets, ou poursuit tes apprentissages sur de plus gros, en parallèle tes recherches d’emploi. "Null" doute que tu continueras de progresser !
                        <br /><br />
                        Par ailleurs, tu as été une personne pour laquelle j’ai eu en tant que référent de la promo, toute confiance pour m’appuyer. J’avais une confiance absolue en toi pour faire vivre le groupe d’apothéose, être moteur et fédérateur. Ta technicité d’une part, et ta bienveillance d’autre part, auront été tes meilleurs atouts toute la formation durant, et en particulier à la fin.
                        <br /><br />
                    </p>

                    <p className="reviewScreen__review-text">
                        <strong className="reviewScreen__review-subtitle">Participation :</strong>
                        <br /><br />
                        Depuis le départ, ta participation active a été constante et d’une très grande utilité pour tous tes camarades de promotion. Tu étais clairement dans le peloton de tête lorsqu’il s’agissait d’aider les autres moins en avance que toi. 
                        <br /><br />
                        De plus, tu as toujours alimenté le cockpit de tes questions ou remarques pertinentes. Tout cela, toujours dans la bonne mesure de l’humilité et de la bienveillance. 
                        <br /><br />
                        Bref, merci car tu as été de ce point de vue un élément moteur.
                        <br />
                    </p>

                    <p className="reviewScreen__review-text">
                        <strong className="reviewScreen__review-subtitle">Post-formation et conclusion :</strong>
                        <br /><br />
                        C’est grace à ton travail massif, autant qu’à ton humilité et ta bienveillance à l’égard de ceux qui t’entourent, que tu pourras aller encore plus loin et avec succès. Merci de ce que tu as pu apporter à cette promotion. Et bon vent !
                    </p>
                    <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--downright">"</span>
                    <em className="reviewScreen__review-author"><span className="reviewScreen__review-author--name">- Alexis Hessler</span>, Développeur Web Fullstack et Formateur, Bilan de fin de formation</em>
                </li>

                <li className="reviewScreen__review">
                    <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--upperleft">"</span>
                    <p className="reviewScreen__review-text">
                        "C’est avec beaucoup de professionnalisme et d’attention que Khadim a assumé ses fonctions et réalisé les missions qui lui ont été confiées.
                        Il a su s'adapter rapidement à son poste.
                        <br /><br />
                        Mettant à jour ses connaissances dès qu'il le peut, il se montre efficace au sein d'une entreprise et lors de la réalisation de projets.
                        <br /><br />
                        A l'écoute, rigoureux et impliqué, Khadim est une personne avec qui travailler est un plaisir et que je recommande vivement."
                    </p>
                    <span className="reviewScreen__review-quotationMark reviewScreen__review-quotationMark--downright">"</span>
                    <em className="reviewScreen__review-author"><span className="reviewScreen__review-author--name">- Alysson Moreau</span>, Conseillère pour l'emploi et collègue</em>
                </li>
            </ul>
        </div >
    )
}