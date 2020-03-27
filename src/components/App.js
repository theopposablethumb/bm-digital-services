import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/static/Header';
import Home from '../components/static/Home';
import Footer from '../components/static/Footer';
import AlbumList from '../components/AlbumList';
import Album from '../components/Album';
import Photo from '../components/Photo';
import Contact from '../components/static/Contact'

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