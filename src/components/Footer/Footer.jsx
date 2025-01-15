import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <ul className="footer-item footer-links flex items-center justify-center">
                    <li>
                        <a href="https://www.nutrazenith.com/mentions-legales/" title="Mentions Légales">
                            Mentions Légales
                            |
                        </a>
                    </li>
                    <li className="ps-1">
                        <a href="https://www.nutrazenith.com/conditions-generales-de-vente/"
                           title="Conditions Générales de Ventes">
                            Conditions Générales de Ventes
                        </a>
                    </li>
                </ul>
                <p className="text-center">© 2025 NutraZenith</p>
                <div className="footer-item text-center pb-1.5">
                    <span>NutraZenith, TSA 60 005, 33508 Libourne, Cedex, France</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer