import React from 'react';
import Intro from './Intro';
import AlbumList from '../AlbumList';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <div class="cover"></div>
            <Intro />
            <AlbumList />
            <Contact />
        </>
    )
}

export default Home;