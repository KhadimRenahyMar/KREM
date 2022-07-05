import "./FormationScreen.scss";

export default function FormationScreen(){
    return(
        <div className="formationScreen">
            <ul className="formationScreen__list">
                <li className="formationScreen__card">
                    <strong className="formationScreen__card-date">2021</strong>
                    <h5 className="formationScreen__card-title">Titre Professionnel "Développeur Web et Web Mobile"</h5>
                    <p className="formationScreen__card-desc">O'Clock - Promotion Atome JS, cursus "Fullstack JS", spécialisation React</p>

                    <ul className="formationScreen__card-skillList">
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                    </ul>
                </li>
                <li className="formationScreen__card">
                    <strong className="formationScreen__card-date">2015-2017</strong>
                    <h5 className="formationScreen__card-title">Licence Philosophie parcours Musique</h5>
                    <p className="formationScreen__card-desc">Université de Nantes - Université Paris Sorbonne</p>

                    <ul className="formationScreen__card-skillList">
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                    </ul>
                </li>
                <li className="formationScreen__card">
                    <strong className="formationScreen__card-date">2015</strong>
                    <h5 className="formationScreen__card-title">Baccalauréat Lettres et Arts</h5>
                    <p className="formationScreen__card-desc">Lycée Champ Blanc - Le Longeron </p>

                    <ul className="formationScreen__card-skillList">
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                        <li className="formationScreen__card-skillItem"></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}