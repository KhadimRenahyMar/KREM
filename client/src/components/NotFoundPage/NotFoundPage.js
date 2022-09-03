
import { Link } from "react-router-dom";
import './NotFoundPage.scss';

export default function NotFound() {
    return (
        <div className="page page__NotFoundPage NotFoundPage">
            <div className="NotFoundPage__message">
                <div className="NotFoundPage__layer utils--layer" ></div>
                <h2 className="NotFoundPage__404">404</h2>
                <em className="NotFoundPage__notFound NotFoundPage__notFound--full">Pas trouvé</em>
                <em className="NotFoundPage__notFound NotFoundPage__notFound--lighter">Pas trouvé</em>
                <em className="NotFoundPage__notFound NotFoundPage__notFound--mid">Pas trouvé</em>
                <em className="NotFoundPage__notFound NotFoundPage__notFound--mid-light">Pas trouvé</em>
                <em className="NotFoundPage__notFound NotFoundPage__notFound--light">Pas trouvé</em>
                <em className="NotFoundPage__notFound NotFoundPage__notFound--very-light">Vraiment pas trouvé</em>
            </div>
            <Link to='/' className="utils__btn utils__btn--home">ACCEUIL</Link>
        </div>
    );
}