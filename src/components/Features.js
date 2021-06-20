import React from 'react';
import { useState } from 'react';
import tab1 from '../images/illustration-features-tab-1.svg';
import tab2 from '../images/illustration-features-tab-2.svg';
import tab3 from '../images/illustration-features-tab-3.svg';

const Features = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>
            <section className="features" id="features">
                <div className="features__description container">
                    <h2>Features</h2>
                    <p>Our aim is to make it quick and easy for you to access your <br />favourite websites. Your bookmarks sync between your devices <br />so you can access them on the go.</p>
                </div>
                <ul className="features__menu container">
                    <li className={toggleState === 1 ? 'active-tab' : ''} onClick={() => toggleTab(1)}>Simple Bookmarking</li>
                    <li className={toggleState === 2 ? 'active-tab' : ''} onClick={() => toggleTab(2)}>Speedy Searching</li>
                    <li className={toggleState === 3 ? 'active-tab' : ''} onClick={() => toggleTab(3)}>Easy Sharing</li>
                </ul>

                <div className={toggleState === 1 ? "features__tab active-content" : "features__tab"}>
                    <div className="features__tab-bg">
                    </div>

                    <div className="features__tab-img">
                        <img src={tab1} alt="Bookmark in one click" />
                    </div>

                    <div className="features__tab-text container">
                        <h2>Bookmark in one click</h2>
                        <p>Organize your bookmarks however you like. Our <br />simple drag-and-drop interface gives you complete <br />control over how you manage your favourite sites.</p>
                        <button className="blue-button">More Info</button>
                    </div>
                </div>

                <div className={toggleState === 2 ? "features__tab active-content" : "features__tab"}>
                    <div className="features__tab-bg tab2-bg">
                    </div>

                    <div className="features__tab-img tab2-img">
                        <img src={tab2} alt="Intelligent search" />
                    </div>

                    <div className="features__tab-text container">
                        <h2>Intelligent search</h2>
                        <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                        <button className="blue-button">More Info</button>
                    </div>
                </div>

                <div className={toggleState === 3 ? "features__tab active-content" : "features__tab"}>
                    <div className="features__tab-bg tab3-bg">
                    </div>

                    <div className="features__tab-img tab3-img">
                        <img src={tab3} alt="Share your bookmarks" />
                    </div>

                    <div className="features__tab-text container">
                        <h2>Share your bookmarks</h2>
                        <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                        <button className="blue-button">More Info</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
