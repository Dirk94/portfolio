import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import PortfolioPage from './portfolio/PortfolioPage';
import './App.scss';

function App() {
    return (
        <div className="h-100vh d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <Router>
                        <Switch>
                            <Route path={'/portfolio'}>
                                <PortfolioPage />
                            </Route>
                            <Route path={'/'}>
                                <HomePage />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
