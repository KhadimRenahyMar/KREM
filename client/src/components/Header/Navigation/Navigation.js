import './Navigation.scss';
import { NavLink } from 'react-router-dom';

export default function Navigation(){
    return (
        <nav className='nav'>
            <NavLink
            to='/' className='nav__link'>
                Accueil
            </NavLink>
            <NavLink
            to='/projects' className='nav__link'>
                Projets
            </NavLink>
            <NavLink
            to='/skills' className='nav__link'>
                Compétences
            </NavLink>
            <NavLink
            to='/contact' className='nav__link'>
                Contact
            </NavLink>
        </nav>
    );
};