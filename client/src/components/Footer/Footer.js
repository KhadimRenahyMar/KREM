import "./Footer.scss";
import Contact from "../Contact/Contact";

import PropTypes from 'prop-types';

export default function Footer({ isMobile }) {
    return (
        <section className="footer">
            <Contact isMobile={isMobile} />
            <span className="footer__credit">Ce site a été conçu et développé par Khadim Renahy-Mar</span>
        </section>
    )
}

Footer.propTypes = {
    isMobile: PropTypes.bool.isRequired,
}