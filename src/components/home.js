import React from 'react';
import Hero from './hero';
import Services from './services';

class Home extends React.Component {
    render () {
        return (
            <main>
                <Hero />
                <Services />
            </main>
        )
    }
}

export default Home;