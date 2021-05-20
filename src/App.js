import Features from './components/Features';
import Header from './components/Header';
import Hero from './components/Hero';
import Download from './components/Download';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="site">
        <Header />
        <Hero />
        <Features />
        <Download />
        <Faq />
        <Contact />
        <Footer />
      </div>

    </>
  )
}

export default App;
