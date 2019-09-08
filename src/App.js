import React from 'react';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Gallery from './components/gallery';
import PhotoDetail from './components/photodetail';
import Contact from './components/contact.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class Main extends React.Component {
  render() {
    return(
      <div>
        <Router>
        <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/photography" exact component={Gallery} />
            <Route path="/Contact" component={Contact} />
            <Route path="/photography/:id" component={PhotoDetail} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default Main;