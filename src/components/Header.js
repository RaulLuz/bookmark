import React from 'react'
import logo from '../images/logo-bookmark.svg'
import hamburger from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'
import { AiFillFacebook } from 'react-icons/ai'
import { ImTwitter } from 'react-icons/im'
import { Link, animateScroll as scroll } from 'react-scroll'

const Header = () => {

    const openNav = () => {
        const navbarMobile = document.querySelector('#navbarMobile')
        const navbar = document.querySelector('#navbar')
        const body = document.body

        navbarMobile.classList.toggle('open-nav');
        navbar.classList.toggle('hide');
        body.classList.toggle('no-scroll');

        if (navbar.classList.contains('fade-in')) {
            navbar.classList.remove('fade-in');
            navbar.classList.add('fade-out');
        } else {
            navbar.classList.add('fade-in');
            navbar.classList.remove('fade-out');
        }
    };

    const changeBackground = () => {
        const navbar = document.querySelector('#navbar')
        const mobileNav = document.querySelector('#navbarMobile')

        if (window.scrollY >= 50) {
            navbar.classList.add('box-shadow');
            navbar.classList.add('on-scroll');
            mobileNav.classList.add('on-scroll');
        } else {
            navbar.classList.remove('box-shadow');
            navbar.classList.remove('on-scroll');
            mobileNav.classList.remove('on-scroll');
        }
    }; window.addEventListener('scroll', changeBackground);

    const navBarLinkHandler = () => {
        const navbarMobile = document.querySelector('#navbarMobile')
        const navbar = document.querySelector('#navbar')
        const body = document.body

        navbarMobile.classList.remove('open-nav');
        navbar.classList.remove('hide');
        body.classList.remove('no-scroll');
        navbar.classList.remove('fade-out');
    }

    return (
        <>
            <header className="header">
                <nav id="navbar" className="flex flex-jc-sb header__nav container fade-in">

                    <div className="header__nav-logo">
                        <img src={logo} alt="Bookmark" />
                    </div>

                    <ul className="header__nav-menu">
                        <li><Link
                            to="features"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}>
                            Features</Link></li>
                        <li><Link to="download"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}>
                            Download</Link></li>
                        <li><Link to="faq"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={400}>
                            FAQ</Link></li>
                        <li><Link className="login-button button-bs button">Login</Link></li>
                    </ul>

                    <div id="hamburger" className="hamburger" onClick={() => openNav()}>
                        <img src={hamburger} alt="Menu" />
                    </div>

                </nav>

                <nav id="navbarMobile" className="header__mobile-nav flex flex-jc-sb">
                    <div className="header__mobile-nav-logo container">
                        <img src={logo} alt="Bookmark" />
                    </div>

                    <ul className="header__mobile-nav-menu">
                        <li><Link to="features"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={400}
                            onClick={navBarLinkHandler}
                        >
                            Features</Link></li>
                        <li><Link to="download"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={400}
                            onClick={navBarLinkHandler}
                        >
                            Download</Link></li>
                        <li><Link to="faq"
                            className="button"
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            offset={-110}
                            duration={400}
                            onClick={navBarLinkHandler}
                        >
                            FAQ</Link></li>
                        <li><button className="login-button">Login</button></li>
                    </ul>

                    <div id="hamburger" className="hamburger container" onClick={() => openNav()}>
                        <img src={closeMenu} alt="Close Menu" />
                    </div>

                    <div className="header__mobile-nav-social flex">
                        <ul className="flex">
                            <li><AiFillFacebook /></li>
                            <li><ImTwitter /></li>
                        </ul>

                    </div>
                </nav>
            </header>
        </>
    )

}
export default Header
