import './Navigation.scss';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    console.dir({ pathname: location.pathname });
    return (
        <>
            {location.pathname !== '/' && (
                <Link to={'/'} className="toggle-icon">
                    <div id="nav-icon3">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                </Link>
            )}
        </>
    );
}

export default Navigation;
