import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import PortfolioPage from './portfolio/PortfolioPage';
import Navigation from './utils/Navigation';
import './App.scss';

function App() {
    return (
        <>
            <Router>
                <Navigation />
                <div className="h-100vh d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <Switch>
                                <Route path={'/portfolio'}>
                                    <PortfolioPage />
                                </Route>
                                <Route path={'/'}>
                                    <HomePage />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;
