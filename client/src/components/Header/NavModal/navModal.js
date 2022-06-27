import { NavLink } from "react-router-dom";
import '../Header.scss';
import './NavModal.scss';

export default function NavModal(){
    const close = (e) => {
        const modal = e.currentTarget.parentNode.parentNode.parentNode.childNodes[2];
        modal.classList.add('utils--hidden');
    };

    return (
        <nav className='nav nav__modal utils--hidden'>
            <div className="modal__linkBx">
                {/* svg */}
                <NavLink
                to='/' className='modal__link' onClick={close}>
                    Acceuil
                </NavLink>
            </div>
            <div className="modal__linkBx">
                {/* svg */}
                <NavLink
                to='/projects' className='modal__link' onClick={close}>
                    Projets
                </NavLink>
            </div>
            
            <div className="modal__linkBx">
                {/* svg */}
                <NavLink
                to='/skills' className='modal__link' onClick={close}>
                    Compétences
                </NavLink>
            </div>
            
            <div className="modal__linkBx">
                {/* svg */}
                <NavLink
                to='/contact' className='modal__link' onClick={close}>
                    Contact
                </NavLink>
            </div>
        </nav>
    );
}