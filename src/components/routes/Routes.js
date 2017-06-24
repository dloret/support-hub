import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Catalog from '../catalog/Catalog';
import Templates from '../templates/Templates';

export const Routes = (props) => {
    return (
    <Router>
        <div className='container'>
            {props.children}
            <Route
                exact path='/'
                component={Catalog} />
            <Route 
                path={`/${props.selectedMenu}`}
                component={(props.selectedMenu === 'templates')
                    ? Templates
                    : Catalog
                }
            />
        </div>
    </Router>);
};