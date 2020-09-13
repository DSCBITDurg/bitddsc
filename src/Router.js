import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


// import component
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';

// import CollabPage from './pages/CollabPage';
// import BadgePage from './pages/BadgePage';
// import UserPage from './pages/UserPage';


import Layout from './components/Layout/Layout';

const githubUrlPage = 'https://dscbitdurg.github.io/bitddsc'
export default function Router() {
    return (
        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Layout>
                <Switch>
                    <Route exact path={`${githubUrlPage}/`} component={HomePage} />
                    <Route  path={`${githubUrlPage}/about`} component={AboutPage}/>

                    <Route  path={`${githubUrlPage}/contact`} component={ContactPage}/>
                    <Route  path={`${githubUrlPage}/events`} component={EventsPage}/>
                    <Route component={HomePage}/>
                    {/* <Route  path='/collab' component={CollabPage}/>
                    <Route  path='/badges' component={BadgePage}/>
                    <Route  path='/user' component={UserPage}/> */}

                </Switch>
            </Layout>
            <Footer/>
        </BrowserRouter>
        
    );
}

