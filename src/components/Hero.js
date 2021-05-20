import heroImg from '../images/illustration-hero.svg';

const Hero = () => {
    return (
        <>
            <section className="hero site">
                <div className="hero__bg-img flex"></div>
                <div className="hero__img">
                    <img src={heroImg} alt="Demonstration" />
                </div>

                <div className="hero__text container">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>

                    <div className="hero__text-buttons flex flex-jc-c flex-ai-c">
                        <button className="blue-button button-bs">Get it on Chrome</button>
                        <button className="white-button button-bs">Get it on Firefox</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
