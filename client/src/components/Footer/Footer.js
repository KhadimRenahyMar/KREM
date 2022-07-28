import "./Footer.scss";
import Contact from "../Contact/Contact";

export default function Footer({isMobile}) {
    return (
        <section className="footer">
            <Contact isMobile={isMobile} />
        </section>
    )
}