import React, { useState } from 'react'
import arrow from '../images/icon-arrow.svg';


const Faq = () => {
    const [clicked, setClicked] = useState(null)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <>
            <section className="faq container">
                <div className="faq__text">
                    <h2>Frequently Asked Questions</h2>
                    <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                </div>

                <div className="faq__accordion">
                    {data.map((item, index) => (
                        <div className="item">
                            <div className="faq__accordion-title flex flex-ai-c flex-jc-sb" onClick={() => toggle(index)}>
                                <h4>{item.title}</h4>
                                <img src={arrow} alt="Arrow" className={clicked === index ? 'rotate red-arrow' : ''} />
                            </div>
                            <div className={clicked === index ? 'faq__accordion-content active-content' : 'faq__accordion-content'}>
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="faq__button">
                    <button className="blue-button button-bs">More Info</button>
                </div>
            </section>
        </>
    )
}

const data = [
    {
        title: 'What is Bookmark?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.'
    },
    {
        title: 'How can I request a new browser?',
        content: 'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.Vivamus luctus eros aliquet convallis ultricies.Mauris augue massa, ultricies non ligula.Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet.'
    },
    {
        title: 'Is there a mobile app?',
        content: 'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget.Cras in ligula quis estpharetra mattis sit amet pharetra purus.Sed sollicitudin ex et ultricies bibendum.'
    },
    {
        title: 'What about other Chromium browsers?',
        content: 'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
    }
]

export default Faq
