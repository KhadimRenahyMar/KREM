
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="page page__404 404">
            <div className="404__message">
                <h2 className="404__404">404</h2>
                <em className="404__notFound--full">Pas trouvé</em>
                <em className="404__notFound--lighter">Pas trouvé</em>
                <em className="404__notFound--mid">Pas trouvé</em>
                <em className="404__notFound--mid-light">Pas trouvé</em>
                <em className="404__notFound--light">Pas trouvé</em>
                <em className="404__notFound--very-light">Vraiment pas trouvé</em>
            </div>
            <Link to='/' className="utils--homeLink">ACCEUIL</Link>
        </div>
    );
}