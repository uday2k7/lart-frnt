import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>{
return(
    <footer className="footer_main">
			<div className="footer-menu_block">
            	<div className="container">
                    <ul className="footer-menu">
                        <li>
                            <Link to="about-us">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link to="contact-us">
                                CONTACT US
                            </Link>
                        </li>
                       
                        <li><a href="#"></a></li>
                        <li>
                            <Link to="privacy">
                                PRIVACY
                            </Link>
                        </li>
                    </ul>
                </div>
			</div>
			<div className="container">
                <div className="footer_social-media_block">
                    <ul className="social-media_list">
                        <li className="facebook"><a href="#"></a></li>
                        <li className="twitter"><a href="#"></a></li>
                        <li className="chat"><a href="#"></a></li>
                        <li className="instagram"><a href="#"></a></li>
                        <li className="ticon"><a href="#"></a></li>
                        <li className="pinterest"><a href="#"></a></li>
                        <li className="youtube"><a href="#"></a></li>
                        <li className="vimeo"><a href="#"></a></li>
                    </ul>
                    <div className="copyright">Ⓒ 2019 <span className="footer-logo"><img src="images/footer-logo.png" alt="logo" /></span></div>
                </div>
			</div>
	</footer>
);
};
export default Footer;