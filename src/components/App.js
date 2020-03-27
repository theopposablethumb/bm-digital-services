import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './static/Header';
import Home from './static/Home';
import Footer from './static/Footer';
import AlbumList from './photo/AlbumList';
import Album from './photo/Album';
import Photo from './photo/Photo';
import Contact from './static/Contact'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/photography' exact component={AlbumList} />
                <Route path='/photography/:album' exact component={Album} />
                <Route path='/photography/:album/:photo' component={Photo} />
                <Route path='/contact' component={Contact} />
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;