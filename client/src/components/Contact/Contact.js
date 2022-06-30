import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Contact({ isMobile }) {
    // gestion affichage mobile/desktop
    return (
        <div className="page page__contact contact">
            <div className={isMobile() ? ("contact__imgBx") : ("contact__imgBx--desktop")}>
                <img src="" alt="" className="contact__img" />
            </div>
            <div className={isMobile() ? ("contact__contactBx"):("contact__contactBx--desktop") }>
                <h3 className="contact__name">Khadim Renahy-Mar</h3>
                <ul className="contact__iconBx">
                    <Link to='https://github.com/KhadimRenahyMar' className="contact__icon">Github Icon</Link>
                    {/* email? */}
                    <Link to='' className="contact__icon">Mail Icon</Link>
                    <Link to='' className="contact__icon">Linkedin Icon</Link>
                    <Link to='/' className="utils__icon--close">X</Link>
                </ul>
                {
                    isMobile() && (
                        <div className="contact__textBx">
                            <p className="contact__text">Vous recherchez un dev ? Contactez-moi !</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

Contact.propTypes = {
    isMobile: propTypes.func.isRequired,
};