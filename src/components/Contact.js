import React from 'react'

const Contact = () => {

    const validate = () => {
        let submitBtn = document.querySelector('#submitBtn')
        let email = document.querySelector('#inputTxt').value
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let emailDiv = document.querySelector('#emailDiv')

        if (pattern.test(email)) {
            emailDiv.classList.remove('invalid');

        } else if (email === '') {
            emailDiv.classList.remove('invalid');
        }

        else {
            emailDiv.classList.add('invalid');
            submitBtn.addEventListener('click', (event) => {
                event.preventDefault();
            })
        }
    }


    return (
        <>
            <section className="contact container site">
                <div className="contact__title">
                    <p>35,000+ Already Joined</p>
                    <h2>Stay up-to-date with what<br /> we're doing</h2>
                </div>
                <form method="GET" className="contact__form" noValidate id="form">
                    <div className="contact__form-email" id="emailDiv">
                        <input type="email" placeholder="Enter you email address" id="inputTxt" required onKeyDown={validate} />
                    </div>
                    <input type="submit" className="red-button button-bs" value="Contact Us" id="submitBtn" onClick={validate} />
                </form>
            </section>
        </>
    )
}

export default Contact
