import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-container">
                <footer className="footer">

                    <div className="footer-top">

                        <div className="comp-logo">
                            <Link to={"/"} className="logo-link">
                                <img className="logo-svg" src="./images/StudySyn.svg" />
                                CyberQuest
                            </Link>
                        </div>
                        <p className="filler-text">Seamless Learning for Brighter Futures.</p>
                        <div className="social">
                            <Link to={"https://google.com"} className={"social-link font-medium text-base text-customGray hover:text-customBlue"}>
                                <div className="flex justify-items-center items-center flex-col">
                                <img src="./images/instagram.svg" className="social-icon" />
                                <p>Instagram</p>
                                </div>
                            </Link>
                            <Link to={"https://google.com"} className={"social-link font-medium text-base text-customGray hover:text-customBlue"}>
                                <div className="flex justify-items-center items-center flex-col">
                                <img src="./images/linkedin.svg" className="social-icon" />
                                <p>Linkedin</p>
                                </div>
                            </Link>
                            <Link to={"https://google.com"} className={"social-link font-medium text-base text-customGray hover:text-customBlue"}>
                                <div className="flex justify-items-center items-center flex-col">
                                <img src="./images/Microsoft.svg" className="social-icon" />
                                <p>Microsoft</p>
                                </div>
                            </Link>
                            <Link to={"https://google.com"} className={"social-link font-medium text-base text-customGray hover:text-customBlue"}>
                                <div className="flex justify-items-center items-center flex-col">
                                <img src="./images/twitter.svg" className="social-icon" />
                                <p>Twitter</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="footer-grid">
                        {/* column 1  */}
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Products
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <a href="#overview" className="footer-link">Overview</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Solutions</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Pricing</a>
                                </li>
                                <li>
                                    <a href="#overview" className="footer-link">Customers</a>
                                </li>
                            </ul>
                        </div>
                        {/*  column 2 */}
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Company
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <Link to={"/about"} className="footer-link">About</Link>
                                </li>
                                <li>
                                    <Link to={"/investor"} className="footer-link">Investor Relations</Link>
                                </li>
                                <li>
                                    <Link to={"/jobs"} className="footer-link">Jobs</Link>
                                </li>
                            </ul>
                        </div>
                        {/* column 3 */}
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Support
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <Link to={"/contact"} className="footer-link">Contact</Link>
                                </li>
                                <li>
                                    <Link to={"/documentation"} className="footer-link">Documentation</Link>
                                </li>
                                <li>
                                    <Link to={"/chat"} className="footer-link">Chat</Link>
                                </li>
                                <li>
                                    <Link to={"/faq"} className="footer-link">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                        {/* column 4  */}
                        <div className="footer-grid-column">
                            <div className="footer-grid-heading">
                                Legal
                            </div>
                            <ul className="footer-links-list">
                                <li>
                                    <Link to={"/contact"} className="footer-link">Terms of Service</Link>
                                </li>
                                <li>
                                    <Link to={"/documentation"} className="footer-link">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to={"/chat"} className="footer-link">Cookie Settings</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">
                    © 2024 - Present StudySync. All rights reserved.
                </div>
            </div>
        </>
    )
}

export default Footer;