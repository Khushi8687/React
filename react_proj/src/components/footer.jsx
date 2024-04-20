import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="contact-form">
                <h2>Contact</h2>
                <form action="#" method="post">
                    <div className="form-left">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-right">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div className="form-footer">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default Footer;