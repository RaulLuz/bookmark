import React from 'react'
import chromeLogo from '../images/logo-chrome.svg';
import firefoxLogo from '../images/logo-firefox.svg';
import operaLogo from '../images/logo-opera.svg';
import dots from '../images/bg-dots.svg';

const Download = () => {
    return (
        <>
            <section className="download container" id="download">
                <div className="download__text ">
                    <h2>Download the extension</h2>
                    <p>We’ve got more browsers in the pipeline. Please do let us know if<br /> you’ve got a favourite you’d like us to prioritize.</p>
                </div>
                <div className="download__cards-wrapper">
                    <div className="download__card">
                        <div className="download__card-logo">
                            <img src={chromeLogo} alt="Download for Chrome" />
                        </div>
                        <h3>Add to Chrome</h3>
                        <p>Minimum version 62</p>
                        <div className="download__card-dots">
                            <img src={dots} alt="Dots" />
                        </div>
                        <button className="blue-button button-bs">Add & Install Extension</button>
                    </div>
                    <div className="download__card firefox">
                        <div className="download__card-logo">
                            <img src={firefoxLogo} alt="Download for Firefox" />
                        </div>
                        <h3>Add to Firefox</h3>
                        <p>Minimum version 55</p>
                        <div className="download__card-dots">
                            <img src={dots} alt="Dots" />
                        </div>
                        <button className="blue-button button-bs">Add & Install Extension</button>
                    </div>
                    <div className="download__card opera">
                        <div className="download__card-logo">
                            <img src={operaLogo} alt="Download for Opera" />
                        </div>
                        <h3>Add to Opera</h3>
                        <p>Minimum version 46</p>
                        <div className="download__card-dots">
                            <img src={dots} alt="Dots" />
                        </div>
                        <button className="blue-button button-bs">Add & Install Extension</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Download
