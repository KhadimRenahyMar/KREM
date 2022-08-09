import "./Footer.scss";
import Contact from "../Contact/Contact";

export default function Footer({ isMobile }) {
    return (
        <section className="footer">
            <Contact isMobile={isMobile} />
            <span className="footer__credit">Ce site a été conçu et développé par Khadim Renahy-Mar</span>
        </section>
    )
}