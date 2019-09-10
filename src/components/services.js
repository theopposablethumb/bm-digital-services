import React from 'react';

class Services extends React.Component {
    render () {
        return (
            <div className="fullWidth services flex">
                <section className="center icon-layers">
                    <h2>Digital Design and UX</h2>
                    <p>User focussed digital experiences hand crafted to your business goals</p>
                </section>
                <section className="center icon-code">
                    <h2>Front End Development</h2>
                    <p>Light weight and high performance front-end code that works on all devices</p>
                </section>
                <section className="center icon-chat-empty">
                    <h2>Consultation</h2>
                    <p>Consultancy services for implementation of digital strategy and best practices</p>
                </section>
	        </div>
        )
    }

}

export default Services;