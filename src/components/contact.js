import React from 'react';
import ContactForm from './form';

class Contact extends React.Component {
    render () {
        return (
            <main>
                <div className="fullWidth">
                    <h1>Currently I am unavailable for work</h1>
                    <p>Feel free to say hi!</p>
                    <ContactForm />
                </div>
            </main>
        )
    }
}

export default Contact;