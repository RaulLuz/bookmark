import React from 'react'
import footerLogo from '../images/logo-footer-bookmark.svg'
import { AiFillFacebook } from 'react-icons/ai'
import { ImTwitter } from 'react-icons/im'
import { Link, animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-ai-c flex-jc-c container">
                <div className="footer__logo">
                    <img src={footerLogo} alt="" />
                </div>
                <ul className="footer__menu flex flex-jc-c flex-ai-c">
                    <li>
                        <Link to="features"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={600}>
                            Features</Link>
                    </li>
                    <li>
                        <Link to="download"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={600}>
                            Downloads</Link>
                    </li>
                    <li>
                        <Link to="faq"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={600}>
                            FAQ</Link>
                    </li>
                </ul>
                <ul className="footer__social flex flex-ai-c flex-jc-c">
                    <li><AiFillFacebook /></li>
                    <li><ImTwitter /></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
