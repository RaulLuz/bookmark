import React from 'react'
import footerLogo from '../images/logo-footer-bookmark.svg'
import { AiFillFacebook } from 'react-icons/ai'
import { ImTwitter } from 'react-icons/im'

const Footer = () => {
    return (
        <>
            <footer className="footer flex flex-ai-c flex-jc-c container site">
                <div className="footer__logo">
                    <img src={footerLogo} alt="" />
                </div>
                <div className="footer__menu flex flex-jc-c flex-ai-c">
                    <button>Features</button>
                    <button>Pricing</button>
                    <button>Contact</button>
                </div>
                <ul className="footer__social flex flex-ai-c flex-jc-c">
                    <li><AiFillFacebook /></li>
                    <li><ImTwitter /></li>
                </ul>
            </footer>
        </>
    )
}

export default Footer
